
/**** COMPILED 2015-12-01 ****/

/* public/js/router/rc_header_v1.js */
"use strict";

var rc = {};
/* public/jsx-pages/blinds/blinds.jsx */

rc.Blinds = React.createClass({
    displayName: "Blinds",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "blindspage", midComponent: React.createElement(rc.BlindsComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/drapery/drapery.jsx */

rc.Drapery = React.createClass({
    displayName: "Drapery",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "shadespage", midComponent: React.createElement(rc.DraperyComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/gallery/gallery.jsx */

rc.Gallery = React.createClass({
    displayName: "Gallery",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        //console.log(this.constructor.displayName+' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "gallerypage", midComponent: React.createElement(rc.GalleryComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/home/home.jsx */

rc.HomePageComponent = React.createClass({
    displayName: "HomePageComponent",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
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

        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "homepage", midComponent: React.createElement(rc.Carousel, null), sideComponent: React.createElement(rc.FormComponent, null) }),
            React.createElement(rc.TxtColComponent, null),
            React.createElement(
                "div",
                { className: "row specialoffer" },
                React.createElement(
                    "h3",
                    { className: "center title" },
                    "Special Offers"
                ),
                React.createElement(rc.SpecialOfferComponent, { figureClass: "narrow", config: SiteConfig.offers.offer2 }),
                React.createElement(rc.SpecialOfferComponent, { figureClass: "wide", config: SiteConfig.offers.offer1 })
            ),
            React.createElement(rc.GalleryComponent, null)
        );
    }
});
/* public/jsx-pages/motorization/motorization.jsx */

rc.Motorization = React.createClass({
    displayName: "Motorization",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "motorizationpage", midComponent: React.createElement(rc.MotorizationComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/offers/offers.jsx */

rc.Offers = React.createClass({
    displayName: "Offers",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "offerspage", midComponent: React.createElement(rc.OffersComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/productoverview/productoverview.jsx */

rc.ProductOverview = React.createClass({
    displayName: "ProductOverview",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "prodoverviewpage", midComponent: React.createElement(rc.OverviewComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/services/services.jsx */

rc.Services = React.createClass({
    displayName: "Services",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "servicespage", midComponent: React.createElement(rc.ServicesComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/shades/shades.jsx */

rc.Shades = React.createClass({
    displayName: "Shades",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "shadespage", midComponent: React.createElement(rc.ShadesComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/shutters/shutters.jsx */

rc.Shutters = React.createClass({
    displayName: "Shutters",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "shutterspage", midComponent: React.createElement(rc.ShuttersComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-pages/specialtyshapes/specialtyshapes.jsx */

rc.Specialtyshapes = React.createClass({
    displayName: "Specialtyshapes",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        {/* pass in components for content modules as properties */}
        return React.createElement(
            "div",
            { className: "content-wrapper" },
            React.createElement(rc.MainContent, { id: "specialtyshapespage", midComponent: React.createElement(rc.SpecialtyshapesComp, null), sideComponent: React.createElement(rc.FormComponent, null) })
        );
    }
});
/* public/jsx-special/additionalservices/additionalservices.jsx */
rc.AdditionalServices = React.createClass({
    displayName: "AdditionalServices",

    render: function render() {
        return React.createElement(
            "div",
            { className: "row additional-services" },
            React.createElement(
                "figure",
                null,
                React.createElement("img", { src: assetsDirectory + "images/additional-services.jpg", alt: "ADDITIONAL SERVICES" }),
                React.createElement(
                    "figcaption",
                    null,
                    "ADDITIONAL DECORATING SERVICES"
                )
            )
        );
    }
});
/* public/jsx-special/blinds/blindscomp.jsx */

rc.BlindsComp = React.createClass({
    displayName: "BlindsComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "blinds-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Hunter Douglas Blinds"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "See your space differently with custom blinds to frame your view."
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/blinds/blinds-1.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Parkland",
                        React.createElement(
                            "sup",
                            null,
                            "™"
                        ),
                        React.createElement("br", null),
                        " Wood Blinds"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/blinds/blinds-2.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Everwood",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " alternative wood"
                    )
                ),
                React.createElement(
                    "figure",
                    { className: "left" },
                    React.createElement("img", { src: assetsDirectory + "images/blinds/blinds-3.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Vertical blinds"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/blinds/blinds-4.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Skyline",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " gliding window panels"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/blinds/blinds-5.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "MODERN PRECIOUS METALS",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        )
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/blinds/blinds-6.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "NATURAL ELEMENTS",
                        React.createElement(
                            "sup",
                            null,
                            "™"
                        ),
                        " COLLECTION "
                    )
                )
            )
        );
    }
});
/* public/jsx-special/carousel/carousel.jsx */

rc.Carousel = React.createClass({
    displayName: "Carousel",

    componentDidMount: function componentDidMount() {
        $("#carousel").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: ".slick-prev",
            nextArrow: ".slick-next"
        });
    },

    render: function render() {

        return React.createElement(
            "div",
            { className: "c-wrapper" },
            React.createElement(
                "a",
                { className: "slick-prev arrow", "data-track": "carousel.left.arrow" },
                React.createElement("img", { src: assetsDirectory + "images/carousel/arrow-left.png" })
            ),
            React.createElement(
                "a",
                { className: "slick-next arrow", "data-track": "carousel.right.arrow" },
                React.createElement("img", { src: assetsDirectory + "images/carousel/arrow-right.png" })
            ),
            React.createElement("img", { src: assetsDirectory + "images/custom-decor.png", className: "custom-decor-button" }),
            React.createElement(
                "div",
                { id: "carousel" },
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/carousel/slide-1.jpg" })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/carousel/slide-2.jpg" })
                ),
                React.createElement(
                    "div",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/carousel/slide-3.jpg" })
                )
            )
        );
    }

});
/* public/jsx-special/drapery/draperycomp.jsx */

rc.DraperyComp = React.createClass({
    displayName: "DraperyComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "drapery-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Custom Drapery"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "Dress up your space & create a mood with one-of-a-kind window dressings."
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/drapery/drapery-1.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "drapery"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/drapery/drapery-2.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "valances & cornices"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/drapery/drapery-3.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "fabric shades"
                    )
                )
            )
        );
    }
});
/* public/jsx-special/form/form.jsx */

rc.Form = React.createClass({
    displayName: "Form",

    getInitialState: function getInitialState() {
        return {
            isSubmitting: false,
            errors: []
        };
    },

    setListeners: function setListeners() {
        {/* listener for when validation has finished */}
        var self = this;
        grandCentral.on('validation-done', this.validationDone);
        grandCentral.on('appointmentCallback', function (response) {
            self.appointmentCallback(response);
        });
    },

    appointmentCallback: function appointmentCallback(response) {

        // reset the form here
        var initialValue, inputs;

        inputs = this.inputs;

        Object.keys(inputs).forEach(function (name, i) {
            if (name === 'productofinterest') {
                initialValue = inputs[name].getInitialState().value;
                inputs[name].setState({ value: initialValue, associateValue: initialValue });
            } else {
                initialValue = inputs[name].getInitialState().defaultValue;
                inputs[name].setState({ value: undefined, associateValue: initialValue });
            }
            console.log('intiialValue is', initialValue, 'name', inputs[name]);
        });

        console.log("response: " + response.code + " : " + response.message);
    },

    componentDidMount: function componentDidMount() {
        this.setListeners();
    },

    componentWillMount: function componentWillMount() {
        this.model = {};
        this.inputs = {};
        this.registerInputs(this.props.children);
    },

    validate: function validate(component, index) {

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

        if (!rcValidate[component.props.validatetype](cleanValue)) {
            component.setState({
                errorClass: "error",
                isValid: false,
                errors: this.state.errors.push(index)
            });
        } else {
            component.setState({
                isValid: true,
                errorClass: ""
            });
        }
    },

    validateForm: function validateForm() {
        var inputs = this.inputs;
        var that = this;
        this.allValid = false;

        Object.keys(inputs).forEach(function (name, i) {
            if (inputs[name].props.required) {
                that.validate(inputs[name], i);
            }

            if (i + 1 == _.toArray(inputs).length) {
                that.allValid = that.state.errors.length == 0 ? true : false;
                that.setState({ errors: [] });
                grandCentral.trigger("validation-done");
            }
        });
    },

    registerInputs: function registerInputs(children) {
        React.Children.forEach(children, (function (child) {

            if (child.props.name) {
                child.props.attachToForm = this.attachToForm;
                child.props.detachFromForm = this.detachFromForm;
                {/*child.props.validate = this.validate;*/}
            }

            if (child.props.children) {
                this.registerInputs(child.props.children);
            }
        }).bind(this));
    },

    attachToForm: function attachToForm(component) {
        this.inputs[component.props.name] = component;

        this.model[component.props.name] = component.state.value;
        {/*this.validate(component);*/}
    },

    detachFromForm: function detachFromForm(component) {
        delete this.inputs[component.props.name];
        delete this.model[component.props.name];
    },

    updateModel: function updateModel(component) {
        Object.keys(this.inputs).forEach((function (name) {
            if (name === "storeassociate" && this.inputs[name].state.associateValue.length < 1) {
                this.model[name] = {
                    name: "",
                    email: "",
                    strorenumber: "",
                    employeenumber: ""
                };
            } else {
                this.model[name] = this.inputs[name].state.value;
            }
        }).bind(this));
    },

    submit: function submit(event) {
        event.preventDefault();
        // creates object that will be passed to SKAVA API
        this.updateModel();
        console.log(this.model);
        {/* make validation call before calling API*/}
        this.validateForm();
    },

    validationDone: function validationDone() {
        console.log("**** isValid ***** = ", this.allValid);

        if (this.allValid) {
            try {
                makeAppoinment(this.model, this.props.onSuccess);
            } catch (e) {
                console.log(e);
            }
        }
    },

    render: function render() {
        return React.createElement(
            "form",
            { onSubmit: this.submit },
            this.props.children,
            React.createElement("input", { type: "submit", "data-track": "submit", disabled: this.state.isSubmitting, value: "SEND" })
        );
    }
});
/* public/jsx-special/form/formcomponent.jsx */

rc.FormComponent = React.createClass({
    displayName: "FormComponent",

    getInitialState: function getInitialState() {
        return {
            url: "https://iissrv.customdecorators.com/macy/appointment.aspx"
        };
    },

    componentDidMount: function componentDidMount() {
        // jquery plugin to set placeholder text ie9
        // https://github.com/mathiasbynens/jquery-placeholder
        //$(".formwrapper input, .formwrapper textarea").placeholder({ customClass: 'my-placeholder' });
    },

    appointmentCallback: function appointmentCallback(response) {
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

    render: function render() {
        return React.createElement(
            "div",
            { className: "formwrapper" },
            React.createElement(
                "h4",
                { className: "center" },
                "Schedule your free ",
                React.createElement(
                    "em",
                    null,
                    "in-home"
                ),
                " design consultation now:"
            ),
            React.createElement(
                "strong",
                null,
                "1-800-204-0101"
            ),
            React.createElement(
                rc.Form,
                { onSuccess: this.appointmentCallback, url: this.state.url },
                React.createElement(rc.Form.Input, { track: "form.firstname", name: "firstname", plhd: "FIRST NAME", required: true, validatetype: "string", limitCharacterInput: "letters", errorsMsg: "Please enter your first name" }),
                React.createElement(rc.Form.Input, { track: "form.lastname", name: "lastname", plhd: "LAST NAME", required: true, validatetype: "string", limitCharacterInput: "letters", errorsMsg: "Please enter your last name" }),
                React.createElement(rc.Form.Input, { track: "form.address", name: "address1", plhd: "ADDRESS", required: true, validatetype: "string", errorsMsg: "Please enter your address" }),
                React.createElement(rc.Form.Input, { track: "form.zip", name: "zipcode", plhd: "ZIP CODE", required: true, validatetype: "zip", limitCharacterInput: "numeric", errorsMsg: "Please enter your 5 digit zip code" }),
                React.createElement(rc.Form.Input, { track: "form.phone", name: "phone", plhd: "PHONE", required: true, validatetype: "phone", limitCharacterInput: "numeric", errorsMsg: "Please enter your phone number" }),
                React.createElement(rc.Form.Input, { track: "form.email", name: "email", plhd: "EMAIL", required: true, validatetype: "email", errorsMsg: "Please enter a valid email address" }),
                React.createElement(
                    rc.Form.Select,
                    { name: "productofinterest", cl: "smallTxt", required: true, validatetype: "select", errorsMsg: "Please select an area of interest" },
                    React.createElement(rc.Form.Option, { value: "default", txt: "PRIMARY AREA OF INTEREST" }),
                    React.createElement(rc.Form.Option, { value: "offers", txt: "Offers" }),
                    React.createElement(rc.Form.Option, { value: "services", txt: "Services" }),
                    React.createElement(rc.Form.Option, { value: "blinds", txt: "Blinds" }),
                    React.createElement(rc.Form.Option, { value: "shades", txt: "Shades" }),
                    React.createElement(rc.Form.Option, { value: "shutters", txt: "Shutters" }),
                    React.createElement(rc.Form.Option, { value: "motorization", txt: "Motorization" }),
                    React.createElement(rc.Form.Option, { value: "specialtyshapes", txt: "Specialty Shapes" }),
                    React.createElement(rc.Form.Option, { value: "drapery", txt: "Drapery" })
                ),
                React.createElement(rc.Form.Input, { track: "form.storeassociate", name: "storeassociate", cl: "smallTxt", limitCharacterInput: "alphanumeric", plhd: "STORE ASSOCIATE #" })
            )
        );
    }
});
/* public/jsx-special/form/forminput.jsx */
rc.Form.Input = React.createClass({
    displayName: "Input",

    getInitialState: function getInitialState() {
        return {
            defaultValue: this.props.value || "",
            associateValue: ""
        };
    },

    componentWillMount: function componentWillMount() {
        this.props.attachToForm(this);
        //this.props.attachToForm(this);
    },

    componentWillUnmount: function componentWillUnmount() {
        // blocker error is being thrown
        if (this.props) {
            if (this.props.detachFromForm) {
                this.props.detachFromForm(this);
            }
        }
    },

    setValue: function setValue(event) {
        {/* the storeasscociate input needs to return an {}, use conditional to check */}
        var val = null;
        if (this.props.name === "storeassociate") {
            val = {
                name: "",
                email: "",
                strorenumber: "",
                employeenumber: event.currentTarget.value
            };
        } else {
            val = event.currentTarget.value;
        }
        this.setState({
            value: val,
            associateValue: event.currentTarget.value
        });
    },

    checkCharacters: function checkCharacters(event) {
        var key;
        key = event.keyCode ? event.keyCode : event.which;
        if ($.inArray(key, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        // Allow: Ctrl+A, Command+A
        key == 65 && (event.ctrlKey === true || event.metaKey === true) ||
        // Allow: home, end, left, right, down, up
        key >= 35 && key <= 40) {
            // let it happen, don't do anything
            return;
        }
        switch (this.limitCharacterInput) {
            case "numeric":
                // only allow numeric chars stack overflow
                // http://stackoverflow.com/questions/995183/how-to-allow-only-numeric-0-9-in-html-inputbox-using-jquery

                // Ensure that it is a number and stop the keypress
                return !((event.shiftKey || key < 48 || key > 57) && (key < 96 || key > 105));
            case "letters":
                return key >= 65 && key <= 90 || key === 8;
            case "alphanumeric":
                //return false;
                return !((event.shiftKey || key < 48 || key > 57) && (key < 96 || key > 105)) || key >= 65 && key <= 90 || key === 8;
            default:
                break;
        }
    },

    render: function render() {
        {}

        /* var markAsValid = this.state.isValid;
           var markAsRequired = this.props.required && !this.state.value;
        */ // console.log(this.props.cl);
        var className = '' || this.props.name;
        var errorMessage = this.state.errorMessage || "";
        var errorClass = this.state.errorClass || "";
        var val = this.props.name == "storeassociate" ? this.state.associateValue : this.state.value;
        var maxLength;
        if (this.props.name === "firstname" || this.props.name === "lastname") {
            maxLength = 20;
        } else if (this.props.name === "address1") {
            maxLength = 40;
        } else if (this.props.name === "zipcode") {
            maxLength = 5;
        } else if (this.props.name === "phone") {
            maxLength = 10;
        } else if (this.props.name === "storeassociate") {
            maxLength = 10;
        } else {
            maxLength = "";
        }

        if (this.props.name === "zip") {
            maxLength = 5;
        }
        this.limitCharacterInput = this.props.limitCharacterInput;

        return React.createElement(
            "div",
            null,
            React.createElement(MyInput, { type: "text", "data-track": this.props.track, className: className + " " + errorClass, name: this.props.name, placeholder: this.props.plhd, onKeyDown: this.checkCharacters, onChange: this.setValue, value: val, maxLength: maxLength })
        );
    }
});
/* public/jsx-special/form/formoption.jsx */
rc.Form.Option = React.createClass({
    displayName: "Option",

    render: function render() {

        return React.createElement(
            "option",
            { value: this.props.value },
            this.props.txt
        );
    }
});

/* public/jsx-special/form/formselect.jsx */
rc.Form.Select = React.createClass({
    displayName: "Select",

    getInitialState: function getInitialState() {
        return {
            value: [this.props.children[0].props.value]
        };
    },

    componentWillMount: function componentWillMount() {
        this.props.attachToForm(this);
    },

    componentWillUnmount: function componentWillUnmount() {
        if (this.props) {
            if (this.props.detachFromForm) {
                this.props.detachFromForm(this);
            }
        }
    },

    handleChange: function handleChange(event) {
        var selectedValue = event.currentTarget.value;
        this.setState({ value: [selectedValue] });
    },

    render: function render() {
        var className = '' || this.props.cl;
        var errorMessage = this.state.errorMessage || "";
        var errorClass = this.state.errorClass || "";

        return React.createElement(
            "div",
            null,
            React.createElement(
                "select",
                { className: className + " " + errorClass, name: this.props.name, onChange: this.handleChange, value: this.state.value },
                this.props.children
            )
        );
    }
});

/* public/jsx-special/gallery/gallerycomp.jsx */

rc.GalleryComp = React.createClass({
    displayName: "GalleryComp",

    getInitialState: function getInitialState() {
        return {
            mainImage: assetsDirectory + "images/gallery/m-hybridshutters.jpg",
            caption: "hunter douglas new style<sup>®</sup> hybrid shutters"
        };
    },

    componentDidMount: function componentDidMount() {
        //window.scrollTo(0,0);
    },

    escapeHTML: function escapeHTML(string) {
        var cleanString = jQuery.parseHTML(string);
        return cleanString.join("");
    },

    clickHandler: function clickHandler(thumb) {
        var new_src = thumb.state.src.replace("t-", "m-");
        var new_caption = thumb.state.caption;
        this.setState({
            mainImage: new_src,
            caption: new_caption
        });
        //window.scrollTo(0,0);
    },

    render: function render() {

        return React.createElement(
            "div",
            { className: "gallery-content" },
            React.createElement(
                "figure",
                null,
                React.createElement(
                    "div",
                    { className: "gallery-header" },
                    React.createElement(
                        "div",
                        { className: "headline" },
                        "Idea Gallery"
                    ),
                    React.createElement(
                        "div",
                        { className: "copy" },
                        "Get inspired & think big. Enlarge the images by clicking on the boxes below."
                    )
                ),
                React.createElement("img", { className: "main-image", ref: "mainImage", src: this.state.mainImage, width: "648", height: "385" }),
                React.createElement("figcaption", { ref: "captionContainer", dangerouslySetInnerHTML: { __html: this.state.caption } })
            ),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-hybridshutters.jpg", "data-caption": "hunter douglas new style<sup>®</sup> hybrid shutters" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-woodblinds.jpg", "data-caption": "HUNTER DOUGLAS PARKLAND<sup>™</sup> WOOD BLINDS" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-modernromanshades.jpg", "data-caption": "HUNTER DOUGLAS VIGNETTE<sup>®</sup> MODERN ROMAN SHADES" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-sheers.jpg", "data-caption": "HUNTER DOUGLAS Luminette<sup>®</sup> privacy sheers" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-modernromanshades2.jpg", "data-caption": "HUNTER DOUGLAS vigNETTE<sup>®</sup> modern roman shades" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-softshades.jpg", "data-caption": "HUNTER DOUGLAS solera<sup>®</sup> soft shades" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-motorization.jpg", "data-caption": "HUNTER DOUGLAS specialty shapes skylights" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-glidingpanels.jpg", "data-caption": "HUNTER DOUGLAS skykine<sup>®</sup> gliding window panels" }),
            React.createElement(rc.GalleryThumb, { handler: this.clickHandler, src: assetsDirectory + "images/gallery/t-fabricshades.jpg", "data-caption": "custom fabric shades" })
        );
    }
});
/* public/jsx-special/gallery/gallerythumb.jsx */

rc.GalleryThumb = React.createClass({
    displayName: "GalleryThumb",

    componentDidMount: function componentDidMount() {
        this.setState({
            src: this.props.src,
            caption: this.props["data-caption"]
        });
    },

    clickHandler: function clickHandler() {
        this.props.handler(this);
    },

    render: function render() {

        return React.createElement(
            "a",
            { className: "gallery-thumb", onClick: this.clickHandler },
            React.createElement("img", { src: this.props.src, alt: this.props["data-caption"], width: "200", height: "225" })
        );
    }
});
/* public/jsx-special/gallerycomponent/gallerycomponent.jsx */

rc.GalleryComponent = React.createClass({
    displayName: "GalleryComponent",

    render: function render() {
        return React.createElement(
            "div",
            { className: "row gallerycomponent" },
            React.createElement(
                "h3",
                { className: "title center" },
                "Need inspiration? ",
                React.createElement(
                    "a",
                    { href: "#/gallery", "data-track": "visitourgallery" },
                    "visit our gallery"
                )
            ),
            React.createElement("a", { href: "#/shutters", className: "gallery-link", "data-track": "shutters", id: "shutters" }),
            React.createElement("a", { href: "#/blinds", className: "gallery-link", "data-track": "blinds", id: "blinds" }),
            React.createElement("a", { href: "#/shades", className: "gallery-link", "data-track": "shades", id: "shades" }),
            React.createElement("img", { src: assetsDirectory + "images/gallery-row.jpg", className: "backImage" })
        );
    }
});
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
    displayName: "loader",

    // no need for stack to be bound to data
    // so it is a property of the component and outside of this.state
    stack: [],
    getInitialState: function getInitialState() {
        return {
            show: false
        };
    },
    componentDidMount: function componentDidMount(currentPage) {
        var self = this;
        // unbind before binding in case component unmounts/remounts, optionally use componentWillUnmount   
        grandCentral.off('loaderStart').on('loaderStart', function (uniqueString) {
            if ($.inArray(uniqueString, self.stack) == -1) {
                console.log('loaderStart(' + uniqueString + ')');
                self.stack.push(uniqueString);
                self.setState({ show: true });
            }
        });
        // unbind before binding in case component unmounts/remounts       
        grandCentral.off('loaderEnd').on('loaderEnd', function (uniqueString) {
            var i = $.inArray(uniqueString, self.stack);
            if (i > -1) {
                self.stack.splice(i, 1);
                console.log('loaderEnd(' + uniqueString + ')');
            }
            if (self.stack.length == 0) {
                self.setState({ show: false });
            }
        });
    },
    reset: function reset() {
        this.stack = [];
        this.setState({ show: false });
    },
    render: function render() {
        var classes = this.state.show ? 'active' : '';
        return React.createElement(
            "div",
            { id: "loader", className: classes },
            React.createElement(
                "div",
                { className: "loadingmessage" },
                React.createElement("img", { className: "spinner", src: SiteConfig.assetsDirectory + 'images/ui/spinner.gif' })
            )
        );
    }
});

/* public/jsx-special/maincontent/maincontent.jsx */
rc.MainContent = React.createClass({
    displayName: "MainContent",

    componentDidMount: function componentDidMount() {
        window.setTimeout(function () {
            //grandCentral.trigger('resizePage');    
        }, 500);
    },

    render: function render() {
        return React.createElement(
            "div",
            { id: this.props.id, className: "main-content" },
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "col col-left" },
                    this.props.midComponent
                ),
                React.createElement(
                    "div",
                    { className: "col col-right" },
                    this.props.sideComponent
                )
            )
        );
    }

});

/* public/jsx-special/motorization/motorizationcomp.jsx */

rc.MotorizationComp = React.createClass({
    displayName: "MotorizationComp",

    getInitialState: function getInitialState() {
        // video player --- it's still in backbone
        this.videoview = new VideoView();

        return _.extend(app.status, {});
    },

    componentDidMount: function componentDidMount() {
        var self = this;

        this.videoview.render('#videoFrame');
        this.videoview.buildVideo("4640246893001");
    },

    clickVideo: function clickVideo() {
        //alert('click');
        //$("#videoFrame").find(">:first-child").trigger('click');
        //this.player.playVideo();

        var iframeTag = document.querySelector("iframe"),
            win = iframeTag.contentWindow;

        win.postMessage("playVideo", "http://c.brightcove.com");
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');
        // <iframe id="videoFrame" data-track="video.motorization" width="560" height="315" src="https://www.youtube.com/embed/sdSG2-lc_MA" frameborder="0" allowfullscreen></iframe>

        // <figure>
        //     <figcaption><a className="goto" id="playVideo" onClick={this.clickVideo}>watch the video</a></figcaption>
        // </figure>

        return React.createElement(
            "div",
            { className: "motorization-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Hunter Douglas PowerView",
                React.createElement(
                    "sup",
                    null,
                    "™"
                ),
                " Motorization"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "Intelligent shades that simplify your life."
            ),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement("div", { id: "videoFrame", "data-track": "video.motorization" })
            )
        );
    }
});
/* public/jsx-special/nav/nav.jsx */
rc.Nav = React.createClass({
    displayName: "Nav",

    getInitialState: function getInitialState() {
        return {
            currentPage: ''
        };
    },
    componentDidMount: function componentDidMount() {
        var self = this;
        grandCentral.off('pagechange').on('pagechange', function (data) {
            self.setState({
                currentPage: data.currentPage
            });
        });
    },
    getClassNameWithActive: function getClassNameWithActive(arg) {
        var className = 'navitem';
        if (arg == this.state.currentPage) {
            className = className + ' active';
        }
        return className;
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "shop-nav-wrapper clearfix" },
            React.createElement(
                "div",
                { className: "col brand-category" },
                React.createElement(
                    "a",
                    { href: "#/home", "data-track": "backtohome" },
                    React.createElement("img", { src: assetsDirectory + "images/custom-window-logo.jpg", alt: "CUSTOM WINDOW FASHIONS" })
                )
            ),
            React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                    "a",
                    { href: "#/home", "data-track": "backtohome", className: "home-link" },
                    React.createElement(
                        "h1",
                        null,
                        React.createElement("img", { src: assetsDirectory + "images/shop-at-home-logo.png", alt: "MACY'S SHOP AT HOME" })
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                    "nav",
                    null,
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('productoverview'), href: "#/productoverview", "data-track": "nav.productoverview" },
                            "Product Overview"
                        ),
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('offers'), href: "#/offers", "data-track": "nav.offers" },
                            "Offers"
                        ),
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('services'), href: "#/services", "data-track": "nav.services" },
                            "Services"
                        ),
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('blinds'), href: "#/blinds", "data-track": "nav.blinds" },
                            "Blinds"
                        ),
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('shades'), href: "#/shades", "data-track": "nav.shades" },
                            "Shades"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('shutters'), href: "#/shutters", "data-track": "nav.shutters" },
                            "Shutters"
                        ),
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('motorization'), href: "#/motorization", "data-track": "nav.motorization" },
                            "Motorization"
                        ),
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('specialtyshapes'), href: "#/specialtyshapes", "data-track": "nav.specialtyshapes" },
                            "Specialty Shapes"
                        ),
                        React.createElement(
                            "a",
                            { className: this.getClassNameWithActive('drapery'), href: "#/drapery", "data-track": "nav.drapery" },
                            "Drapery"
                        )
                    )
                )
            )
        );
    }
});

/* public/jsx-special/offerscontent/offerscomp.jsx */

rc.OffersComp = React.createClass({
    displayName: "OffersComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "offers-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Special Offers"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "Save on custom window treatments."
            ),
            React.createElement(
                "div",
                { className: "row specialoffer" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { className: "left", src: assetsDirectory + "images/offers/offers-shading.jpg" }),
                    React.createElement(
                        "figcaption",
                        { className: "right" },
                        React.createElement(
                            "h4",
                            { className: "itemname" },
                            "Hunter Douglas"
                        ),
                        React.createElement(
                            "strong",
                            null,
                            "Free Literise",
                            React.createElement(
                                "sup",
                                null,
                                "®"
                            ),
                            " Cordless ",
                            React.createElement("br", null),
                            "Operating System"
                        ),
                        React.createElement(
                            "p",
                            { className: "description" },
                            "With purchase of Silhouette",
                            React.createElement(
                                "sup",
                                null,
                                "®"
                            ),
                            " window shadings from 12/8/15-1/30/16."
                        ),
                        React.createElement(
                            "p",
                            { className: "legal" },
                            "Instant savings valid on qualifying purchases made between 12/8/15 - 1/30/16. A qualifying purchase is defined as a purchase of any of the product models set forth above. Offer excludes Nantucket",
                            React.createElement(
                                "sup",
                                null,
                                "™"
                            ),
                            " window shadings, a collection of Silhouette® window shadings. No minimum or maximum purchase required. Additional limitations may apply. Offers may not be combined. All rights reserved. All trademarks herein reserved by their respective corporations."
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row specialoffer" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { className: "right", src: assetsDirectory + "images/offers/offers-drapery.jpg" }),
                    React.createElement(
                        "figcaption",
                        { className: "left" },
                        React.createElement(
                            "h4",
                            { className: "itemname" },
                            "Custom Drapery"
                        ),
                        React.createElement(
                            "strong",
                            null,
                            "25% OFF"
                        ),
                        React.createElement(
                            "p",
                            { className: "description" },
                            "Our top 25 drapery fabrics. Offer valid 12/8/15-2/29/16."
                        ),
                        React.createElement(
                            "p",
                            { className: "legal" },
                            "Sale ends 2/29/16. Ask your designer for details. Not applicable to Simplicity by Design, Hunter Douglas, hardware, shipping/freight, installation or tax. Reg. & orig. prices are offering prices and savings may not be based on actual sales. Some orig. prices not in effect during the past 90 days. Prices and merchandise may differ on macys.com."
                        )
                    )
                )
            )
        );
    }
});
/* public/jsx-special/productoverview/overviewcomp.jsx */

rc.OverviewComp = React.createClass({
    displayName: "OverviewComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "overview-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Custom Window Treatments"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "Cultivate your unique perspective with custom window treatments & more."
            ),
            React.createElement(
                "div",
                { className: "row overviewgrid grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/blinds", "data-track": "blinds" },
                        React.createElement("img", { src: assetsDirectory + "images/overview/wood-blinds.jpg" })
                    ),
                    React.createElement(
                        "figcaption",
                        null,
                        React.createElement(
                            "a",
                            { className: "goto", "data-track": "blinds", href: "#/blinds" },
                            "blinds"
                        )
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/shades", "data-track": "shades" },
                        React.createElement("img", { src: assetsDirectory + "images/overview/window-shadings.jpg" })
                    ),
                    React.createElement(
                        "figcaption",
                        null,
                        React.createElement(
                            "a",
                            { className: "goto", "data-track": "shades", href: "#/shades" },
                            "shades"
                        )
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/shutters", "data-track": "shutters" },
                        React.createElement("img", { src: assetsDirectory + "images/overview/hardwood-shutters.jpg" })
                    ),
                    React.createElement(
                        "figcaption",
                        null,
                        React.createElement(
                            "a",
                            { className: "goto", "data-track": "shutters", href: "#/shutters" },
                            "shutters"
                        )
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row overviewgrid grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/motorization", "data-track": "motorization" },
                        React.createElement("img", { src: assetsDirectory + "images/overview/scene-controller.jpg" })
                    ),
                    React.createElement(
                        "figcaption",
                        null,
                        React.createElement(
                            "a",
                            { className: "goto", "data-track": "motorization", href: "#/motorization" },
                            "powerview",
                            React.createElement(
                                "sup",
                                null,
                                "™"
                            ),
                            React.createElement("br", null),
                            "motorization"
                        )
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/specialtyshapes", "data-track": "specialtyshapes" },
                        React.createElement("img", { src: assetsDirectory + "images/overview/hybrid-shutters.jpg" })
                    ),
                    React.createElement(
                        "figcaption",
                        null,
                        React.createElement(
                            "a",
                            { className: "goto", "data-track": "specialtyshapes", href: "#/specialtyshapes" },
                            "specialty shapes"
                        )
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/drapery", "data-track": "customdrapery" },
                        React.createElement("img", { src: assetsDirectory + "images/overview/custom-drapery.jpg" })
                    ),
                    React.createElement(
                        "figcaption",
                        null,
                        React.createElement(
                            "a",
                            { className: "goto", "data-track": "customdrapery", href: "#/drapery" },
                            "custom drapery"
                        )
                    )
                )
            ),
            React.createElement(rc.AdditionalServices, null)
        );
    }
});
/* public/jsx-special/services/servicescomp.jsx */

rc.ServicesComp = React.createClass({
    displayName: "ServicesComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "services-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "The Macy's Shop at Home Experience"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "Explore thousands of colors, styles & fabrics—just like you would in a showroom, but in the comfort of your own home."
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    { className: "left" },
                    React.createElement("img", { src: assetsDirectory + "images/services/services-1.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Sign up for a free in-home consultation with one of our designers."
                    )
                ),
                React.createElement(
                    "figure",
                    { className: "left" },
                    React.createElement("img", { src: assetsDirectory + "images/services/services-2.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Choose your window treatments with our expert guidance."
                    )
                ),
                React.createElement(
                    "figure",
                    { className: "left" },
                    React.createElement("img", { src: assetsDirectory + "images/services/services-3.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Let our full-service team handle the measuring, delivery & installation."
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row expert-designers" },
                React.createElement(
                    "h4",
                    null,
                    "EXPERT DESIGNERS"
                ),
                React.createElement(
                    "p",
                    null,
                    "Our team of professionals will be by your side to guide you through the process."
                ),
                React.createElement(
                    "p",
                    null,
                    "Macy’s Shop at Home designers understand the challenges & the excitement of a decorating project."
                ),
                React.createElement(
                    "p",
                    null,
                    "With their expertise & product knowledge, Your Macy's Shop at Home designer will help you sort through the wide array of colors, textures & new technologies available. Together, you’ll determine a style, a budget & a time frame that suits your needs & your lifestyle."
                )
            )
        );
    }
});
/* public/jsx-special/shades/shadescomp.jsx */

rc.ShadesComp = React.createClass({
    displayName: "ShadesComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "shades-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Hunter Douglas Shades"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "From discreet to dramatic, stylish shades enhance every room."
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-1.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Silhouette",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " window shadings"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-2.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Duette",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " honeycomb shades"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-3.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Pirouette",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " window shadings"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-4.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Luminette",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " privacy sheers"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-5.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Vignette",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " modern Roman shades"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-6.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Solera",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " soft shades"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-7.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "POWERVIEW",
                        React.createElement(
                            "sup",
                            null,
                            "™"
                        ),
                        " MOTORIZATION"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-8.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Provenance",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " woven wood shades"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shades/shades-9.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Design Studio",
                        React.createElement(
                            "sup",
                            null,
                            "™"
                        ),
                        " Roman shades"
                    )
                )
            )
        );
    }
});
/* public/jsx-special/shutters/shutterscomp.jsx */

rc.ShuttersComp = React.createClass({
    displayName: "ShuttersComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "blinds-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Hunter Douglas Custom Shutter Collection"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "Elegant shutters frame your windows with panache."
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shutters/shutters-1.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Heritance",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " hardwood shutters"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shutters/shutters-2.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "NewStyle",
                        React.createElement(
                            "sup",
                            null,
                            "®"
                        ),
                        " hybrid shutters"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/shutters/shutters-3.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "Palm Beach",
                        React.createElement(
                            "sup",
                            null,
                            "™"
                        ),
                        " polysatin shutters"
                    )
                )
            )
        );
    }
});
/* public/jsx-special/specialoffer/specialoffer.jsx */

rc.SpecialOfferComponent = React.createClass({
    displayName: "SpecialOfferComponent",

    render: function render() {
        return React.createElement(
            "figure",
            { className: this.props.figureClass },
            React.createElement(
                "a",
                { href: this.props.config.learnmore },
                React.createElement("img", { src: this.props.config.imgsrc, "data-track": this.props.config.track })
            ),
            React.createElement(
                "figcaption",
                null,
                React.createElement(
                    "h4",
                    { className: "itemname" },
                    this.props.config.itemname,
                    " ",
                    React.createElement(
                        "strong",
                        null,
                        this.props.config.savings
                    )
                ),
                React.createElement(
                    "p",
                    { className: "description" },
                    this.props.config.description,
                    React.createElement(
                        "a",
                        { className: "learnmore", href: this.props.config.learnmore, "data-track": this.props.config.track },
                        "learn more"
                    )
                )
            )
        );
    }
});
/* public/jsx-special/specialtyshapes/specialtyshapescomp.jsx */

rc.SpecialtyshapesComp = React.createClass({
    displayName: "SpecialtyshapesComp",

    getInitialState: function getInitialState() {
        return _.extend(app.status, {});
    },

    render: function render() {
        console.log(this.constructor.displayName + ' render()');

        return React.createElement(
            "div",
            { className: "specialtyshapes-content" },
            React.createElement(
                "h2",
                { className: "title" },
                "Hunter Douglas Specialty Shapes"
            ),
            React.createElement(
                "h3",
                { className: "subtitle" },
                "Discover specialty shapes to suit unique windows throughout your home."
            ),
            React.createElement(
                "div",
                { className: "row grid" },
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/specialtyshapes/specialtyshapes-1.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "skylights"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/specialtyshapes/specialtyshapes-2.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "arches"
                    )
                ),
                React.createElement(
                    "figure",
                    null,
                    React.createElement("img", { src: assetsDirectory + "images/specialtyshapes/specialtyshapes-3.jpg" }),
                    React.createElement(
                        "figcaption",
                        null,
                        "triangles"
                    )
                )
            )
        );
    }
});
/* public/jsx-special/txtcolcomponent/txtcolcomponent.jsx */
rc.TxtColComponent = React.createClass({
    displayName: "TxtColComponent",

    componentDidMount: function componentDidMount() {
        this.modalView = new ModalView();
    },

    clickHandler: function clickHandler(e) {
        //console.log(e.target);
        this.modalView.open("Hello World!");
        //console.log(this.modalView)
    },

    render: function render() {

        return React.createElement(
            "div",
            { className: "row txtCols" },
            React.createElement(
                "div",
                { className: "col col1" },
                React.createElement(
                    "h3",
                    null,
                    "Get ",
                    React.createElement(
                        "strong",
                        null,
                        "Inspired"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    "Your Macy’s Shop at Home designer will assist & guide you through the experience, helping you to find a style for your space that you’ll love for years to come."
                )
            ),
            React.createElement(
                "div",
                { className: "col col2" },
                React.createElement(
                    "h3",
                    null,
                    "Let Us ",
                    React.createElement(
                        "strong",
                        null,
                        "Do the work"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    "Once you’ve made your selections, simply relax while we handle the measuring, ordering & installation. Macy's Shop at Home assures quality and your complete satisfaction."
                )
            ),
            React.createElement(
                "div",
                { className: "col col3" },
                React.createElement(
                    "h3",
                    null,
                    "Enjoy ",
                    React.createElement(
                        "strong",
                        null,
                        "Your space"
                    )
                ),
                React.createElement(
                    "p",
                    null,
                    "When your project is complete, prepare yourself for compliments and years of enjoyment."
                )
            ),
            React.createElement(
                "div",
                { className: "row center" },
                React.createElement(
                    "em",
                    null,
                    "Learn more about Macys decorating services ",
                    React.createElement(
                        "a",
                        { className: "watchvideo", "data-track": "video.home", onClick: this.clickHandler },
                        "watch the video"
                    )
                )
            )
        );
    }

});
/*productofinterest should return an array ["string", "string"] */ /* return an object {name: string, email: string, storenumber: string, employeenumber: string} */ /*{this.props.required ? <span className="error">{errorMessage}</span> : null } */ /*{this.props.required ? <span className="error">{errorMessage}</span> : null }*/
