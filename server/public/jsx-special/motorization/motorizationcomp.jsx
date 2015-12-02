
rc.MotorizationComp = React.createClass({
    getInitialState:function(){
        // video player --- it's still in backbone
        this.videoview = new VideoView();

        return _.extend(app.status, {
        })
    },

    componentDidMount: function () {
        var self = this;

        this.videoview.render('#videoFrame');
        this.videoview.buildVideo( "4640246893001" );
    },

    clickVideo: function() {
        //alert('click');
        //$("#videoFrame").find(">:first-child").trigger('click');
        //this.player.playVideo();

        var iframeTag = document.querySelector("iframe"),
        win = iframeTag.contentWindow;

        win.postMessage("playVideo","http://c.brightcove.com");
    },

    render:function(){
        console.log(this.constructor.displayName+' render()');
        // <iframe id="videoFrame" data-track="video.motorization" width="560" height="315" src="https://www.youtube.com/embed/sdSG2-lc_MA" frameborder="0" allowfullscreen></iframe>

        // <figure>
        //     <figcaption><a className="goto" id="playVideo" onClick={this.clickVideo}>watch the video</a></figcaption>
        // </figure>


        return (    
    <div className="motorization-content"> 
        <h2 className="title">Hunter Douglas PowerView<sup>&trade;</sup> Motorization</h2>
        <h3 className="subtitle">Intelligent shades that simplify your life.</h3>

        <div className="row">
            <div id="videoFrame" data-track="video.motorization"></div>
        </div>
   
    </div>
        );
    }
});