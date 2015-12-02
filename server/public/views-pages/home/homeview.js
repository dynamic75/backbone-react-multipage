

var HomeView = Backbone.View.extend({

    el : '#pagecontainer',

    initialize: function() {
        console.log('homeView initialize()');

        var self = this;

        $( "#finderContainer" ).off( 'click touchstart', '.button' ).on( 'click touchstart', '.button', {}, function( event ){
            event.preventDefault();
            console.log("SUBMITTING FORM");
            //alert("click submit");
            //sself.changeIndex( 1 );
            self.submitForm();
        });
    },

    render: function() {
        console.log('homeView render()');

        this.$el.html( htmlpartials.home ); // the property after the dot is the filename of the html partial
    
    },

    processRouteChange : function() {
        console.log('homeView processRouteChange()');

    },

    submitForm: function() {
        //alert( "submit form" );

        var appointmentCallback = function( response ){
            console.log( response, "response" );
        };
        
        var appointmentFormData =
        {
            firstname : "keith",
            lastname : "wdwdwd",
            email : "b@c.com",
            phone : "1111111111",
            address1 : "blah",
            address2 : "blah",
            addresscity : "blah",
            stateprovince : "NY",
            zip : "11111",
            productofinterest : [ "1", "2", "3" ],
            storeassociate : // Object 
            {
                name : "a",
                email : "b@c.com",
                strorenumber : "11",
                employeenumber : "22"
            }
        };
        
        makeAppoinment( appointmentFormData, appointmentCallback );
    }

});