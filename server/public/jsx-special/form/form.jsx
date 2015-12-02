
rc.Form = React.createClass({
	getInitialState: function () {
		return {
			isSubmitting: false,
			errors: []
		};
	},

	setListeners: function(){
		{/* listener for when validation has finished */}
		var self = this;
		grandCentral.on('validation-done', this.validationDone);
		grandCentral.on('appointmentCallback', function(response) {
			self.appointmentCallback(response);
		});
	},

	appointmentCallback: function(response) {

		// reset the form here
		var initialValue, inputs;

		inputs = this.inputs

		Object.keys(inputs).forEach(function(name, i) {
			if (name === 'productofinterest') {
				initialValue = inputs[name].getInitialState().value;
				inputs[name].setState({value: initialValue, associateValue: initialValue});
			} else {
				initialValue = inputs[name].getInitialState().defaultValue;	
				inputs[name].setState({value: undefined, associateValue: initialValue });
			}
			console.log('intiialValue is', initialValue, 'name', inputs[name]);
			
		});

		console.log("response: "+ response.code + " : " + response.message);
	},

	componentDidMount: function () {
		this.setListeners();
	},

	componentWillMount: function () {
		this.model = {};
		this.inputs = {};
		this.registerInputs(this.props.children);
	},

	validate: function(component, index){
		
		var cleanValue;
		if (component.props.validatetype === "select") {
			// the select one comes in an array so we just need to select the first value
			cleanValue = component.state.value[0];
		} else {
			cleanValue = component.state.value;
		}
		// error checking for null values
		cleanValue = cleanValue === null ? '' : cleanValue;
		// error checking for undefined values
		cleanValue = typeof cleanValue === 'undefined' ? '' : cleanValue;

		if(!rcValidate[component.props.validatetype](cleanValue)) {
			component.setState({
				errorClass : "error",
				isValid : false,
				errors: this.state.errors.push(index)
			});
		} else {
			component.setState({
				isValid : true,
				errorClass : "",
			});
		}
	},	

	validateForm: function(){
		var inputs = this.inputs;
		var that = this;
		this.allValid = false;

		Object.keys(inputs).forEach(function(name, i) {
			if(inputs[name].props.required) {
				that.validate(inputs[name], i);
			}

			if( i+1 == _.toArray(inputs).length) {
				that.allValid = that.state.errors.length == 0 ? true : false;
				that.setState({errors: []});
				grandCentral.trigger("validation-done");
			}
		});
	},

	registerInputs: function (children) {
		React.Children.forEach(children, function (child) {

			if (child.props.name) {
				child.props.attachToForm = this.attachToForm;
				child.props.detachFromForm = this.detachFromForm;
				{/*child.props.validate = this.validate;*/}
			}

			if (child.props.children) {
				this.registerInputs(child.props.children);
			}

		}.bind(this));
	},

	attachToForm: function (component) {
		this.inputs[component.props.name] = component;

		this.model[component.props.name] = component.state.value;
		{/*this.validate(component);*/}
	},

	detachFromForm: function (component) {
		delete this.inputs[component.props.name];
		delete this.model[component.props.name];
	},

	updateModel: function (component) {
		Object.keys(this.inputs).forEach(function (name) {
			if (name === "storeassociate" && this.inputs[name].state.associateValue.length < 1) {
				this.model[name] = {
						                name : "",
						                email : "",
						                strorenumber : "",
						                employeenumber : ""
						            }
			} else {
				this.model[name] = this.inputs[name].state.value;	
			}

		}.bind(this));
	},

	submit: function (event) {
		event.preventDefault();
		// creates object that will be passed to SKAVA API
		this.updateModel();
		console.log(this.model);
		{/* make validation call before calling API*/}
		this.validateForm();
	},

	validationDone: function(){
		console.log("**** isValid ***** = ", this.allValid)

		if(this.allValid){
			try {
				makeAppoinment(this.model, this.props.onSuccess);
			}
			catch(e){
				console.log(e);
			}
		}
	},

	render: function () {
		return (

	<form onSubmit={this.submit}>
		{this.props.children}
		<input type="submit" data-track="submit" disabled={this.state.isSubmitting} value="SEND" />
	</form>

		);
	}
});