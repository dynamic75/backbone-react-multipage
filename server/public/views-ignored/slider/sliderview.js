
var SliderView = Backbone.View.extend({

    initialize: function() {
        console.log('sliderView initialize()');
    },

    render: function( cssselector, data, index ) {
        console.log('sliderViewvView render()');

        var self = this;

        this.index = index;
        this.data = data;
        // if we want scroller to be circualr or infinite set to true
        // if you want a start and stop slide put false
        this.circular = true;

        this.$el = $( cssselector );

        this.$el.html( htmlpartials.slider ); // the property after the dot is the filename of the html partial

        // ********************************************************************
        // set up controller for tablet
        if ( app.skavaView.isTablet() ) {
            console.log('USER AGENT IS A TABLET!');

            this.$el.swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    self.changeIndex( 1 );
                    console.log("swipeleft!!!");
                },
                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    self.changeIndex( -1 );
                    console.log("swiperight!!!");
                },
                threshold: 60
            });
            console.log("swipe listener initiated!");

            $( "#finderContainer" ).off( 'click touchstart',  cssselector + ' .arrow.left.active' ).on( 'click touchstart', cssselector + ' .arrow.left.active', {}, function( event ){
                event.preventDefault();
                self.changeIndex( -1 );
            });

            $( "#finderContainer" ).off( 'click touchstart',  cssselector + ' .arrow.right.active' ).on( 'click touchstart', cssselector + ' .arrow.right.active', {}, function( event ){
                event.preventDefault();
                self.changeIndex( 1 );
            });
        } else {
            // set up controller for desktop
            console.log("user agent is a desktop!");

            $( "#finderContainer" ).off( 'click touchstart',  cssselector + ' .arrow.left.active' ).on( 'click touchstart', cssselector + ' .arrow.left.active', {}, function( event ){
                event.preventDefault();
                self.changeIndex( -1 );
            });

            $( "#finderContainer" ).off( 'click touchstart',  cssselector + ' .arrow.right.active' ).on( 'click touchstart', cssselector + ' .arrow.right.active', {}, function( event ){
                event.preventDefault();
                self.changeIndex( 1 );
            });
        }

        this.$arrowLeft = this.$el.find( ".arrow.left" );
        this.$arrowRight = this.$el.find( ".arrow.right" );

        this.$strip_container = this.$el.find( ".strip_container" );

        this.numOfSlides = data.length;

        var outputString = '';

        var i = 0;
        _.each( data , function (item) {
            var templateString = htmlpartials[ "slide" ];
            var compiledTemplate = _.template(templateString);
            item.index = i;
            outputString += compiledTemplate({item:item});
            i ++;
        });

        // duplicate the data to make a seamless circular slider
        // this is the same method we used to use in flash
        var i = 0;
        _.each( data , function (item) {
            var templateString = htmlpartials[ "slide" ];
            var compiledTemplate = _.template(templateString);
            item.index = i;
            outputString += compiledTemplate({item:item});
            i ++;
        });

        this.$strip_container.append( outputString );

        var stripWidth = this.$strip_container.width();
        var $slide = this.$strip_container.find( ".slide" );
        var slideWidth = $slide.outerWidth();

        // initial start value ( not sure if we will need it )
        this.startX = -stripWidth + slideWidth;
        // the value where we want the slider x positon to be
        this.desiredX = this.startX;
        TweenMax.set( this.$strip_container, { x: this.desiredX } );

        this.slideWidth = slideWidth;
        var totalWidth = this.numOfSlides * slideWidth;

        this.$strip_container.width( totalWidth * 2 );

        if (this.circular === true ) {
            this.$arrowLeft.addClass("active");
            this.$arrowRight.addClass("active");
        } else {
            this.checkArrows( this.index );
        }
        
        //this.checkArrows( this.index );
    },

    // check based on the current page whether we need to show or hide arrows
    checkArrows: function( index ) {
        // ***************************************************************
        // if we reach lower limit turn off left arrow
        if ( index === 0) {
            this.$arrowLeft.removeClass("active");
        } else {
            this.$arrowLeft.addClass("active");
        }

        // ***************************************************************
        // if we reach upper limit turn off right arrow
        if ( index === ( this.numOfSlides - 1 ) ) {
            this.$arrowRight.removeClass("active");
        } else {
            this.$arrowRight.addClass("active");
        }
    },

    // change the index of the pagination
    // previous and next
    changeIndex: function( direction ) {
        //alert( direction );
        // ***************************************************************
        // check the index and make sure its 
        // within the max num of slides and 1
        var index = this.index;
        var newIndex = index + direction;

        if (newIndex < 0) {
            newIndex = this.numOfSlides - 1;
            //return;
        }
        else if (newIndex > this.numOfSlides - 1 ) {
            newIndex = 0;
            //return;
        }

        this.gotoSlide( newIndex, direction );
    },

    // animate the slide to the current position
    gotoSlide: function( index, direction ) {
        console.log( " ProductwalldressesView.gotoSlide ");

        // ***************************************************************
        // go to slide based on index
        var self = this;
        this.index = index;

        // check to see if we need top reset the x value of the strip
        this.checkBoundaries( direction );

        // set the new position for a next click
        if( direction > 0 ) {
            //newX = this.startX - this.slideWidth;
            this.desiredX = this.desiredX - this.slideWidth;
        }

        // set the new position for a previous click
        if ( direction < 0 ) {
            this.desiredX = this.desiredX + this.slideWidth;
        }

        // animate the strip to the intended x position
        TweenMax.to( [ this.$strip_container ], 0.7, { x: this.desiredX, ease:Power3.easeOut, onComplete: function() {
            //self.checkBoundaries();
        } } );

        if ( !this.circular ) this.checkArrows( index );
    },

    // if the strip gets too close to the edge we reset it back to the strip width/2
    checkBoundaries: function( direction ) {
        var stripWidth = this.$strip_container.width();
        // if the user is clicking next
        if ( direction > 0 ) {
            if ( this.$strip_container[ 0 ]._gsTransform.x <= -stripWidth/2 ) {
                //var xnew = this.$strip_container[ 0 ]._gsTransform.x + stripWidth/2;
                this.desiredX = this.desiredX + stripWidth/2;
                TweenMax.set(this.$strip_container, { x: this.desiredX} );
                //this.$strip_container.x = this.$strip_container.x + stripWidth/2;
            }    
        }
         // if the user is clicking previous
        if ( direction < 0 ) {
            console.log( this.$strip_container[ 0 ]._gsTransform.x, " x value ");
            if ( this.$strip_container[ 0 ]._gsTransform.x >= -stripWidth/2 + this.slideWidth ) {
                //var xnew = this.$strip_container[ 0 ]._gsTransform.x + stripWidth/2;
                this.desiredX = this.desiredX - stripWidth/2;
                TweenMax.set(this.$strip_container, { x: this.desiredX} );
                //this.$strip_container.x = this.$strip_container.x + stripWidth/2;
            } 
        }
    }

});