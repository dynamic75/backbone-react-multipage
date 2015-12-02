// class object
var CustomPDPHelper = ( function() {

	// methods within the class to be used
	function processData(data) {

		/*  the purpose of process data  */
		// parse data
		// map data out into the three parts needed

		

		console.log('data original ', data);
		var newData      = {};
		newData.products = [];

		// iterate through the product list in case there are multiple products
		_.each(data, function(product, idx, list) {
			if (product.productDetails.childProducts) {
				// there are child products products
				console.log('there are child products');
				newData.hasChildProducts = true;

				//child product usecase
				//pass in the product builder data multiple times and feed it into an array
                newData.products.push(productBuilder(product, data, product.id, 'master'));  //<-- this is the master product/collection

                //these are the child products/member pages in collection
                _.each(product.productDetails.childProducts, function(elem, idx) {
					newData.products.push(productBuilder(elem, data, product.id, 'inmaster'));
				});

            } else {
				// there are no child products
				console.log('there are NO child products');
				newData.hasChildProducts = false;
				//pass in the product builder data once and feed it into an array of 1

				newData.products.push(productBuilder(product, data, product.id, 'notmaster')); //single product

			}
			
			console.log('heres the new data', newData, newData.upccolorsize, newData.upccolorsize);

		});


		return newData;


	}

	function productBuilder(data, masterdata, id, collection) {
		var obj = {},
			tempObj,
			key,
			tempArr,
			color;

        obj.master = {};

		// everything thats needed for the product detail page

            obj.id                = data.id;
            obj.name              = data.productDetails.summary.name;
            obj.description       = data.productDetails.summary.description;
            obj.type              = data.productDetails.summary.typeName;
            obj.availability      = data.productDetails.availability;
            obj.sizemap           = data.productDetails.SizeMap || 'none';
            obj.colormap          = data.productDetails.colorMap;
            obj.upcs              = data.productDetails.upcs || data.upcs; // for child products
            obj.maxQuantity       = data.productDetails.summary.maxQuantity;
            obj.image             = data.productDetails.summary.primaryPortraitSource;
            obj.URL               = data.productDetails.summary.productURL;
            obj.iscollection      = collection == 'master';
            obj.incollection      = collection == 'inmaster';
            obj.addimages         = data.productDetails.summary.additionalImageSource ? data.productDetails.summary.additionalImageSource : 0;

            // child product customer ratings, master product has separate reviews. child products do not have number of reviews
            var custratings       = _.pluck(_.filter(data.productDetails.attributes, function(item,i) { return _.property('name')(item) == 'CUSTRATINGS'}), 'values');
            if (custratings[0] != undefined) {
                obj.rating        = custratings[0][0].value;
            }

		// transforming some of the data with variables below
		obj.upccolorsize      = [];
		obj.upcmap            = {};
		obj.colorwaymap       = {};


		// price stuff
		obj.onSale            = data.productDetails.price.onsale;

		if (obj.onSale) { // prices for on sale products and collections
            if ( typeof data.productDetails.price.original !== 'undefined' && collection != 'master') {
                obj.originalPrice = parseFloat(data.productDetails.price.original.pricevalue.low).toFixed(2);
                obj.salePrice     = parseFloat(data.productDetails.price.retail.pricevalue.low).toFixed(2);
            } else {
                if ( collection == 'master' ) { // if product is master product or collection show range of sale prices instead of single price
                    var child = data.productDetails.childProducts;
                    var priceobj = _.pluck(_.pluck(_.pluck(child, 'productDetails'), 'price'), 'retail');
                    var pricefiltered = _.filter(priceobj, function (prod, i) {
                        return prod != undefined;
                    });
                    var pricepval = _.pluck(pricefiltered, 'pricevalue');
                    var rangeprice = _.pluck(pricepval, 'low');

                    // this is retail price range, as for some collections such as leggings all original prices are the same.
                    // this is the range of retail prices
                    obj.pricerange = _.min(rangeprice).toFixed(2) + ' - ' + _.max(rangeprice).toFixed(2);
                } else {
                    obj.originalPrice = parseFloat(data.productDetails.price.retail.pricevalue.low).toFixed(2);
                    obj.salePrice     = parseFloat(data.productDetails.price.retail.pricevalue.low).toFixed(2);
                }
            }
		} else { // prices for regular priced products and collections
            if ( collection == 'master' ) { // regular priced collection range
                var child = data.productDetails.childProducts;
                var priceobj = _.pluck(_.pluck(_.pluck(child, 'productDetails'), 'price'), 'retail');
                var pricefiltered = _.filter(priceobj, function (prod, i) {
                    return prod != undefined;
                });
                var pricepval = _.pluck(pricefiltered, 'pricevalue');
                var rangeprice = _.pluck(pricepval, 'low');

                // this is the range of retail prices
                obj.pricerange = _.min(rangeprice).toFixed(2) + ' - ' + _.max(rangeprice).toFixed(2);

            } else { // single item price
                obj.originalPrice = parseFloat(data.productDetails.price.retail.pricevalue.low).toFixed(2);
            }
        }
        _.each(masterdata, function(master, i){
            if (collection != undefined) {
                obj.master.name = master.productDetails.summary.name;
                obj.master.id = master.id;
            }
            obj.master.price = master.productDetails.price;

            if (master.Reviews) { // master ratings are separate from the ratings of child products
                if (master.Reviews.averageOverallRating) {
                    obj.master.rating = master.Reviews.averageOverallRating; // average customer rating
                    obj.master.ratingnum = master.Reviews.totalReviewCount; // number of reviews
                } else if (master.Reviews.perReviewWrapper) { // some items dont have average overall rating, but just an array of reviews
                    var val = 0;
                    // sum all review ratings together
                    _.each(master.Reviews.perReviewWrapper, function(review, idx) {
                           val += review.ratingValue;
                    });
                    // divide by number of reviews in array to get average
                    obj.master.rating = val/master.Reviews.perReviewWrapper.length;
                    // number of reviews in array
                    obj.master.ratingnum = master.Reviews.perReviewWrapper.length;
                } else { // no reviews in master Review object
                    obj.master.rating = 'none';
                    obj.master.ratingnum = 0;
                }
            } else { // if it does not have Review object
                obj.master.rating = 'none';
                obj.master.ratingnum = 0;
            }
        });


		// the philosophy - the colorwayid key mapping is used to figure out what sizes are available
		// for each color. the UPC key mapping is used to determine the search for the add to bag function.
		// i've made it mapped with upc number as the key in case it needs to be referenced


		// upc key mapping...
		// we need the output to be upcid, availability, colorwayid, color, size, sizeid
		_.each(data.upcs, function(elem, idx, list) {
            var label = 'none';
            if (obj.hasOwnProperty('sizemap')) {
                if (_.where(obj.sizemap, {sizeid: elem.upcDetails.sizeid})[0] != undefined) {
                    label = _.where(obj.sizemap, {sizeid: elem.upcDetails.sizeid})[0].sizenormal;
                }
            }

			key                  = elem.upcnumber;
			color 				 = _.indexBy(elem.upcDetails.attributes, 'name');
			color 				 = color.COLOR.values[0].value;
			tempObj              = { availability: elem.upcDetails.availability.available, 
								     colorwayid: elem.upcDetails.colorwayid, 
								     color: color,
								     sizeid: elem.upcDetails.sizeid,
								     //error checking for furniture, which do NOT have sizes
								     sizelabel: label,
								     upcnumber : key
								   };

			obj.upcmap[key]      = tempObj;
		});

		// colorwayid key mapping... 
		// selecting color dictates what sizes are available in that color
		_.each(obj.colormap, function(elem, idx, list) {
			key                  = elem.colorwayid
			tempArr              = _.where(obj.upcmap, {colorwayid: key});
			obj.colorwaymap[key] = tempArr;
		});
		

		return obj;
	}


    //methods used for custom pdp popup

    function positionChecker(arrayOfProducts, productid) {
        // this is the check what the position is of the array at hand
        for (var i = 0; i < arrayOfProducts.length; i++) {
            if ($(arrayOfProducts[i]).attr('productid') === productid.toString()) {
                // this is true then we find 
                return i + 1;
            }
        };

        
    }

    function rowBreakdown(arrayOfProducts, position, set) {
        // first you have to find what row it's in
        // second you have to find the end of the row

        var totalRows             = Math.ceil(arrayOfProducts.length / set),
            rowPosition           = Math.ceil(position / set),
            currentPosition       = rowPosition % set, // the position within the row 
            returnObj             = {};

        returnObj.totalRows       = totalRows;
        returnObj.rowPosition     = rowPosition;
        returnObj.currentPosition = currentPosition;

        return returnObj;

    }

	return {
		processData: processData,
        positionChecker: positionChecker,
        rowBreakdown: rowBreakdown
	}
} ) ();