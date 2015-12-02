
/**** COMPILED 2015-12-01 ****/

/* public/js/router/rc_header_v1.js */
var rc = {};
/* public/jsx-pages/blinds/blinds.jsx */

rc.Blinds = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"blindspage"} midComponent={<rc.BlindsComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-pages/drapery/drapery.jsx */

rc.Drapery = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"shadespage"} midComponent={<rc.DraperyComp />} sideComponent={<rc.FormComponent />} />
    </div>
        );
    }
});
/* public/jsx-pages/gallery/gallery.jsx */

rc.Gallery = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        //console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"gallerypage"} midComponent={<rc.GalleryComp />} sideComponent={<rc.FormComponent />} />
    </div>
        );
    }
});
/* public/jsx-pages/home/home.jsx */

rc.HomePageComponent = React.createClass({

    getInitialState:function(){
        return _.extend(app.status, {
        })
    },
    

    render:function(){
        console.log(this.constructor.displayName+' render()');
        //<rc.MainContent id={"homepage"} midComponent={<rc.Carousel />} sideComponent={<rc.FormComponent />} />
        //<rc.TxtColComponent />
        //         
        /*
        <rc.MainContent id={"homepage"} midComponent={<rc.Carousel />} sideComponent={<rc.FormComponent />} />
        <rc.TxtColComponent />
        <div className="row specialoffer">
            <h3 className="center title">Special Offers</h3>

            <rc.SpecialOfferComponent figureClass="narrow" config={SiteConfig.offers.offer2} />

            <rc.SpecialOfferComponent figureClass="wide" config={SiteConfig.offers.offer1} />
        </div>
        <rc.GalleryComponent />
        */

        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"homepage"} midComponent={<rc.Carousel />} sideComponent={<rc.FormComponent />} />
        <rc.TxtColComponent />
        <div className="row specialoffer">
            <h3 className="center title">Special Offers</h3>

            <rc.SpecialOfferComponent figureClass="narrow" config={SiteConfig.offers.offer2} />

            <rc.SpecialOfferComponent figureClass="wide" config={SiteConfig.offers.offer1} />
        </div>
        <rc.GalleryComponent />
    </div>
        );
    }
});
/* public/jsx-pages/motorization/motorization.jsx */

rc.Motorization = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"motorizationpage"} midComponent={<rc.MotorizationComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-pages/offers/offers.jsx */

rc.Offers = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"offerspage"} midComponent={<rc.OffersComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-pages/productoverview/productoverview.jsx */

rc.ProductOverview = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"prodoverviewpage"} midComponent={<rc.OverviewComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-pages/services/services.jsx */

rc.Services = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"servicespage"} midComponent={<rc.ServicesComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-pages/shades/shades.jsx */

rc.Shades = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"shadespage"} midComponent={<rc.ShadesComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-pages/shutters/shutters.jsx */

rc.Shutters = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"shutterspage"} midComponent={<rc.ShuttersComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-pages/specialtyshapes/specialtyshapes.jsx */

rc.Specialtyshapes = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */} 
        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"specialtyshapespage"} midComponent={<rc.SpecialtyshapesComp />} sideComponent={<rc.FormComponent />} />        
    </div>
        );
    }
});
/* public/jsx-special/additionalservices/additionalservices.jsx */
rc.AdditionalServices = React.createClass({
	
	render: function(){
		return (

	<div className="row additional-services">
        <figure>
            <img src={assetsDirectory+"images/additional-services.jpg"} alt="ADDITIONAL SERVICES"/>
            <figcaption>
            	ADDITIONAL DECORATING SERVICES
            </figcaption>
        </figure>
    </div>

		)
	}
})
/* public/jsx-special/blinds/blindscomp.jsx */

rc.BlindsComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="blinds-content"> 
        <h2 className="title">Hunter Douglas Blinds</h2>
        <h3 className="subtitle">See your space differently with custom blinds to frame your view.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-1.jpg"} />
                <figcaption>Parkland<sup>&trade;</sup><br /> Wood Blinds</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-2.jpg"} />
                <figcaption>Everwood<sup>&reg;</sup> alternative wood</figcaption>
            </figure>
            <figure className="left">
                <img src={assetsDirectory+"images/blinds/blinds-3.jpg"} />
                <figcaption>Vertical blinds</figcaption>
            </figure>
        </div>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-4.jpg"} />
                <figcaption>Skyline<sup>&reg;</sup> gliding window panels</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-5.jpg"} />
                <figcaption>MODERN PRECIOUS METALS<sup>&reg;</sup></figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-6.jpg"} />
                <figcaption>NATURAL ELEMENTS<sup>&trade;</sup> COLLECTION </figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});
/* public/jsx-special/carousel/carousel.jsx */


rc.Carousel = React.createClass({

	componentDidMount: function () {
		$("#carousel").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".slick-prev",
			nextArrow: ".slick-next"
		});
	},	
  
	render:function() {

		return (
		<div className="c-wrapper">	
			<a className="slick-prev arrow" data-track="carousel.left.arrow"><img src={assetsDirectory+"images/carousel/arrow-left.png"} /></a>
			<a className="slick-next arrow" data-track="carousel.right.arrow"><img src={assetsDirectory+"images/carousel/arrow-right.png"} /></a>
			<img src={assetsDirectory+"images/custom-decor.png"} className="custom-decor-button" />
			<div id="carousel">		
				<div><img src={assetsDirectory+"images/carousel/slide-1.jpg"} /></div>
				<div><img src={assetsDirectory+"images/carousel/slide-2.jpg"} /></div>
				<div><img src={assetsDirectory+"images/carousel/slide-3.jpg"} /></div>
			</div>
		</div>

		);
	}

});
/* public/jsx-special/drapery/draperycomp.jsx */


rc.DraperyComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="drapery-content"> 
        <h2 className="title">Custom Drapery</h2>
        <h3 className="subtitle">Dress up your space &amp; create a mood with one-of-a-kind window dressings.</h3>
        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/drapery/drapery-1.jpg"} />
                <figcaption>drapery</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/drapery/drapery-2.jpg"} />
                <figcaption>valances &amp; cornices</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/drapery/drapery-3.jpg"} />
                <figcaption>fabric shades</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});
/* public/jsx-special/form/form.jsx */

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
/* public/jsx-special/form/formcomponent.jsx */

rc.FormComponent = React.createClass({       
    getInitialState: function(){
        return {
            url: "https://iissrv.customdecorators.com/macy/appointment.aspx"
        }
    },

    componentDidMount: function () {
        // jquery plugin to set placeholder text ie9
        // https://github.com/mathiasbynens/jquery-placeholder
        //$(".formwrapper input, .formwrapper textarea").placeholder({ customClass: 'my-placeholder' });
    },

    appointmentCallback: function (response) {
        {/* 
            change the content / view of the form after a successful submit
            from SKAVA API:  appointmentCallback(response)
            response = { 
                code : 0/1 --- Its contain only integer value "0 - Success/1 - Error"
                message : "success/Dynamic error Message" --- Its contain only string value 
            } 
        */}
        grandCentral.trigger('appointmentCallback', response); // form.jsx
        

    },

    render:function(){
        return (
    
    <div className="formwrapper">
        <h4 className="center">Schedule your free <em>in-home</em> design consultation now:</h4>
        <strong>1&#45;800&#45;204&#45;0101</strong>

        <rc.Form onSuccess={this.appointmentCallback} url={this.state.url}>
            <rc.Form.Input track="form.firstname" name="firstname" plhd="FIRST NAME" required validatetype="string" limitCharacterInput="letters" errorsMsg="Please enter your first name" />
            <rc.Form.Input track="form.lastname" name="lastname" plhd="LAST NAME" required validatetype="string" limitCharacterInput="letters" errorsMsg="Please enter your last name" />
            <rc.Form.Input track="form.address" name="address1" plhd="ADDRESS" required validatetype="string" errorsMsg="Please enter your address" />

            <rc.Form.Input track="form.zip" name="zipcode" plhd="ZIP CODE" required validatetype="zip" limitCharacterInput="numeric" errorsMsg="Please enter your 5 digit zip code" />
            
            <rc.Form.Input track="form.phone" name="phone" plhd="PHONE" required validatetype="phone" limitCharacterInput="numeric" errorsMsg="Please enter your phone number" />
            <rc.Form.Input track="form.email" name="email" plhd="EMAIL" required validatetype="email" errorsMsg="Please enter a valid email address" />
            {/*productofinterest should return an array ["string", "string"] */}
            <rc.Form.Select name="productofinterest" cl="smallTxt" required validatetype="select" errorsMsg="Please select an area of interest">
                <rc.Form.Option value="default" txt="PRIMARY AREA OF INTEREST" />
                <rc.Form.Option value="offers" txt="Offers" />
                <rc.Form.Option value="services" txt="Services" />
                <rc.Form.Option value="blinds" txt="Blinds" />
                <rc.Form.Option value="shades" txt="Shades" />
                <rc.Form.Option value="shutters" txt="Shutters" />
                <rc.Form.Option value="motorization" txt="Motorization" />
                <rc.Form.Option value="specialtyshapes" txt="Specialty Shapes" />
                <rc.Form.Option value="drapery" txt="Drapery" />
            </rc.Form.Select>
            {/* return an object {name: string, email: string, storenumber: string, employeenumber: string} */}
            <rc.Form.Input track="form.storeassociate"  name="storeassociate" cl="smallTxt" limitCharacterInput="alphanumeric" plhd="STORE ASSOCIATE #" />
        </rc.Form>
        
    </div>

        );
    }
});
/* public/jsx-special/form/forminput.jsx */
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
/* public/jsx-special/form/formoption.jsx */
rc.Form.Option = React.createClass({
    
    render: function () {
        
        return (
            <option value={this.props.value}>{this.props.txt}</option>
        );
    }
});

/* public/jsx-special/form/formselect.jsx */
rc.Form.Select = React.createClass({
    getInitialState: function () {
        return {            
            value: [this.props.children[0].props.value]
        };
    },

    componentWillMount: function () {
        this.props.attachToForm(this);
    },

    componentWillUnmount: function () {
        if ( this.props ) {
            if ( this.props.detachFromForm ) {
                this.props.detachFromForm( this );
            }
        }
    },

    handleChange: function (event) {
        var selectedValue = event.currentTarget.value;
        this.setState( {value: [selectedValue]} );        
    },

    render: function () {
        var className = '' || this.props.cl;
        var errorMessage = this.state.errorMessage || "";
        var errorClass = this.state.errorClass || "";

        return (
    <div>        
        <select className={className +" "+ errorClass} name={this.props.name} onChange={this.handleChange} value={this.state.value}>
            {this.props.children}   
        </select>
        {/*{this.props.required ? <span className="error">{errorMessage}</span> : null }*/}
    </div>
        );
    }
});


/* public/jsx-special/gallery/gallerycomp.jsx */


rc.GalleryComp = React.createClass({
    getInitialState:function(){
        return  {
            mainImage: assetsDirectory+"images/gallery/m-hybridshutters.jpg",
            caption: "hunter douglas new style<sup>®</sup> hybrid shutters"                      
        }
    },

    componentDidMount: function(){
        //window.scrollTo(0,0);
    }, 

    escapeHTML: function(string){
        var cleanString = jQuery.parseHTML(string);
        return cleanString.join("");
    },

    clickHandler: function(thumb){        
        var new_src = thumb.state.src.replace("t-", "m-");
        var new_caption = thumb.state.caption;
        this.setState({
            mainImage: new_src,
            caption: new_caption
        });
        //window.scrollTo(0,0);
    },

    render:function(){        
       
        return (    
    <div className="gallery-content">
        <figure>
            <div className="gallery-header">
                <div className="headline">Idea Gallery</div>
                <div className="copy">Get inspired & think big. Enlarge the images by clicking on the boxes below.</div>
            </div>
            <img className="main-image" ref="mainImage" src={this.state.mainImage} width="648" height="385" />
            <figcaption ref="captionContainer" dangerouslySetInnerHTML={{__html: this.state.caption}}></figcaption>
        </figure>
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-hybridshutters.jpg"} data-caption="hunter douglas new style<sup>®</sup> hybrid shutters" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-woodblinds.jpg"} data-caption="HUNTER DOUGLAS PARKLAND<sup>™</sup> WOOD BLINDS" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-modernromanshades.jpg"} data-caption="HUNTER DOUGLAS VIGNETTE<sup>®</sup> MODERN ROMAN SHADES" />

        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-sheers.jpg"} data-caption="HUNTER DOUGLAS Luminette<sup>®</sup> privacy sheers" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-modernromanshades2.jpg"} data-caption="HUNTER DOUGLAS vigNETTE<sup>®</sup> modern roman shades" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-softshades.jpg"} data-caption="HUNTER DOUGLAS solera<sup>®</sup> soft shades" />

        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-motorization.jpg"} data-caption="HUNTER DOUGLAS specialty shapes skylights" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-glidingpanels.jpg"} data-caption="HUNTER DOUGLAS skykine<sup>®</sup> gliding window panels" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-fabricshades.jpg"} data-caption="custom fabric shades" />
   
    </div>
        );
    }
});
/* public/jsx-special/gallery/gallerythumb.jsx */


rc.GalleryThumb = React.createClass({

    componentDidMount: function(){
        this.setState({
            src: this.props.src,
            caption: this.props["data-caption"]
        })
    },

    clickHandler:function(){
       this.props.handler(this);
    },
    
    render:function(){       
        
        return (    
    <a className="gallery-thumb" onClick={this.clickHandler}> 
        <img src={this.props.src} alt={this.props["data-caption"]} width="200" height="225" />   
    </a>
        );
    }
}); 
/* public/jsx-special/gallerycomponent/gallerycomponent.jsx */

rc.GalleryComponent = React.createClass({
	
	render: function(){
		return (
	<div className="row gallerycomponent">
		<h3 className="title center">Need inspiration? <a href="#/gallery" data-track="visitourgallery">visit our gallery</a></h3>
		<a href="#/shutters" className="gallery-link" data-track="shutters" id="shutters"></a>
		<a href="#/blinds" className="gallery-link" data-track="blinds" id="blinds"></a>
		<a href="#/shades" className="gallery-link" data-track="shades" id="shades"></a>
		<img src={assetsDirectory+"images/gallery-row.jpg"} className="backImage" />
	</div>
		);
	}
})
/* public/jsx-special/loader/loader.jsx */

// USAGE

// grandCentral.trigger('loaderStart', 'pageload');
// grandCentral.trigger('loaderStart', 'loadmypanel');
// grandCentral.trigger('loaderEnd', 'pageload');
// grandCentral.trigger('loaderEnd', 'loadmypanel');

// the loader will go away once the stack is emptied


// DEPENDANCY : 

// jQuery    $.inArray


rc.loader = React.createClass({
    // no need for stack to be bound to data 
    // so it is a property of the component and outside of this.state
    stack : [],  
    getInitialState:function(){
        return {
            show : false
        }
    },
    componentDidMount : function(currentPage){
        var self= this;
        // unbind before binding in case component unmounts/remounts, optionally use componentWillUnmount    
        grandCentral.off('loaderStart').on('loaderStart', function(uniqueString){
            if($.inArray(uniqueString, self.stack)==-1){
                console.log('loaderStart(' + uniqueString + ')');
                self.stack.push(uniqueString);
                self.setState({ show: true });
            }

        });
        // unbind before binding in case component unmounts/remounts        
        grandCentral.off('loaderEnd').on('loaderEnd', function(uniqueString){
            var i = $.inArray(uniqueString, self.stack);
            if(i>-1){
                self.stack.splice(i,1);
                console.log('loaderEnd(' + uniqueString + ')');
            }
            if(self.stack.length==0){
                self.setState({ show: false });
            }
        });        
    },    
    reset:function() {
        this.stack = [];
        this.setState({ show: false });
    },
    render:function(){
        var classes = this.state.show ? 'active' : '';
        return (
<div id="loader" className={classes}>
    <div className="loadingmessage">
        <img className="spinner" src={SiteConfig.assetsDirectory+'images/ui/spinner.gif'}/>
    </div>
</div>            
        );
    }
});

/* public/jsx-special/maincontent/maincontent.jsx */
rc.MainContent = React.createClass({

    componentDidMount: function () {
        window.setTimeout(function(){
                 //grandCentral.trigger('resizePage');     
        },500 )          
    },
	
	render: function(){
		return (

<div id={this.props.id} className="main-content">
    <div className="row">
        <div className="col col-left">
            {this.props.midComponent}
        </div>    
        <div className="col col-right">
            {this.props.sideComponent}
        </div>
    </div>
</div> 

		);
	}

});

/* public/jsx-special/motorization/motorizationcomp.jsx */

rc.MotorizationComp = React.createClass({
    getInitialState:function(){
        // video player --- it's still in backbone
        this.videoview = new VideoView();

        return _.extend(app.status, {
        })
    },

    componentDidMount: function () {
        var self = this;

        this.videoview.render('#videoFrame');
        this.videoview.buildVideo( "4640246893001" );
    },

    clickVideo: function() {
        //alert('click');
        //$("#videoFrame").find(">:first-child").trigger('click');
        //this.player.playVideo();

        var iframeTag = document.querySelector("iframe"),
        win = iframeTag.contentWindow;

        win.postMessage("playVideo","http://c.brightcove.com");
    },

    render:function(){
        console.log(this.constructor.displayName+' render()');
        // <iframe id="videoFrame" data-track="video.motorization" width="560" height="315" src="https://www.youtube.com/embed/sdSG2-lc_MA" frameborder="0" allowfullscreen></iframe>

        // <figure>
        //     <figcaption><a className="goto" id="playVideo" onClick={this.clickVideo}>watch the video</a></figcaption>
        // </figure>


        return (    
    <div className="motorization-content"> 
        <h2 className="title">Hunter Douglas PowerView<sup>&trade;</sup> Motorization</h2>
        <h3 className="subtitle">Intelligent shades that simplify your life.</h3>

        <div className="row">
            <div id="videoFrame" data-track="video.motorization"></div>
        </div>
   
    </div>
        );
    }
});
/* public/jsx-special/nav/nav.jsx */
rc.Nav = React.createClass({
	getInitialState:function(){
        return {
        	currentPage : ''
        }
    },
	componentDidMount : function(){
		var self= this;
	    grandCentral.off('pagechange').on('pagechange', function(data){
			self.setState({
				currentPage: data.currentPage
			});
	    });
	},
	getClassNameWithActive : function(arg){
		var className = 'navitem';
		if (arg == this.state.currentPage) {
			className = className + ' active';
		}
		return className;
	},
    render:function(){
        return (

<div className="shop-nav-wrapper clearfix">
	<div className="col brand-category">
		<a href="#/home" data-track="backtohome"><img src={assetsDirectory+"images/custom-window-logo.jpg"} alt="CUSTOM WINDOW FASHIONS" /></a>
	</div>
	<div className="col">
		<a href="#/home" data-track="backtohome" className="home-link"><h1><img src={assetsDirectory+"images/shop-at-home-logo.png"} alt="MACY'S SHOP AT HOME" /></h1></a>
	</div>
	<div className="col">
		<nav>
			<div className="row">
			<a className={this.getClassNameWithActive('productoverview')}  href="#/productoverview" data-track="nav.productoverview">Product Overview</a>
			<a className={this.getClassNameWithActive('offers')}  href="#/offers" data-track="nav.offers">Offers</a>
			<a className={this.getClassNameWithActive('services')}  href="#/services" data-track="nav.services">Services</a>
			<a className={this.getClassNameWithActive('blinds')}  href="#/blinds" data-track="nav.blinds">Blinds</a>
			<a className={this.getClassNameWithActive('shades')}  href="#/shades" data-track="nav.shades">Shades</a>
			</div>
			<div className="row">
			<a className={this.getClassNameWithActive('shutters')}  href="#/shutters" data-track="nav.shutters">Shutters</a>
			<a className={this.getClassNameWithActive('motorization')}  href="#/motorization" data-track="nav.motorization">Motorization</a>
			<a className={this.getClassNameWithActive('specialtyshapes')}  href="#/specialtyshapes" data-track="nav.specialtyshapes">Specialty Shapes</a>
			<a className={this.getClassNameWithActive('drapery')}  href="#/drapery" data-track="nav.drapery">Drapery</a>
			</div>
		</nav>
	</div>
</div>

        );
    }
});
	
/* public/jsx-special/offerscontent/offerscomp.jsx */

rc.OffersComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="offers-content"> 
        <h2 className="title">Special Offers</h2>
        <h3 className="subtitle">Save on custom window treatments.</h3>        

        <div className="row specialoffer">
            <figure>
                <img className="left" src={assetsDirectory+"images/offers/offers-shading.jpg"} />
                <figcaption className="right">                        
                    <h4 className="itemname">Hunter Douglas</h4>
                    <strong>Free Literise<sup>&reg;</sup> Cordless <br />Operating System</strong>                     
                    <p className="description">With purchase of Silhouette<sup>&reg;</sup> window shadings from 12/8/15-1/30/16.</p>
                    <p className="legal">
Instant savings valid on qualifying purchases made between 12/8/15 - 1/30/16. A qualifying purchase is defined as a purchase
 of any of the product models set forth above. Offer excludes Nantucket<sup>&trade;</sup> window shadings, a collection of Silhouette&reg; window
  shadings. No minimum or maximum purchase required. Additional limitations may apply. Offers may not be combined. All rights
   reserved. All trademarks herein reserved by their respective corporations.
   </p>
                </figcaption>  
            </figure>
        </div> 

        <div className="row specialoffer">
            <figure>
                <img className="right" src={assetsDirectory+"images/offers/offers-drapery.jpg"} />
                <figcaption className="left">                        
                    <h4 className="itemname">Custom Drapery</h4>
                    <strong>25% OFF</strong>                     
                    <p className="description">Our top 25 drapery fabrics. Offer valid 12/8/15-2/29/16.</p>
                    <p className="legal">
Sale ends 2/29/16. Ask your designer for details. Not applicable to Simplicity by Design, Hunter Douglas, hardware,
 shipping/freight, installation or tax. Reg. &amp; orig. prices are offering prices and savings may not be based on actual sales.
  Some orig. prices not in effect during the past 90 days. Prices and merchandise may differ on macys.com.
   </p>
                </figcaption>  
            </figure>
        </div>    


    </div>
        );
    }
});
/* public/jsx-special/productoverview/overviewcomp.jsx */

rc.OverviewComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="overview-content"> 
        <h2 className="title">Custom Window Treatments</h2>
        <h3 className="subtitle">Cultivate your unique perspective with custom window treatments & more.</h3>        

        <div className="row overviewgrid grid">
            <figure>
                <a href="#/blinds" data-track="blinds"><img src={assetsDirectory+"images/overview/wood-blinds.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="blinds" href="#/blinds">blinds</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/shades" data-track="shades"><img src={assetsDirectory+"images/overview/window-shadings.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="shades" href="#/shades">shades</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/shutters" data-track="shutters"><img src={assetsDirectory+"images/overview/hardwood-shutters.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="shutters" href="#/shutters">shutters</a>
                </figcaption>
            </figure>
        </div>
        <div className="row overviewgrid grid">
            <figure>
                <a href="#/motorization" data-track="motorization"><img src={assetsDirectory+"images/overview/scene-controller.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="motorization" href="#/motorization">powerview<sup>&trade;</sup><br />motorization</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/specialtyshapes" data-track="specialtyshapes"><img src={assetsDirectory+"images/overview/hybrid-shutters.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="specialtyshapes" href="#/specialtyshapes">specialty shapes</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/drapery" data-track="customdrapery"><img src={assetsDirectory+"images/overview/custom-drapery.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="customdrapery" href="#/drapery">custom drapery</a>
                </figcaption>
            </figure>
        </div>
        <rc.AdditionalServices />        
    </div>
        );
    }
});
/* public/jsx-special/services/servicescomp.jsx */

rc.ServicesComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="services-content"> 
        <h2 className="title">The Macy&#39;s Shop at Home Experience</h2>
        <h3 className="subtitle">Explore thousands of colors, styles &amp; fabrics—just like you would in a
         showroom, but in the comfort of your own home. 
        </h3>

        <div className="row grid">
            <figure className="left">
                <img src={assetsDirectory+"images/services/services-1.jpg"} />
                <figcaption>Sign up for a free in-home consultation with one of our designers.</figcaption>
            </figure>
            <figure className="left">
                <img src={assetsDirectory+"images/services/services-2.jpg"} />
                <figcaption>Choose your window treatments with our expert guidance.</figcaption>
            </figure>
            <figure className="left">
                <img src={assetsDirectory+"images/services/services-3.jpg"} />
                <figcaption>Let our full-service team handle the measuring, delivery &amp; installation.</figcaption>
            </figure>
        </div>

        <div className="row expert-designers">
            <h4>EXPERT DESIGNERS</h4>
            <p>Our team of professionals will be by your side to guide you through the process. 
            </p>
            <p>
Macy’s Shop at Home designers understand the challenges &amp; the excitement of a decorating project. 
            </p>
            <p>
With their expertise &amp; product knowledge, Your Macy&#39;s Shop at Home designer will help you sort through
 the wide array of colors, textures &amp; new technologies available. Together, you’ll determine a style, a budget &amp;
  a time frame that suits your needs &amp; your lifestyle. 

            </p>
        </div>       
   
    </div>
        );
    }
});
/* public/jsx-special/shades/shadescomp.jsx */

rc.ShadesComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="shades-content"> 
        <h2 className="title">Hunter Douglas Shades</h2>
        <h3 className="subtitle">From discreet to dramatic, stylish shades enhance every room.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shades/shades-1.jpg"} />
                <figcaption>Silhouette<sup>&reg;</sup> window shadings</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-2.jpg"} />
                <figcaption>Duette<sup>&reg;</sup> honeycomb shades</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-3.jpg"} />
                <figcaption>Pirouette<sup>&reg;</sup> window shadings</figcaption>
            </figure>
        </div>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shades/shades-4.jpg"} />
                <figcaption>Luminette<sup>&reg;</sup> privacy sheers</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-5.jpg"} />
                <figcaption>Vignette<sup>&reg;</sup> modern Roman shades</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-6.jpg"} />
                <figcaption>Solera<sup>&reg;</sup> soft shades</figcaption>
            </figure>
        </div>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shades/shades-7.jpg"} />
                <figcaption>POWERVIEW<sup>&trade;</sup> MOTORIZATION</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-8.jpg"} />
                <figcaption>Provenance<sup>&reg;</sup> woven wood shades</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-9.jpg"} />
                <figcaption>Design Studio<sup>&trade;</sup> Roman shades</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});
/* public/jsx-special/shutters/shutterscomp.jsx */

rc.ShuttersComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="blinds-content"> 
        <h2 className="title">Hunter Douglas Custom Shutter Collection</h2>
        <h3 className="subtitle">Elegant shutters frame your windows with panache.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shutters/shutters-1.jpg"} />
                <figcaption>Heritance<sup>®</sup> hardwood shutters</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shutters/shutters-2.jpg"} />
                <figcaption>NewStyle<sup>®</sup> hybrid shutters</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shutters/shutters-3.jpg"} />
                <figcaption>Palm Beach<sup>™</sup> polysatin shutters</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});
/* public/jsx-special/specialoffer/specialoffer.jsx */

rc.SpecialOfferComponent = React.createClass({

	render: function(){
		return (
			
	<figure className={this.props.figureClass}>
		<a href={this.props.config.learnmore}><img src={this.props.config.imgsrc} data-track={this.props.config.track} /></a>
		<figcaption>						
			<h4 className="itemname">{this.props.config.itemname} <strong>{this.props.config.savings}</strong></h4>						
			<p className="description">{this.props.config.description}{}
				<a className="learnmore" href={this.props.config.learnmore} data-track={this.props.config.track}>learn more</a>
			</p>
		</figcaption>					
	</figure>
	
		);
	}	
});
/* public/jsx-special/specialtyshapes/specialtyshapescomp.jsx */

rc.SpecialtyshapesComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="specialtyshapes-content"> 
        <h2 className="title">Hunter Douglas Specialty Shapes</h2>
        <h3 className="subtitle">Discover specialty shapes to suit unique windows throughout your home.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/specialtyshapes/specialtyshapes-1.jpg"} />
                <figcaption>skylights</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/specialtyshapes/specialtyshapes-2.jpg"} />
                <figcaption>arches</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/specialtyshapes/specialtyshapes-3.jpg"} />
                <figcaption>triangles</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});
/* public/jsx-special/txtcolcomponent/txtcolcomponent.jsx */
rc.TxtColComponent = React.createClass({

	componentDidMount: function () {
        this.modalView = new ModalView();
    },

    clickHandler: function(e){
    	//console.log(e.target);
    	this.modalView.open("Hello World!");
    	//console.log(this.modalView)
    }, 
	
	render: function(){

		return (
	<div className="row txtCols">		
		<div className="col col1">
			<h3>Get <strong>Inspired</strong></h3>
			<p>Your Macy’s Shop at Home designer will assist &amp; guide you through the experience, helping you to find a style
			 for your space that you’ll love for years to come.</p>
		</div>
		<div className="col col2">
			<h3>Let Us <strong>Do the work</strong></h3>
			<p>Once you’ve made your selections, simply relax while we handle the measuring, ordering & installation. Macy&#39;s
			 Shop at Home assures quality and your complete satisfaction.</p>

		</div>
		<div className="col col3">
			<h3>Enjoy <strong>Your space</strong></h3>
			<p>When your project is complete, prepare yourself for compliments and years of enjoyment.</p>
		</div>

		<div className="row center">
			<em>Learn more about Macys decorating services <a className="watchvideo" data-track="video.home" onClick={this.clickHandler}>watch the video</a></em>
		</div>
	</div>
		);
	}

})