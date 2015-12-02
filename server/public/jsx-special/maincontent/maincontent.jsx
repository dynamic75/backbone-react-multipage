rc.MainContent = React.createClass({

    componentDidMount: function () {
        window.setTimeout(function(){
                 //grandCentral.trigger('resizePage');     
        },500 )          
    },
	
	render: function(){
		return (

<div id={this.props.id} className="main-content">
    <div className="row">
        <div className="col col-left">
            {this.props.midComponent}
        </div>    
        <div className="col col-right">
            {this.props.sideComponent}
        </div>
    </div>
</div> 

		);
	}

});
