
rc.GalleryComponent = React.createClass({
	
	render: function(){
		return (
	<div className="row gallerycomponent">
		<h3 className="title center">Need inspiration? <a href="#/gallery" data-track="visitourgallery">visit our gallery</a></h3>
		<a href="#/shutters" className="gallery-link" data-track="shutters" id="shutters"></a>
		<a href="#/blinds" className="gallery-link" data-track="blinds" id="blinds"></a>
		<a href="#/shades" className="gallery-link" data-track="shades" id="shades"></a>
		<img src={assetsDirectory+"images/gallery-row.jpg"} className="backImage" />
	</div>
		);
	}
})