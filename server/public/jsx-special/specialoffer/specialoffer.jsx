
rc.SpecialOfferComponent = React.createClass({

	render: function(){
		return (
			
	<figure className={this.props.figureClass}>
		<a href={this.props.config.learnmore}><img src={this.props.config.imgsrc} data-track={this.props.config.track} /></a>
		<figcaption>						
			<h4 className="itemname">{this.props.config.itemname} <strong>{this.props.config.savings}</strong></h4>						
			<p className="description">{this.props.config.description}{}
				<a className="learnmore" href={this.props.config.learnmore} data-track={this.props.config.track}>learn more</a>
			</p>
		</figcaption>					
	</figure>
	
		);
	}	
});