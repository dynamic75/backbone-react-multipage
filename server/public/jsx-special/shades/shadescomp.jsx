
rc.ShadesComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="shades-content"> 
        <h2 className="title">Hunter Douglas Shades</h2>
        <h3 className="subtitle">From discreet to dramatic, stylish shades enhance every room.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shades/shades-1.jpg"} />
                <figcaption>Silhouette<sup>&reg;</sup> window shadings</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-2.jpg"} />
                <figcaption>Duette<sup>&reg;</sup> honeycomb shades</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-3.jpg"} />
                <figcaption>Pirouette<sup>&reg;</sup> window shadings</figcaption>
            </figure>
        </div>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shades/shades-4.jpg"} />
                <figcaption>Luminette<sup>&reg;</sup> privacy sheers</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-5.jpg"} />
                <figcaption>Vignette<sup>&reg;</sup> modern Roman shades</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-6.jpg"} />
                <figcaption>Solera<sup>&reg;</sup> soft shades</figcaption>
            </figure>
        </div>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shades/shades-7.jpg"} />
                <figcaption>POWERVIEW<sup>&trade;</sup> MOTORIZATION</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-8.jpg"} />
                <figcaption>Provenance<sup>&reg;</sup> woven wood shades</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shades/shades-9.jpg"} />
                <figcaption>Design Studio<sup>&trade;</sup> Roman shades</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});