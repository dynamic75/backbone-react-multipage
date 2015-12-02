rc.TxtColComponent = React.createClass({

	componentDidMount: function () {
        this.modalView = new ModalView();
    },

    clickHandler: function(e){
    	//console.log(e.target);
    	this.modalView.open("Hello World!");
    	//console.log(this.modalView)
    }, 
	
	render: function(){

		return (
	<div className="row txtCols">		
		<div className="col col1">
			<h3>Get <strong>Inspired</strong></h3>
			<p>Your Macy’s Shop at Home designer will assist &amp; guide you through the experience, helping you to find a style
			 for your space that you’ll love for years to come.</p>
		</div>
		<div className="col col2">
			<h3>Let Us <strong>Do the work</strong></h3>
			<p>Once you’ve made your selections, simply relax while we handle the measuring, ordering & installation. Macy&#39;s
			 Shop at Home assures quality and your complete satisfaction.</p>

		</div>
		<div className="col col3">
			<h3>Enjoy <strong>Your space</strong></h3>
			<p>When your project is complete, prepare yourself for compliments and years of enjoyment.</p>
		</div>

		<div className="row center">
			<em>Learn more about Macys decorating services <a className="watchvideo" data-track="video.home" onClick={this.clickHandler}>watch the video</a></em>
		</div>
	</div>
		);
	}

})