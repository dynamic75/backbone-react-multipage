//  skavaview.js 
//  a set of utility functions
//  resizePage: resizes the iframe
//  grandCentral.trigger( "onResizePage" );

//  inView: checking if elements are within the viewport,
//  grandCentral.trigger( "routechange" ); closing skava pop ups and overlays,
//  inIframe: checking whether we are in the iframe or not,
//  isIE: checking for ie version,
//  isIE8 checking for ie8 specifically
//  handleWindow:  handles the positioning of the quickview overlay
//  isTablet:  checks if tablet device or not


// Define some view level vars

// this.wantQuickviewToScrollDownPage: If you want quickview to scroll down the page with the user

// this.theWindow: points to the window if not in iframe and parent if its in iframe



var SkavaView = Backbone.View.extend({

    initialize: function() {
        console.log("SkavaView.initialize");
        var self = this;
        console.log( "***************************** Version 1" );
        // set this to true if you want overlay to follow user down the page
        this.wantQuickviewToScrollDownPage = true;

        this.theWindow = ( this.inIframe() ) ? parent.window : window;

        // not sure if we need this or not
        // but I'm leaving it just in case
        this.nullObject = {
            onOpCancelled: function() { },
            onOpCompleted: function() { },
            onSuccess: function() { },
            onFailure: function() { },
            PercentLoaded : function() {return 100;}
        };

        /*// if we want the overlay to folow us bind the events
        if (this.wantQuickviewToScrollDownPage === true ) {
            if( !this.isIE8() ) {
                try {
                   $( this.theWindow ).scroll( function() {
                        console.log("why is is scrolling");
                        self.handleWindow();
                    } );
                   $( this.theWindow ).resize( function() {
                        self.handleWindow();
                    } );
                } catch(err) {
                   console.log('handleWindow trigger failed');
                }
                self.handleWindow();
            }
        }*/
        
        // resize the page
        grandCentral.on('resizePage', function(){
            self.resizePage();
        });

        // every route change close popups and resize page
        grandCentral.on('routechange', function(){
            console.log("ROUTECHANGE Event *******************");
            //self.resizePage();
            // close all popups on hash state change
            try {
                closePopup();
            } catch (e) {
                console.log("closePopup doesn't exist");
            }
            setTimeout( function(){   self.resizePage();    }, 300 );
            setTimeout( function(){   self.resizePage();    }, 2000 );
            setTimeout( function(){   self.startAtTop();    }, 100 );
        });

        // start the page at top
        grandCentral.on('startattop', function(){
            self.startAtTop();
        });

        /*// this events gets fired when quickview overlay is opened
        grandCentral.on( 'onOpenQuickview', function() {
            var headerHeight = SiteConfig.headerHeight;
            if ( self.wantQuickviewToScrollDownPage ) {
                if( !self.isIE8() ) {
                    self.handleWindow();
                } else {
                    self.theWindow.scrollTo( 0, headerHeight );
                }
            } else {
                self.theWindow.scrollTo( 0, headerHeight );
            }
           
        });*/
    },

    // get the version of IE.  Does not work for IE 11
    // second answer
    // http://stackoverflow.com/questions/10964966/detect-ie-version-in-javascript
    isIE : function() {
        var myNav = navigator.userAgent.toLowerCase();
        return ( myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1], 10 ) : false;
    },

    // return ie8 because its specifically causing many issues
    isIE8: function() {
        var isIE8 = false;
        if ( this.isIE() === 8) {
            isIE8 = true;
        }
        return isIE8;
    },

    // chekc if we are in an iframe or not
    inIframe: function () {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    },

    startAtTop: function() {
        //var headerHeight = ( SiteConfig.headerHeight ) ? SiteConfig.headerHeight : 0;
        console.log("SkavaView.startAtTop");
        var headerHeight = ( this.inIframe() ) ? 210 : 0;
        if ( this.inIframe() ) {
            parent.window.scrollTo( 0, headerHeight );
        } else {
            window.scrollTo( 0, 0 );
        }
    },

    // have the quickview follow the user down the page
    // seems to only work in the iframe as of now
    handleWindow: function() {
        // this is the code provided directly from Skava to have the quickview overlay
        // follow the user down the page
        var headerHeight = SiteConfig.headerHeight;
        var quickviewHeight = 603;
        var giftPopHeight = 263;
        var videoWindowHeight = 600;

        var scrollTop = $(parent.window.document).scrollTop();
        var finderHeight = $('#finderContainer').height();
        var baseY = scrollTop-headerHeight;
        var windowHeight = $(parent.window).height();
        var centerY = baseY+(windowHeight*0.5);

        SiteConfig.quickView.position[1] = windowHeight<quickviewHeight ? 40 : Math.round(Math.max(0,Math.min(finderHeight-(quickviewHeight+40),centerY-(quickviewHeight*0.5))));

        console.log( SiteConfig.quickView.position[1], "quickview height");
    },

    // resise the iframe
    resizePage: function() {
        console.log( "resizePage" );
        var height = jQuery( "#appContainer" ).height();
        
        try {
            $( parent.document.getElementById( "social" ) ).css( { 'height': height + "px" } );
            console.log("resized to", height);
        } catch (e) {
            console.error("Could not resize page", e);
        }
    },

    // returns true if tablet, false if not
    isTablet: function() {
        var currentlyTablet = false;
        ///// set var if true
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            currentlyTablet = true;
            return currentlyTablet;
        } else {
            return currentlyTablet;
        }
    },

    // check if a dom is viewable in browser viewport
    // pass in the jquery container
    inView: function( $domElement ) {
        //$.fn.inView = function(){
        //Window Object
        var win = $( this.theWindow );
        var windowHeight = win.height();

        var headerHeight = SiteConfig.headerHeight;
        //Object to Check
        obj = $domElement;
        //the top Scroll Position in the page
        var scrollPosition = win.scrollTop() - headerHeight;
        //the end of the visible area in the page, starting from the scroll position
        var visibleArea = scrollPosition + windowHeight;
        //the end of the object to check
        var objEndPos = ( obj.offset().top + obj.outerHeight() );

        return( visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false );
    }
});