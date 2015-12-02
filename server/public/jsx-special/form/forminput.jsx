rc.Form.Input = React.createClass({
    getInitialState: function () {
        return {            
            defaultValue: this.props.value || "",
            associateValue : "",
        };
    },

    componentWillMount: function () {
        this.props.attachToForm(this);
        //this.props.attachToForm(this);
    },

    componentWillUnmount: function () {
        // blocker error is being thrown
        if ( this.props ) {
            if ( this.props.detachFromForm ) {
                this.props.detachFromForm( this );
            }
        }
    },

    setValue: function (event) {
    {/* the storeasscociate input needs to return an {}, use conditional to check */}
        var val = null;
        if(this.props.name === "storeassociate") {
            val = {
                name : "",
                email : "",
                strorenumber : "",
                employeenumber : event.currentTarget.value
            };
        } else {
            val = event.currentTarget.value;
        }
        this.setState({
            value: val,
            associateValue: event.currentTarget.value
        });
    },

    checkCharacters: function( event ) {
        var key;
        key = event.keyCode ? event.keyCode : event.which;
        if ( $.inArray( key, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (key == 65 && ( event.ctrlKey === true || event.metaKey === true ) ) ||
            // Allow: home, end, left, right, down, up
            (key >= 35 && key <= 40)) {
            // let it happen, don't do anything
            return;
        }
        switch ( this.limitCharacterInput ) {
            case "numeric":
                // only allow numeric chars stack overflow
                // http://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery
                
                // Ensure that it is a number and stop the keypress
                return !((event.shiftKey || (key < 48 || key > 57)) && (key < 96 || key > 105));
            case "letters":
                return ( (key >= 65 && key <= 90) || (key === 8) );
            case "alphanumeric":
                //return false;
                return !((event.shiftKey || (key < 48 || key > 57)) && (key < 96 || key > 105)) || ( (key >= 65 && key <= 90) || (key === 8) );
            default:
                break;
        }
    },

    render: function () {
        {/* var markAsValid = this.state.isValid;
            var markAsRequired = this.props.required && !this.state.value;
        */}
        
        // console.log(this.props.cl);
        var className = '' || this.props.name;
        var errorMessage = this.state.errorMessage || "";
        var errorClass = this.state.errorClass || "";
        var val = (this.props.name == "storeassociate") ? this.state.associateValue : this.state.value;
        var maxLength;
        if ( this.props.name === "firstname" || this.props.name === "lastname" ) {
            maxLength = 20;
        } else if ( this.props.name === "address1" ) {
            maxLength = 40;
        } else if ( this.props.name === "zipcode" ) {
            maxLength = 5;
        } else if ( this.props.name === "phone") {
            maxLength = 10;
        } else if ( this.props.name === "storeassociate") {
            maxLength = 10;
        } else {
            maxLength = "";
        }

        if ( this.props.name === "zip" ) {
            maxLength = 5;
        }
        this.limitCharacterInput = this.props.limitCharacterInput;

        return (
    <div>
        <MyInput type="text" data-track={this.props.track} className={className + " " + errorClass} name={this.props.name} placeholder={this.props.plhd} onKeyDown={this.checkCharacters} onChange={this.setValue} value={val} maxLength={maxLength} />
        {/*{this.props.required ? <span className="error">{errorMessage}</span> : null } */}
    </div>
        );
    }
});