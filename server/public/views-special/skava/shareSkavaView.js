// ShareSkavaView.js handles share functionality
// similar to the old skavaInterop methods

// shareAll: is the skava ovelrya with multiple options

// the other methods are pretty self explanatory

var ShareSkavaView = Backbone.View.extend({

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

        // share a product like in gift guide
        $( "#finderContainer" ).off( 'click', '[role="shareproduct"]' ).on( 'click', '[role="shareproduct"]', {}, function( event ){
            event.preventDefault();
            var shareObject = {
                mailerIds: SiteConfig.sharing.product.mailerIds,
                url: jQuery(this).attr('product_url'),
                icon:jQuery(this).attr('product_image'),
                facebook: {
                    title: jQuery(this).attr('product_desc'),
                    description: jQuery(this).attr('product_longdesc')
                },
                pinterest:{
                    description: jQuery(this).attr('product_desc'),
                    image:jQuery(this).attr('product_image')
                },
                twitter: jQuery(this).attr('product_desc')
            };
            self.shareAll( shareObject );
        });

		$( "#finderContainer" ).off( 'click', '[role="sharefacebook"]' ).on( 'click', '[role="sharefacebook"]', {}, function( event ){
            event.preventDefault();
            var config = SiteConfig.sharing[ $(this).attr( "config" ) ];
            self.shareFacebook( config );
        });

		$( "#finderContainer" ).off( 'click', '[role="sharetwitter"]' ).on( 'click', '[role="sharetwitter"]', {}, function( event ){
            event.preventDefault();
            var config = SiteConfig.sharing[ $(this).attr( "config" ) ];
            self.shareTwitter( config );
        });

        $( "#finderContainer" ).off( 'click', '[role="sharepinterest"]' ).on( 'click', '[role="sharepinterest"]', {}, function( event ){
            event.preventDefault();
            var config = SiteConfig.sharing[ $(this).attr( "config" ) ];
            self.sharePinterest( config );
        });

        $( "#finderContainer" ).off( 'click', '[role="shareall"]' ).on( 'click', '[role="shareall"]', {}, function( event ){
            event.preventDefault();
            var shareObject = SiteConfig.sharing[ $(this).attr( "config" ) ];
            self.shareAll( shareObject );
        });
    },

    // launch the multi share modal 
    // pass in the share object
    shareAll: function( shareObject ){
        var mailerId = shareObject.mailerIds.staging;
        if (isProduction) mailerId = shareObject.mailerIds.production;

        var facebookDescription = shareObject.facebook.description;
        var facebookTitle = shareObject.facebook.title;
        var image = shareObject.icon;
        var url = shareObject.url;
        var twitter = shareObject.twitter;
        var popupPosition = [256, 150, 126, 80];

        try {
            showSharePopup( null, facebookTitle, facebookDescription, image, url, mailerId, null, null, 180, null, twitter, popupPosition);
        }
        catch (e) {
            console.error( "showSharePopup not available" );
        }

        var headerHeight =  ( SiteConfig.headerHeight ) ?  SiteConfig.headerHeight: 210;
        if ( parent.window ) {
			parent.window.scrollTo( 0, headerHeight );
        } else {
			window.scrollTo( 0, headerHeight );
        }
    },

    // share on facebook 
    // pass in the share object
    shareFacebook: function( shareObject ) {
        console.log( shareObject, " shareObject");
        var description = ( shareObject.facebook.description ) ? shareObject.facebook.description : "This is default text";
        var title = ( shareObject.facebook.title ) ? shareObject.facebook.title : "This is default text";
        var image = shareObject.icon;
        var url = webRoot + "/" + app.status.currentRoute;

        console.log( description, " desctiption");
        console.log( title, " title");
        console.log( image, " image");
        console.log( url, " url");

        try {
            shareFb( this.nullObject, title, description, image, url );
        } catch( error ) {
            console.log( error, "shareFacebook doesn't exist" );
        }
    },

    // share on twitter 
    // pass in the share object
    shareTwitter: function( shareObject ) {
        console.log( shareObject, " shareObject");
        var description = ( shareObject.twitter ) ? shareObject.twitter : "This is default text";
        var title = ( shareObject.twitter ) ? shareObject.twitter : "This is default text";
        var image = shareObject.icon;
        var url = webRoot + "/" + app.status.currentRoute;
        // function shareTwitterV2( swfname, title, descriptiontext, iconUrl, webUrl) {}
        try {
            shareTwitterV2( this.nullObject, title, description, image, url );
        } catch( error ) {
            console.log( error, "shareTwitterV2 doesn't exist" );
        }
    },

    // share on email 
    // pass in the share object
    shareEmail: function( shareObject ) {
        console.log( shareObject, " shareObject");
        var mailerId = ( isProduction ) ? shareObject.mailerIds.production : shareObject.mailerIds.staging;
        var image = shareObject.icon;
        var url = webRoot + "/" + app.status.currentRoute;

        console.log( mailerId, " mailerId");
        console.log( image, " image");
        console.log( url, " url");

        showEmailPopup( this.nullObject, "", "", image, url, mailerId );
    },

    // share on pinterest 
    // pass in the share object
    sharePinterest: function( shareObject ){
        console.log( shareObject, " shareObject");
        var description = ( shareObject.pinterest.description ) ? shareObject.pinterest.description : "This is default text";
        var image = shareObject.pinterest.image;
        var url = webRoot + "/" + app.status.currentRoute;

        console.log( description, " description");
        console.log( image, " image");
        console.log( url, " url");

        try {
            sharePinterest(null, description, image, url );
        }
        catch (e) {
            console.log("pinterest share not available");
        }
    }
});