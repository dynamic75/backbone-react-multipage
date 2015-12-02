

rc.Carousel = React.createClass({

	componentDidMount: function () {
		$("#carousel").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: ".slick-prev",
			nextArrow: ".slick-next"
		});
	},	
  
	render:function() {

		return (
		<div className="c-wrapper">	
			<a className="slick-prev arrow" data-track="carousel.left.arrow"><img src={assetsDirectory+"images/carousel/arrow-left.png"} /></a>
			<a className="slick-next arrow" data-track="carousel.right.arrow"><img src={assetsDirectory+"images/carousel/arrow-right.png"} /></a>
			<img src={assetsDirectory+"images/custom-decor.png"} className="custom-decor-button" />
			<div id="carousel">		
				<div><img src={assetsDirectory+"images/carousel/slide-1.jpg"} /></div>
				<div><img src={assetsDirectory+"images/carousel/slide-2.jpg"} /></div>
				<div><img src={assetsDirectory+"images/carousel/slide-3.jpg"} /></div>
			</div>
		</div>

		);
	}

});