
/*
	modeled from code at http://www.jacklmoore.com/notes/jquery-modal-tutorial/
*/

var ModalView = Backbone.View.extend({
		
		initialize: function(){
			var self = this;
			this.videoview = new VideoView();

			this.render();

			$( "body" ).off( 'click touchstart', '#overlay' ).on( 'click touchstart', '#overlay', {}, function( event ){
				event.preventDefault();
				self.close();
			});

			// destroy the modal on route change or we get multiple
			grandCentral.on("routechange", function() {
				if ( app.status.currentPage !== "home" ) {
					self.$el.empty();
				}
			});
		},


		render: function(){
			this.$el = this.$el
				.attr({
					id: "modalContainer",
					style: "display: none"
				})
				.html(htmlpartials.modal);
			
			$(document.body).append(this.$el);
			this.videoview.render( ".video" );

			this.$modal = this.$el.find("#modal");
			this.$modal_content = this.$el.find("#modal_content");			
			this.$closeBtn = this.$el.find("#modal_close");

			
					
			// set close handler, IE8 does not support the native bind method, switching to jquery's bind.
			//				
			this.$closeBtn.off().on("click", this.close.bind(this));
		},

		center: function () {
			var top, left;

			

			var $theWindow = ( app.skavaView.inIframe() ) ? $( parent.window ) : $( window );

			top = Math.max( $theWindow.height() - this.$modal.outerHeight() , 0) / 2;
			left = Math.max( $(window).width() - this.$modal.outerWidth(), 0) / 2;

			var headerHeight = ( app.skavaView.inIframe() ) ? 210 : 0;
			this.$modal.css( {
				top: ( ( $theWindow.scrollTop() + top ) - ( headerHeight ) ),
				left: left + $theWindow .scrollLeft()
			} );
		},


		open: function(message){
			// update content with message
			//this.$modal_content.html(message);
			

			this.$el.show();
			// hard code the videoid for now

			// Thalia video id for testing
			// 3967004438001

			// Shop at home video id
			// 4628369816001
			this.videoview.buildVideo( "4628369816001" );
			this.center();
		},

		close: function(){
			//this.$modal_content.html("");
			this.$el.hide();
			this.videoview.close();
		},


		processRouteChange: function(){

		}



})