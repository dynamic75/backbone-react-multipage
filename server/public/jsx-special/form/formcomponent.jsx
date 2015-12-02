
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