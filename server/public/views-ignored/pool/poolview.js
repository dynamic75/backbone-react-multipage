

var PoolView = Backbone.View.extend({

    initialize: function() {
    },

    render: function( url, callback ) {
        // POOL CALL
        var self = this;

        if ( !callback ) callback = "cdnCallback";

        this.dataReady = false;

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
            cache: true,
            // you don't need if calling Skava directly and not using local feed but it will still work if you leave it in
            jsonpCallback: callback,
            success: function( data, textStatus, jqXHR ){
                tempData = BBPool.processData( data );
                // this is the original data set
                self.data = tempData;
                this.dataReady = true;
                // point to the data so we can get it easily
                app.status.data = self.data;
                // trigger a loaded event which is heard in productwallview intances
                grandCentral.trigger("dataLoaded");
            },
            error: function( request, type, errorThrown ){
                console.error("There was an error loading this pool");
                tempData = [];
                // this is the original data set
                self.data = tempData;
                // point to the data so we can get it easily
                app.status.data = self.data;
                // trigger a loaded event which is heard in productwallview intancess
                grandCentral.trigger("dataLoaded");
            }
        });
    },

    getData: function() {
        return this.data;
    },

    isDataReady: function() {
        return this.dataReady;
    }

});