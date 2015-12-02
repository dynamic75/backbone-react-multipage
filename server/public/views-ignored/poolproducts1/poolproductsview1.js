/*

    The philosophy is ...


    By the time runtime hits this view the poolname  for the saved set should have been decided.
    Now we want to call skava to get that data and apply any sorting filters or pricing filters
    to the data
    we trash the dom and rebuild the pool according to the poolname data.
    This process is the model-view relationship


    There is a second part to this which involves a controller because the user may want to
    sort from high to low or filter out certain prices.
    In this case these controllers will massage the data and rebuild the dom for this view


*/
var PoolproductsView1 = Backbone.View.extend({


    initialize: function() {
        console.log('poolproductsView initialize()');
    },

    render : function( cssselector ){
        console.log('poolproductsView render()');

        // start a loader for render
        app.loaderView.start('poolrender');

        var self = this;
        //  pick up the model that this view renders from
        //   the model in this case is app.status which is derived from the URL
        var category = app.status.currentFragsArray[0];
        var config = SiteConfig.dressshop[category];
        var filter = app.status.currentFragsArray[1];






        /***********************************************/
        /*          THIS IS ALL CONTROLLER STUFF       */
        /***********************************************/



        // this is binding for when the DOM events don't exist that's why it looks funny
        $("#finderContainer").off('click','.backtotop').on('click','.backtotop',{},function(event){
            $( "html, body" ).animate( { scrollTop: 0 }, 600 );
        });

        $("#finderContainer").off('click','.loadmore').on('click','.loadmore',{},function(event){
            self.incrementPage();
        });

        // POOL

        this.currentSort = "DEFAULT";
        this.pageSize = 8;
        this.pageIndex = 0;
        this.itemsOnPage = this.pageSize;
        this.wantInfiniteScroll = false;
        this.wantPagination = true;

        if (this.wantInfiniteScroll === true) {
            $(parent.window.document).bind("scroll.endless", function( event ) {
                var scrollTop = $( parent.window.document ).scrollTop();
                var contentHeight = $( parent.window.document ).height();
                var windowHeight = $( parent.window ).height();
                var p = scrollTop / ( contentHeight - windowHeight );
                // AUTO LOAD NEXT PAGE OF PRODUCTS
                console.log( p, "p output" );
                if( p > 0.7 ){
                   self.incrementPage();
                }
            });
        }


        // Call the pool with the correct URL
        // first get the correct filter from the array of filters
        var filterObj =  _.findWhere(config.filters, {key: filter}),
            poolname;

        // this conditional is for plus and petite
        if(filterObj === undefined){
            poolname = config.poolname;
        } else {
            poolname = filterObj.poolname;
        }

        this.callPool(poolRoot + poolname);
    },






    incrementPage: function() {
        var self = this;
         //self.incrementPage();
        self.prevItemsOnPage = self.itemsOnPage;
        // page size gets bigger and bigger until it equals the total items
        self.itemsOnPage =  ( self.itemsOnPage + self.pageSize > self.totalItems ) ? self.totalItems : self.itemsOnPage + self.pageSize;
        if ( self.prevItemsOnPage !== self.itemsOnPage ) {
            self.buildPool( self.currentData );
        }
    },










    /***********************************************/
    /*              THIS IS ALL VIEW STUFF         */
    /***********************************************/




    callPool: function(url){
        // POOL CALL
        var self = this;

        // *********************************************************************
        // Load the pool or retrieve from cache
        // *********************************************************************

        var tempData;

        console.log( '====>  ',url );

        // Fake some data while we wait for Varalakshmi
        //url = "http://mcstage.atfingertips.com/social/entry/getSimplePoolEntries?campaignId=326&offset=0&limit=1000&stats=true&poolName=hgg_forher_sweaters";


        var poolRequest = $.ajax({
            type: "GET",
            url: url,
            dataType: "jsonp",
            timeout: 30000,
            tryCount: 0,
            tryLimit: 2,
            async: true,
            cache: false,
            // you don't need if calling Skava directly and not using local feed but it will still work if you leave it in
            //jsonpCallback: "cdnCallback",
            success: function( data, textStatus, jqXHR ){
                tempData = BBPool.processData( data );
                // this is the original data set
                self.data = tempData;
                // this is the copy of the data to be modified
                self.currentData = self.data.slice(0);
                // builds the pool primary entry point
                self.buildPool( self.currentData );
            },
            error: function( request, type, errorThrown ){
                console.error("There was an error loading this pool");
                tempData = [];
                // this is the original data set
                self.data = tempData;
                // this is the copy of the data to be modified
                self.currentData = self.data.slice(0);
                // builds the pool primary entry point
                self.buildPool( self.currentData );
            }
        });

    },

    buildPool: function( data ) {

        // close the loader
        app.loaderView.end('poolrender');

        var self = this;

        var $container = $("#poolproducts");
        $container.empty();

        // *********************************************************************
        // Sort the pool based on insertIndex
        // *********************************************************************

        data = BBPool.sortDataByPoolOrder( data );
        this.totalItems = data.length;

        // *********************************************************************
        // *********************************************************************

        // *********************************************************************
        // Add some empty pool default text
        // *********************************************************************

        if (data.length === 0) {
            $container.append("<div class='emptypool'>We're sorry, at this time we do not have any items in our collection that match your preferences. We often add new styles to our site. so check back soon; or, make new preference selections now.</div>");
            return;
        }

        // *********************************************************************
        // *********************************************************************

        // *********************************************************************
        // Load pieces of the pool to create infinite scroll
        // *********************************************************************

        if (this.wantPagination === true) {
            data = data.slice( this.pageIndex * this.itemsOnPage, this.pageIndex * this.itemsOnPage + this.itemsOnPage );
        }

        // *********************************************************************
        // *********************************************************************

        // *********************************************************************
        // Template the data,  underscore
        // *********************************************************************

        var outputString = '';
        _.each(data, function (item) {
            var templateString = htmlpartials["product_listing1"];
            var compiledTemplate = _.template(templateString);
            outputString += compiledTemplate({item:item});
        });

        outputString += htmlpartials["backtotoploadmore"];

        console.log( data.length, " data.length");
        console.log( self.currentData.length, "currentData.length");

        // render all items to the dom in one go
        $container.append(outputString);

        if ( data.length === self.currentData.length ) $(".loadmore").addClass("hidden");

        // *********************************************************************
        // *********************************************************************

    }





});
