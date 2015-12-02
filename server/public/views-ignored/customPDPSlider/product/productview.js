var ProductView = Backbone.View.extend({

	initialize: function() {
	    console.log('listview initialize()');
	    var self = this;

	    $('#cview').on('click','.stnly-swatch-outer-box', function(ev) {
	    	var colorwayid = $(this).data('colorwayid'),
	    	    image      = 

	    	    '<img class="productImage-img"'
	    	    +'src="http://slimages.macys.com/is/image/MCY/products/5/optimized/' 
	    	    + $(this).data('image-name')
	    	    +'?bgc=255,255,255&amp;wid=100&amp;qlt=90&amp;layer=comp&amp;' 
	    	    +'op_sharpen=0&amp;resMode=bicub&amp;op_usm=0.7,1.0,0.5,0&amp;fmt=jpeg&amp;wid=310">';
	    	    $(this).data('image-name');

	    	if ($(this).hasClass('swatch-selected')) {
	    		ev.preventDefault();
	    	} else {
	    		$('.stnly-swatch-outer-box').removeClass('swatch-selected');

	    		$('.stnly-colorName').find('.color').html($(this).data('stnly-colorname'));
	    		$(this).addClass('swatch-selected');

	    		// if there is no primary image, then we skip it over
	    		if ($(this).data('image-name') != 'none') {
	    			$('.productImage').html(image);
	    		} 

	    		self.sizeRenderer(app.status.currentproduct.colorwaymap[colorwayid]);

	    		self.addToBagButtonReset();
	    	}


	    });

	    $('#cview').on('change','.stnly-sizeSelector',function(ev) {
	    	self.addToBagButtonReset();
	    });

	    $('#cview').on('click','.addToBag-button', function(ev) {
	        if (!$(this).hasClass('disabled')) {
	            self.sendtoAddToBag($(this));
	        } 
	    });

	    $('#cview').on('click','.checkout-button',function(ev) {
	        if(!$(this).hasClass('checkout-button-disabled')) {
	            var win = window.open('http://www1.macys.com/bag/index.ognc', '_blank');
	            win.focus();
	        }
	    });

	    $('#cview').on('click','.addtolist-button',function(ev) {
	    	if(!$(this).hasClass('disabled')) {
	    		$(this).addClass('disabled');
	    		$('#cview').find('.messages').html('Added to list').addClass('show').addClass('black');
	    	}
	    });

	    $('#cview').on('click','.back-btn', function(ev) {
	        self.animations('close');
	    });

        //selecting additional image view
        $('#cview').on({
            'click': function(e) {
                self.selectImg(e);
            }
        }, '.product-additionalProductImage-img');

        //additional images scroller initial position
        self.position = 0;
        $('#cview').on({ //scroll action for additional images
            'click': function(e) {
                self.scrollMoreAddImg(e, self.position);
            }
        }, '.product-additionalProductImage-more');

	    grandCentral.on('productloaded', function(ev) {
	    	self.animations('open');
	    });

	    grandCentral.on('listChanged', function(newProductObj) {
	    	// send it in to repopulate the main product portion
	    	self.render(newProductObj[0]);
	    });

	    self.animations('set');

	},

	render: function(product) {
        var self = this;
		// haninging it over the window to access other places;
		app.status.currentproduct = product;

		// check if message is an error
		if (typeof product === "string" && product === "Sorry this product is not available.") {
			var templateString   = htmlpartials.producterror;
			// isProduct = false;
		} else {
			var templateString   = htmlpartials.productview;
			// error checking for swatch choices
			if (product.colormap[0].swatchimage === undefined) {
			    product.colormap[0].swatchimage = '';
			}
			// isProduct = true;
		}

		var templateString   = htmlpartials.productview;
		var compiledTemplate = _.template(templateString);
		compiledTemplate     = compiledTemplate({product: product});

//        console.log(product, 'product click from list view');

		$('.product-view').html(compiledTemplate);

		// default swatch action
		$('.stnly-swatch-outer-box').first().addClass('swatch-selected');
		var colorwayid       = $('.swatch-selected').data('colorwayid') || product.colormap[0].colorwayid;
		this.sizeRenderer(product.colorwaymap[colorwayid]);

		// add class selected to the product
		$('.product_' + product.id).addClass('selected');

        self.position = 0;

        if (app.skavaView.isIE()) {
        	$('.stnly-qtySelector, .stnly-sizeSelector').removeClass('isNotIe');
        }

    },

	addToBagButtonReset: function() {
		// reset the add to bag button
		$('.addToBag-button').text('Add to Bag').removeClass('disabled');
	},

	sizeRenderer: function(colorwayarr) {
//	    console.log('size renderer fired!', colorwayarr);
        if (colorwayarr.length == 0 || colorwayarr[0].sizeid == undefined) {
            $('.stnly-sizeHelper').hide();
        }
	    // position in array to map it to the number of products
	    var listposition= $('.list-view').find('.selected').data('position');


	    // indexing gets rid of any double that might exist
	    var indexed = _.indexBy(colorwayarr, 'sizelabel');

	        indexed = _.toArray(indexed);
	        // need to make sure the sizing is ordered correctly
	        indexed = _.sortBy(indexed, 'sizeid');


	    var templateString   = htmlpartials.productsize;
	    var compiledTemplate = _.template(templateString);


	    compiledTemplate = compiledTemplate({colorwayarr: indexed});
	    $('.stnly-sizeHelper').html(compiledTemplate);

	},

	animations: function(action) {
	    var windowWidth = $('#cview').width();
	    // action is in a string and takes in three different choices
	    if (typeof action != "string") {
	        console.log('animations() needs to have a string'); 
	        return;
	    }

	    if (action === 'close') {
	        // TweenMax.to($("#cview"),1,{x: -windowWidth, ease:Power3.easeOut});
	        $('#cview').remove();
	    } else if (action === 'open') {
	        // TweenMax.to($("#cview"),1,{x:0, ease:Power3.easeOut});
	        grandCentral.trigger('sliderViewLoaded');
	    } else if (action === 'set') {
	        // TweenMax.set($('#cview'),{x: -windowWidth});
	    }

	},

	sendtoAddToBag: function($el){
	    var fail = false;
	    var sku, 
	        size           = $('.stnly-sizeSelector').val() || "none",
	        listposition   = $('.list-view').find('.selected').data('position'), // position in array to map it to the number of products
	        color          = // error checking to see if colorway id is not available
	                         $('.swatch-selected').data('colorwayid') || 
	                         app.status.currentCustomViewData.products[listposition].colormap[0].colorwayid,
	        quantity       = $('.stnly-qtySelector').val(),
	        productObj,
	        upc; 
	        
	        if (size === "none") {
	            productObj = app.status.currentCustomViewData.products[listposition].colorwaymap[color];
	        } else {
	            productObj = _.where(app.status.currentCustomViewData.products[listposition].colorwaymap[color],{sizelabel: size});
	        }
	        upc            = productObj[0].upcnumber;

	    if(typeof color !== typeof undefined && color !== false){
	        if(color == ''){
	            alert('Please select a color.');
	            console.warn('ATB: NO color');
	            fail = true;
	        }
	    }
	
	    if(typeof size !== typeof undefined && size !== false){
	        if(size == ''){
	            alert('Please select a size.');
	            console.warn('ATB: NO size');
	            fail = true;
	        }
	    }
	
	    if(quantity == ''){
	        quantity=1;
	    }

	    if(!fail){
	        var ajaxData = {
	            "quantity" : quantity,
	            "upcnumber" : upc,
	            "showBag" : false
	            // "clientId" : '38zkncjb52yqehnghhqapx7u'
	        };

	    
	        console.log('ATB: ajaxData', ajaxData)


	        var httpMethod = "GET"
	        var contentType = "application/x-www-form-urlencoded";
	        var ajaxData = {"json": JSON.stringify(ajaxData)};
	        var requestHeaders = {};
	        var responseDataType = "jsonp";
	    

	        $.ajax({
	            type : httpMethod,
	            url : "http://stanley.macys.com/v2/shoppingbag/item",
	            dataType : responseDataType,
	            contentType : contentType,
	            headers : requestHeaders,
	            xhrFields : {"withCredentials": true},
	            data : ajaxData,
	            success : function(a,b,c){
	                console.log('HP: addToBag ->', a,b,c);
	                $el.text('checkout').addClass('disabled').removeClass('btn-red').addClass('btn-black').removeClass('addToBag-button').addClass('checkout-button');
	                $('.messages').html('Added to Bag').addClass('show').addClass('black');
	                $('.list-view').find('.selected').addClass('added');

	            },
	            error : function(a,b,c){
	                console.log('HP: addToBag ERROR ->', a, b, c);
	                $('.messages').html('<p class="qv_error">Sorry, there was an error. Please try again, or <a href="'+thisproduct.properties.pfeed_url+'" target="_blank">view the product page</a>.</p>').addClass('show').addClass('red');
	                $('<p class="qv_error">Sorry, there was an error. Please try again, or <a href="'+thisproduct.properties.pfeed_url+'" target="_blank">view the product page</a>.</p>').insertBefore($(el))
	            }
	        });
	    }
	},

    //when selecting additional image, replace the size in src and replace main image src
    selectImg: function(e) {
        var srcimg = e.target.src.replace(/wid=88/g, 'wid=310');
        $('.productImage-img').attr('src',srcimg);
        $(e.target).addClass('product-additionalProductImage-img-selected').siblings().removeClass('product-additionalProductImage-img-selected')
    },

    //additional images scroll if more than 3 images
    scrollMoreAddImg: function(e, position) {
        var self = this;
        var $target = $(e.target);
        var $scroller = $('#product-additionalProductImage-scroller');
        var count = $scroller.find('img').size();

        if ($target.hasClass('product-additionalProductImage-more-down')) { //scroll down and show back up arrow
            if (self.position < parseFloat(count-3) ) {
                self.position++;
                $('.product-additionalProductImage-more-up').show();
                TweenMax.to($scroller, 0.2, {css: {'top': '-' + parseFloat((128 * self.position)) + 'px'}});
            }
        } else { //scroll up, when reaches the top hide the up arrow
            self.position--;
            TweenMax.to($scroller, 0.2, {css: {'top': '-'+parseFloat(128*self.position)+'px'}});
            if (self.position == 0) {
                $('.product-additionalProductImage-more-up').hide();
            }
        }
    }


});