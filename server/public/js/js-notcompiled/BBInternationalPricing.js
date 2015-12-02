


// this is a direct pickup of Khurrams code from skavainterop
// to my knowledge it is only used in Gift Guide

// usage  BBInternationalPricing.init();

//  STILL TO DO
//  THE onUpdateInternational   should be passed in so that jQueries are made outside the library





var BBInternationalPricing = ( function() {

    try { finder.isInternational = available } catch(e){}       // for KK framework
    try { app.status.isInternational = available } catch(e){}   // for BB framework

    function init() {

        console.log("===> 0000am");

        var obj = {
            onInitializeInternational: function(available, response) {
                console.log("===> international pricing is available", available);

                // when passed to skava the closure is lost, also I've run tests and I
                // use a setter to keep the flag within BBInternationalPricing so it must be external
                try { finder.isInternational = available } catch(e){}
                try { app.status.isInternational = available } catch(e){}
            },
            onUpdateInternational: function(response) {
                console.log(response, "===> response from international");

                for (i in response.internationaldetail) {
                    var item = jQuery(".product[productid='" + i + "']");
                    if (response.internationaldetail[i].shippingavailability == "N") {
                        jQuery(".price1", item).html("Not available for shipping");
                        jQuery(".price2", item).html("");
                        jQuery(".price3", item).html("");
                    }
                    else {
                        jQuery(".price1", item).html(response.internationaldetail[i].pfeed_price1);
                        jQuery(".price2", item).html(response.internationaldetail[i].pfeed_price2);
                        jQuery(".price3", item).html(response.internationaldetail[i].pfeed_price3);
                    }
                }

            }
        }


        setTimeout(function(){
            try {
                initializeInternational(obj);
            }
            catch (e) {
                console.log("===> Could not initialize the international pricing...", e);
            }
        }, 2000);



        jQuery("#finderContainer").bind("poolPageChanged", function() {
            console.log('===> poolPageChanged event has triggered international pricing');

            var test = false;
            try { if(finder.isInternational == true){ test = true; } } catch(e){}
            try { if(app.status.isInternational == true){ test = true; } } catch(e){}
            if (!test) {
                console.log('===> not international, exiting. ');
                return;
            }

            var productIds = [];

            var jobj = jQuery('.product[productid]:visible');
            console.log('===> international pricing  jobj.length ', jobj.length);
            jobj.each(function () {
                var p = jQuery(this).attr("productId");
                console.log('===> international pricing p = ', p);
                productIds.push(p);
            });

            if (productIds.length == 0) {
                console.log('===> return end function as length 0');
                return;
            }

            try {
                getInternationalDetails(productIds.join(","));
            } catch (e) {
                console.log("Couldn't get international pricing details", e);
            }

        });



    }






    function removeSuppressedFromPoolData ( pooldata, cmsentries ) {
        // the way we are going to do this is first flag items to be removed
        // then go back thru the array and remove those items

                            // hacks to test in #/shop/teens/guysaccessoriesshoes
                            // cmsentries.push({
                            //     brand: "Nike",
                            //     //product_types: []
                            //     product_types: [{type:'sock'}]
                            // });
                            // console.log('      hacks cmsentries', cmsentries);

        _.each(pooldata, function (entry, i) {
            var s = isSuppressed(entry, cmsentries);
            if (s) {
                entry.suppressed = true;
                console.log('suppressing ', entry.title,' ',entry.pfeed_brand,' ',entry.pfeed_producttype);
            }
        });
        var result = _.filter( pooldata, function( entry ) {
            if ( !entry.suppressed ) return entry;
        } );
        console.log('isInternational. removeSuppressedFromPoolData(),  removed ', pooldata.length - result.length, ' items');
        return result;
    }


    /* adapted by J.Davis from Jason's code */
    function isSuppressed( entry, cmsentries ) {
        for (var i = 0; i < cmsentries.length; i++) {
            if (cmsentries[i].brand.toLowerCase() == entry.pfeed_brand.toLowerCase()) {
                if (!cmsentries[i].product_types || cmsentries[i].product_types.length == 0) {
                    //console.warn('SUPRESSED: 1');
                    return true;
                }
                for (var ii = 0; ii < cmsentries[i].product_types.length; ii++) {
                    if (cmsentries[i].product_types[ii].type.toLowerCase() == entry.pfeed_producttype.toLowerCase()) {
                        //console.warn('SUPRESSED: 2');
                        return true;
                    }
                }
            }
        }
        return false;
    }
    /* original code below,  written by Jason Contento, taken from GGfinder 2013   */ /*
    function isSuppressed( entry ) {
        if(finder.skava.internationalPricing.isInternational){
            console.log( 'isSuppressed ' );
            for(var i=0; i<finder.supressed_products.length; i++){
                if(finder.supressed_products[i].brand.toLowerCase()==entry.properties.pfeed_brand.toLowerCase()){
                    if(!finder.supressed_products[i].product_types || finder.supressed_products[i].product_types.length==0){
                        console.warn('SUPRESSED:',entry.properties.pfeed_brand.toLowerCase(),entry.properties.pfeed_producttype.toLowerCase());
                        return true;
                    }
                    for(var ii=0; ii<finder.supressed_products[i].product_types.length; ii++){
                        if(finder.supressed_products[i].product_types[ii].type.toLowerCase()==entry.properties.pfeed_producttype.toLowerCase()){
                            console.warn('SUPRESSED:',entry.properties.pfeed_brand.toLowerCase(),entry.properties.pfeed_producttype.toLowerCase());
                            return true;
                        }
                    }
                }
            }
        }
        //console.log('not products:',entry.properties.pfeed_brand.toLowerCase(),entry.properties.pfeed_producttype.toLowerCase());
        return false;
    }
    */


    function getArrayofSuppressedCategories(cmsdata){
        return _.pluck(cmsdata.suppressed_categories.entries, "category");
    }



    // table of contents
	return {
		init : init,                                                    // written by Khurram Khan, taken from skavaInterop
        removeSuppressedFromPoolData : removeSuppressedFromPoolData,    // J.Davis, Jason Contento
        getArrayofSuppressedCategories : getArrayofSuppressedCategories // B. Evans
    };

} )();