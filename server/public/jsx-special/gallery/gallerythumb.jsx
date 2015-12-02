

rc.GalleryThumb = React.createClass({

    componentDidMount: function(){
        this.setState({
            src: this.props.src,
            caption: this.props["data-caption"]
        })
    },

    clickHandler:function(){
       this.props.handler(this);
    },
    
    render:function(){       
        
        return (    
    <a className="gallery-thumb" onClick={this.clickHandler}> 
        <img src={this.props.src} alt={this.props["data-caption"]} width="200" height="225" />   
    </a>
        );
    }
}); 