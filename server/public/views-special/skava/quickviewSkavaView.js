// quickviewSkavaView.js handles the quickview functionality
// you can passs in a single or multiple productids
// positioning of the overlay is handled in skavaview.js

var QuickviewSkavaView = Backbone.View.extend({

    initialize: function() {

		// controller for share buttons
		// attribute config points to the shared object
		var self = this;

		this.nullObject = {
            onOpCancelled: function() { },
            onOpCompleted: function() { },
            onSuccess: function() { },
            onFailure: function() { },
            PercentLoaded : function() {return 100;}
        };

        $( "#finderContainer" ).off( 'click', '[role="quickview"]' ).on( 'click', '[role="quickview"]', {}, function( event ){
            event.preventDefault();
            var productids = $( this ).attr( "productid" ).split(",");
            console.log( productids, "productids" );
            self.quickview( productids );
        });

        $( "#finderContainer" ).off( 'click', '[role="skavaInteropQuickView"]' ).on( 'click', '[role="skavaInteropQuickView"]', {}, function( event ){
            event.preventDefault();
            var productids = $( this ).attr( "productid" ).split(",");
            console.log( productids, "productids" );
            self.quickview( productids );
        });
    },

    quickview: function( array ) {
        //showAddToBag(null, 6, null, 0, array , finder.getConfig().quickView.bgColor, finder.getConfig().quickView.catId, false, finder.getConfig().quickView.position, null, null, null);
        //showAddToBag(null, 6, null, 0, "111111");
        // links directly to mcom product
        //http://www1.macys.com/shop/product/alfani-black-v-neck-sweater?ID=1507807
        // array = ["1507807","1500708","1500399"];
        var self = this;
        // if its not an array turn it into an array of strings
        if ( array.constructor !== Array ) {
            var a = [ ];
            // convert to string and push in onto array
            a.push( array + "" );
            array = a;
        }

        // see if the skava function exists
        try {
            showAddToBag( null, 6, null, 0, array , SiteConfig.quickView.bgColor, SiteConfig.quickView.catId, false, SiteConfig.quickView.position, null, null, null);
        } catch( error ) {
            console.log( error, "showAddToBag doesn't exist" );
        }

        grandCentral.trigger( "onOpenQuickview" );
        //var headerHeight = SiteConfig.headerHeight;
        //parent.window ? parent.window.scrollTo( 0, headerHeight ) : window.scrollTo( 0, headerHeight );
        
    }
});