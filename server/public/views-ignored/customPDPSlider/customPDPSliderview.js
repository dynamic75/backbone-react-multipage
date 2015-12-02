

var CustomPDPSliderView = Backbone.View.extend({


    initialize: function() {
        console.log('CustomPDPSliderView initialize()');


    },

    render: function() {
        var self = this;
        $('#cview').append(htmlpartials.customPDPSlider);

        self.listview    = new ListView();
        self.productview = new ProductView();

    },

    getProduct: function(productids) {
        // this is the ajax call made to get the product information
        // make sure we're sending in an array of product ids
        console.log('CustomPDPSliderView render()');
        var self        = this,
            producturl  = "http://stanley.macys.com/v4/catalog/product/",
            // product ids are passed. we need to make sure it is an array of product ids
            data;
            if (typeof productids === "array") {
                if (productids.length > 1) {
                    // when an array is passed in as the product ids
                    // it needs to be changed to comma separated values to append to the url

                    _.each(productids, function(val, idx, list)  {
                        if (idx === 0) {
                            data = val.toString();    
                        } else {
                            data += ',' + val.toString();
                        }
                    });

                } else {
                    // single product id usecase to append to the url
                    data = productids;
                }
            } else {
                // when it's already a string
                data = productids;
            }

            console.log(data);
        var poolRequest = $.ajax({
            type: "GET",
            url: producturl + data,
            dataType: "JSONP",
            data: data,
            timeout: 3000,
            tryCount: 0,
            tryLimit: 2,
            async: true,
            cache: false,
            success: function( data, textStatus, jqXHR ){
                var parsedData = JSON.parse(data);
                var processedData = CustomPDPHelper.processData(parsedData.product);
                // globally declare processed data to be available
                app.status.currentCustomViewData = processedData;
                app.loaderView.end( 'gettingProduct' );
                self.listview.render(processedData.products);
                self.productview.render(processedData.products[0]);
                grandCentral.trigger('productloaded');
            },
            error: function( request, type, errorThrown ){
                console.log('error thrown for get product ajax call', request, errorThrown);
                app.loaderView.end( 'gettingProduct');
                var errorMsg = "Sorry this product is not available.";
                self.listview.render(errorMsg);
                self.productview.render(errorMsg);
                grandCentral.trigger('productloaded');
            }
        });
         // the property after the dot is the filename of the html partial

    }
});