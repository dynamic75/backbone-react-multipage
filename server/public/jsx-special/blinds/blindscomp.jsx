
rc.BlindsComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="blinds-content"> 
        <h2 className="title">Hunter Douglas Blinds</h2>
        <h3 className="subtitle">See your space differently with custom blinds to frame your view.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-1.jpg"} />
                <figcaption>Parkland<sup>&trade;</sup><br /> Wood Blinds</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-2.jpg"} />
                <figcaption>Everwood<sup>&reg;</sup> alternative wood</figcaption>
            </figure>
            <figure className="left">
                <img src={assetsDirectory+"images/blinds/blinds-3.jpg"} />
                <figcaption>Vertical blinds</figcaption>
            </figure>
        </div>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-4.jpg"} />
                <figcaption>Skyline<sup>&reg;</sup> gliding window panels</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-5.jpg"} />
                <figcaption>MODERN PRECIOUS METALS<sup>&reg;</sup></figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/blinds/blinds-6.jpg"} />
                <figcaption>NATURAL ELEMENTS<sup>&trade;</sup> COLLECTION </figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});