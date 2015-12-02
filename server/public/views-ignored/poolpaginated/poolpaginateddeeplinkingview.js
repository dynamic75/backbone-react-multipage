/*

    The philosophy is ...


    By the time runtime hits this view the poolname  for the saved set should have been decided.
    Now we want to call skava to get that data and apply any sorting category2s or pricing category2s
    to the data
    we trash the dom and rebuild the pool according to the poolname data.
    This process is the model-view relationship


    There is a second part to this which involves a controller because the user may want to
    sort from high to low or category2 out certain prices.
    In this case these controllers will massage the data and rebuild the dom for this view


*/
var PoolpaginatedDeepLinkingView = Backbone.View.extend({


    initialize: function() {
        console.log('poolproductsView1 initialize()');
        this.loaded = false;
    },

    render : function( cssselector , url ){
        console.log('poolproductsView render()');

        // start a loader for render
        app.loaderView.start('poolrender');
        var self = this;


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

        $("#finderContainer").off('change','#sortby').on('change','#sortby',{},function(event){
            //$("#finderContainer #shop .filterBar").trigger("resetMostLoved");
            var state = $(this).val();
            self.currentSort = state;
            self.buildPool( self.currentData );
        });


        $("#finderContainer").off('click','.pool-container .button.prev').on('click','.pool-container .button.prev',{},function( event ){
            event.preventDefault();
            var newPageIndex = self.pageIndex - 1;
            console.log( newPageIndex, "newPageIndex" );
            if ( newPageIndex >=0 ) self.changeURL( newPageIndex + 1 );
        });

        $("#finderContainer").off('click','.pool-container .button.prevprev').on('click','.pool-container .button.prevprev',{},function( event ){
            event.preventDefault();
            self.changeURL( 1 );
        });

        $("#finderContainer").off('click','.pool-container .button.next').on('click','.pool-container .button.next',{},function( event ){
            event.preventDefault();
            var newPageIndex = self.pageIndex + 1;
            if ( newPageIndex < self.totalPages ) self.changeURL( newPageIndex + 1 );
        });

         $("#finderContainer").off('click','.pool-container .button.nextnext').on('click','.pool-container .button.nextnext',{},function( event ){
            event.preventDefault();
            self.changeURL( self.totalItems + 1 );
        });

        $("#finderContainer").off('click','.pool-container .pagebutton.active').on('click','.pool-container .pagebutton.active',{},function( event ){
            event.preventDefault();
            var index = parseInt( $(this).attr("index"), 10 );
            self.changeURL( index + 1 );
        });


        // POOL

        this.currentSort = "DEFAULT";
        this.pageSize = 24;
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

        // Controllers top listen to a filter

        grandCentral.on('filterclicked', function(){
            var temp = app.status.filterpayload;
            self.filterPool();
            // do something
            console.log(' =================> I AM IN THE POOL VIEW AND SOMEONE IS ORDERING ME AROUND ', temp);
        });

        //  make the AJAX call
        var url = "http://cdnsocialmacys.skavaone.com/social/entry/getSimplePoolEntries?campaignId=581&offset=0&limit=1000&poolName=&callback=cdnCallback";
        this.callPool( url );//category + "/" + category2);

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

        var url = url,
            tempData;
        // Skava direct feed
        //url = poolRoot//"http://mcstage.atfingertips.com/social/entry/getSimplePoolEntries?campaignId=326&offset=0&limit=1000&stats=true&poolName=hgg_forher_sweaters";


        var poolRequest = {
            type: "GET",
            url: url,
            dataType: "jsonp",
            timeout: 30000,
            tryCount: 0,
            tryLimit: 2,
            async: true,
            cache: true,
            // you don't need if calling Skava directly and not using local feed but it will still work if you leave it in
            success: function( data, textStatus, jqXHR ){
                tempData = BBPool.processData( data );
                // this is the original data set
                self.data = tempData;
                // this is the copy of the data to be modified
                self.currentData = self.data.slice(0);
                // builds the pool primary entry point
                //self.buildPool( self.currentData );
                self.buildFilters();
                //// echo that pool is loaded to grand central
                grandCentral.trigger('poolloaded');
            },
            error: function( request, type, errorThrown ){
                console.error("There was an error loading this pool");
                tempData = [];
                // this is the original data set
                self.data = tempData;
                // this is the copy of the data to be modified
                self.currentData = self.data.slice(0);
                // builds the pool primary entry point
                //self.buildPool( self.currentData );
                self.buildFilters();
            }
        };
        if (app.status.hevronPool) {
            poolRequest.jsonpCallback = "skavaPoolLoadCallback";
        } else {
            poolRequest.jsonpCallback = "cdnCallback";
        }
        
        $.ajax(poolRequest);

    },

    buildFilters: function() {
        var self = this;
        // build hte brand filter from pool pfeed_brand
        this.loaded = true;
        app.loaderView.end('poolrender');
                /*
        var plucked = _.pluck( self.currentData, "pfeed_brand" );
        var brandsArray = _.uniq(plucked, function(item) { return item; });

        var brandsArray = brandsArray.slice(0, 9);


        //var template = "<"
        console.log( brandsArray, " BRANDS ARRAY");
        var source = $("#brand-dropdown-template").html();
        console.warn(source)

        $("#brand-dropdown").bind("change", function( event ) {
            var value = $(this).val();
            if ( value !== "all") {
                self.filterPool( value );
            } else {
                self.currentData = self.data.slice(0);
                self.buildPool( self.currentData );
            }

        });
        */

        this.buildPool( this.currentData );

    },

    filterPool: function( value ) {
        // *********************************************************************
        // Filter the pool based on app.status.filterpayload
        // *********************************************************************
        var self = this;

        // we have to duplicate the original set of data
        // or we will get smaller and smaller sets and the
        // filter will stop working
        self.currentData = self.data.slice(0);

        // reset the page index back top zero
        this.pageIndex = 0;

        // filter at BBWeddingFilters.js because its kind of messy
        //self.currentData = BBWeddingFilters.filter( self.currentData );

        self.currentData = _.filter(
            self.currentData,
            function(item){
                return item.pfeed_brand == value;
            }
        );

        console.log( self.currentData, "Current Data" );

        //console.log('The number of types selected is = ', temp);
        console.log('=====>  self.currentData  ', self.currentData);

        self.buildPool( self.currentData );

    },

    changeURL: function( index ) {
        window.location = "#/" + app.status.currentPage + "/" + ( index );
    },

    changePageIndex: function( index ) {
        this.pageIndex = index;
        this.buildPool( this.currentData );
    },

    buildPool: function( data ) {
        // close the loader


        var self = this;
        var $container = $("#poolproducts");

        if (!app.status.multiplePools) {
            $container.empty();    
        }
        

        // *********************************************************************
        // Sort the pool based on price or most num votes
        // *********************************************************************

        switch( this.currentSort ) {
            case "PRICE_HIGH_TO_LOW":
                data = BBPool.sortDataPriceHighToLow( data );
                break;
            case "PRICE_LOW_TO_HIGH":
                data = BBPool.sortDataPriceLowToHigh( data );
                break;
            case "VOTES_HIGH_TO_LOW":
                data = BBPool.sortDataVotesHighToLow( data );
                break;
            default:
                data = BBPool.sortDataByPoolOrder( data );
        }
        this.totalItems = data.length;

        // *********************************************************************
        // *********************************************************************

        // *********************************************************************
        // Add some empty pool default text
        // *********************************************************************
        if (!app.status.multiplePools) {
            if (data.length === 0) {
                var message;
                if ( this.loaded === true ) {
                    message = "<div class='emptypool'>We're sorry, at this time we do not have any items in our collection that match your preferences. We often add new styles to our site. so check back soon; or, make new preference selections now.</div>";
                } else {
                    message = "";
                }
                $container.append( message );
                return;
            }
        }


        // *********************************************************************
        // *********************************************************************

        // *********************************************************************
        // Load pieces of the pool to create infinite scroll
        // *********************************************************************

        if (this.wantPagination === true) {
            //this.totalPages = data/
            data = data.slice( this.pageIndex * this.itemsOnPage, this.pageIndex * this.itemsOnPage + this.itemsOnPage );
            console.log( data, " poolproductsview1 page data THE PAGE DATA ");
            console.log( this.itemsOnPage, " poolproductsview1.itemsOnPage");
            console.log( this.pageIndex, " poolproductsview1.pageIndex");
        }

        // *********************************************************************
        // *********************************************************************

        // *********************************************************************
        // Add pagination functionality
        // **********************************************************************
        if (this.wantPagination === true) {
            this.totalPages = Math.ceil( this.currentData.length / this.itemsOnPage );
            var pageClass = '';
            if ( this.pageIndex === 0 ) pageClass = "first";
            if ( this.pageIndex === this.totalPages - 1 ) pageClass = "last";
            if ( this.totalPages === 1 ) pageClass = "onepageonly";
            var i = 0;
            var upperPaginationLimit = 3;
            var pageInterator = 0;
            if ( this.totalPages < upperPaginationLimit ) pageInterator = this.totalPages;
            if ( this.totalPages >= upperPaginationLimit ) pageInterator = upperPaginationLimit;
            var template = '';                
            template += '<div class="pagination ' + pageClass + '">';
            template += '<span class="itemsFound">'+ this.currentData.length + ' items found</span>';
            template += '<span class="button prevprev">&#171;</span>';
            template += '<span class="button prev">&#8249;</span>';

            var startPaginationPage = 0;
            var endPaginationPage = 2;

            // how many numbers do we want to show on each side

            if ( this.pageIndex > 0) {
                startPaginationPage = this.pageIndex - 1;
                endPaginationPage = startPaginationPage + 2;
            }

            if ( endPaginationPage > this.totalPages - 1 ) {
                //startPaginationPage : this.pageIndex - 2;
                startPaginationPage = (( this.pageIndex - 2) >= 0 ) ? this.pageIndex - 2: 0;
                endPaginationPage = this.totalPages - 1;
            }
            
            i = startPaginationPage;
            pageInterator = endPaginationPage;
            while( i <= pageInterator ) {
                var selectClass = "";
                if ( i === this.pageIndex ) {
                    selectClass = "selected";
                } else {
                    selectClass = "active";
                }
                template += '<span class="button pagebutton ' + selectClass + '" index="' + i + '">' + ( i + 1 ) +'</span>';
                i++;
            }
            template += '<span class="button next">&#8250;</span>';
            template += '<span class="button nextnext">&#187;</span>';
            template += '</div>';
            $container.append( template );
        }
        // *********************************************************************
        // *********************************************************************

        // *********************************************************************
        // Template the data,  underscore
        // **********************************************************************

        var outputString = '';
        _.each(data, function (item, idx) {
            if (app.status.multiplePools) {
                var templateString = htmlpartials["product_listing_desktop_customPDP"];
            } else {
                var templateString = htmlpartials["product_listing_desktop"];    
            }
            
            var compiledTemplate = _.template(templateString);
            outputString += compiledTemplate({item:item});
        });

        if (!app.status.multiplePools) {
            outputString += htmlpartials["backtotoploadmoredesktop"];
        }

        console.log( data.length, " data.length");
        console.log( self.currentData.length, "currentData.length");

        // render all items to the dom in one go
        $container.append(outputString);

        if ( data.length === self.currentData.length ) $(".loadmore").addClass("hidden");

    },

    update: function() {
        var fragIndex = 0;
        var pageString = app.status.currentFragsArray[ fragIndex ] + "";

        // check if the frag has only numbers or we will redirect
        var isnum = /^\d+$/.test( pageString );
        if ( isnum ) {
            // convert to number
            pageNum = parseInt( pageString, 10 );

            if ( pageNum < 1 ) this.changeURL( 1 );
            if ( pageNum > this.totalPages ) this.changeURL( this.totalPages );
            // should be zero based but lets make ir more readable
            this.changePageIndex( pageNum - 1 );
        } else {
            this.changeURL( 1 );
        }
 
    }

});


