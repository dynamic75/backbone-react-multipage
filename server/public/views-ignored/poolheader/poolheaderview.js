var PoolheaderView = Backbone.View.extend({


    initialize: function() {
        console.log('poolheaderView initialize()');
    },

    render : function( cssselector ) {
        console.log('poolheaderView render()');


        //  pick up the model that this view renders from
        //   the model in this case is app.status which is derived from the URL
        var category = app.status.currentFragsArray[0];
        var config = SiteConfig.dressshop[category];
        var filter = app.status.currentFragsArray[1];

        // set the $el dynamically
        this.$el = $( cssselector );



        // Starting background load of header images...
        // Do it only once
        var self = this;
        app.loaderView.start('preload');
        if(!self.images_preloaded){
            var myarr = [
                    assetsDirectory + 'images/forCMS/shop_night_out_background.jpg',
                    assetsDirectory + 'images/forCMS/shop_winter_wedding_background.jpg'
            ];
            BBPreload.batchpreload(myarr, function(){
                self.images_preloaded = true;
                app.loaderView.end('preload');
            });
        }


        /***********************************************/
        /*            RENDER OUT THIS VIEW             */
        /***********************************************/

        // render the initial structure
        this.$el.html( htmlpartials.poolheader );

        // inject the backgroud image in the header
        this.$el.find('#shop-content').html(
            '<img src="' +
            config.background +
            '" />'
        );

        // hide the left right arrows when   user is looking at a petite pool or a plus size pool
        if ( config.marquee ){
            this.$el.find(".arrow").add(".indicators").show();
            this.$el.find('.' + config.marquee.indicator).addClass("selected");
        } else {
            this.$el.find(".arrow").add(".indicators").hide();
        }


        /***********************************************/
        /*            SETUP THE CONTROLLER             */
        /***********************************************/


        this.$el.find('.arrow').click(function() {
            handleLeftRight( $(this).hasClass('left') ? 'left' : 'right' );
        });

        this.$el.find('#shop-content').swipe({
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
                if ( config.marquee ){
                    handleLeftRight(  direction  );
                }
            },
            swipeRight:function(event, direction, distance, duration, fingerCount) {
                if ( config.marquee ){
                    handleLeftRight(  direction  );
                }
            },
                
            threshold: 75
        });

        function handleLeftRight(  arg ){
            console.log( '=====> ', arg );
            //  SiteConfig.shopheader  is an array showing the sequence the headers cycle thru
            var pos = SiteConfig.dressshopheader.indexOf(category);
            switch(arg) {
                case 'left' : pos -= 1; break;
                case 'right' : pos += 1; break;
            }
            // wraparound
            if ( pos < 0 ) pos = SiteConfig.dressshopheader.length-1;
            if ( pos == SiteConfig.dressshopheader.length) pos = 0;
            // generate the new url
            var url = '#/dressshop/' + SiteConfig.dressshopheader[pos];
            // preserve the filter if possible
            if ( filter ) url += ('/' + filter);
            // switch to new url
            window.location.replace( url );
        }




    }






});
