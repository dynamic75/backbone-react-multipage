var ListView = Backbone.View.extend({
	currentPanel : 0,

	initialize: function() {
	    console.log('listview initialize()');
	    var self = this;

	    //event listener for when slider comes in 
	    grandCentral.on('sliderViewLoaded', function(ev) {
	    	console.log('sliderViewLoaded');
	    	self.sideArrowPositioner();
	    });

	    // click event to swap templates
	    $('#cview').on('click','.list-wrapper',function(ev) {
	        $('.list-cont, .list-wrapper').removeClass('selected');
	        $(this).addClass('selected');


	        // search the globally set app.status data to see if id exists

	        var newProductObj = _.where(app.status.currentCustomViewData.products, {id: $(this).data('productid') } );
	        //error checking here
	        if (newProductObj) {
	            grandCentral.trigger('listChanged',newProductObj);
	        } else {
	            console.log('there was an error, the id probably doesnt exist');
	            return;
	        }

	    });

	    $('#cview').on('click','.go-right',function(ev) {
	    	self.sideScrollAnimate('right');
	    });
	    $('#cview').on('click','.go-left',function(ev) {
	    	self.sideScrollAnimate('left');
	    });

	    self.sideScrollAnimate('set');

	},

	render: function(products) {
		// check if message is an error
		if (typeof products === "string" && products === "Sorry this product is not available.") {
			var templateString   = htmlpartials.listerror;
		} else {
			var templateString   = htmlpartials.listview;
		}
        if (products.length > 1) {
            var compiledTemplate = _.template(templateString);
            compiledTemplate = compiledTemplate({products: products});
            $('.list-view').html(compiledTemplate);
            $('.list-view, .go-right, .go-left').show();
        } else { // if products are only one hide the list view
            $('.list-view, .go-right, .go-left').hide();
        }

		
		var totalPanels       = Math.ceil($('.list-wrapper').length/4),
			totalWidth        = totalPanels * 960;

		$('.list-scrollable').width(totalWidth);
		this.sideArrowChecker(totalPanels);
	},

	sideScrollAnimate: function(direction) {
		var totalWidth    = $('.list-scrollable').width(),
			oneWidth      = $('.list-wrapper').width() + 14,
			onePanelWidth = oneWidth * 4,
			totalPanels   = Math.ceil($('.list-wrapper').length / 4),
			self          = this;

		if (direction === "right") {
			// console.log('right clicked!');
			if (totalPanels > self.currentPanel) {
				$('.go-right').show();
				self.currentPanel ++;
				TweenMax.to($(".list-scrollable"),1, {x: (onePanelWidth * -self.currentPanel), ease:Power3.easeOut});	
				// console.log('it just scrolled', self.currentPanel, totalPanels);
			} else {
				return;
			}
		}
		if (direction === "left") {
			if (self.currentPanel > 0) {
				$('.go-left').show();
				self.currentPanel --;
				TweenMax.to($(".list-scrollable"),1, {x: (onePanelWidth * -self.currentPanel), ease:Power3.easeOut });	
			} else {
				return;
			}
		}	
		if (direction === "set") {
			// console.log('tweenmax set');
			TweenMax.set($(".list-scrollable"), {x: 0 });
		}

		self.sideArrowChecker(totalPanels);
		
	},

	sideArrowChecker: function(totalPanels) {
		var self = this;

		if (self.currentPanel === 0) {
			// the first time hide the left arrow
			$('.go-left').hide();	
		} else {
			$('.go-left').show();	
		}
		if ((totalPanels-1) === self.currentPanel) {
			$('.go-right').hide();
		} else {
			$('.go-right').show();
		}
		
	},

	sideArrowPositioner: function() {
	 	var productViewHeight = $('.product-view').height(),
			listViewHeight    = $('.list-view').height(),
			arrowPosition     = productViewHeight + (listViewHeight/2) - 150 - 16;

		$('.go-right').css('top',arrowPosition);
		$('.go-left').css('top',arrowPosition);

        // list view will always have at least one item, so if less than 2 hide the arrows
        if ($('.list-view').find('.list-wrapper').size() < 2) {
            $('.go-right, .go-left').hide()
        }
	}
});