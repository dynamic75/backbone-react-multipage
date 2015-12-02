

rc.GalleryComp = React.createClass({
    getInitialState:function(){
        return  {
            mainImage: assetsDirectory+"images/gallery/m-hybridshutters.jpg",
            caption: "hunter douglas new style<sup>®</sup> hybrid shutters"                      
        }
    },

    componentDidMount: function(){
        //window.scrollTo(0,0);
    }, 

    escapeHTML: function(string){
        var cleanString = jQuery.parseHTML(string);
        return cleanString.join("");
    },

    clickHandler: function(thumb){        
        var new_src = thumb.state.src.replace("t-", "m-");
        var new_caption = thumb.state.caption;
        this.setState({
            mainImage: new_src,
            caption: new_caption
        });
        //window.scrollTo(0,0);
    },

    render:function(){        
       
        return (    
    <div className="gallery-content">
        <figure>
            <div className="gallery-header">
                <div className="headline">Idea Gallery</div>
                <div className="copy">Get inspired & think big. Enlarge the images by clicking on the boxes below.</div>
            </div>
            <img className="main-image" ref="mainImage" src={this.state.mainImage} width="648" height="385" />
            <figcaption ref="captionContainer" dangerouslySetInnerHTML={{__html: this.state.caption}}></figcaption>
        </figure>
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-hybridshutters.jpg"} data-caption="hunter douglas new style<sup>®</sup> hybrid shutters" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-woodblinds.jpg"} data-caption="HUNTER DOUGLAS PARKLAND<sup>™</sup> WOOD BLINDS" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-modernromanshades.jpg"} data-caption="HUNTER DOUGLAS VIGNETTE<sup>®</sup> MODERN ROMAN SHADES" />

        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-sheers.jpg"} data-caption="HUNTER DOUGLAS Luminette<sup>®</sup> privacy sheers" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-modernromanshades2.jpg"} data-caption="HUNTER DOUGLAS vigNETTE<sup>®</sup> modern roman shades" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-softshades.jpg"} data-caption="HUNTER DOUGLAS solera<sup>®</sup> soft shades" />

        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-motorization.jpg"} data-caption="HUNTER DOUGLAS specialty shapes skylights" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-glidingpanels.jpg"} data-caption="HUNTER DOUGLAS skykine<sup>®</sup> gliding window panels" />
        <rc.GalleryThumb handler={this.clickHandler} src={assetsDirectory+"images/gallery/t-fabricshades.jpg"} data-caption="custom fabric shades" />
   
    </div>
        );
    }
});