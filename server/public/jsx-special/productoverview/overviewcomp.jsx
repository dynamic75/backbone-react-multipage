
rc.OverviewComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="overview-content"> 
        <h2 className="title">Custom Window Treatments</h2>
        <h3 className="subtitle">Cultivate your unique perspective with custom window treatments & more.</h3>        

        <div className="row overviewgrid grid">
            <figure>
                <a href="#/blinds" data-track="blinds"><img src={assetsDirectory+"images/overview/wood-blinds.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="blinds" href="#/blinds">blinds</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/shades" data-track="shades"><img src={assetsDirectory+"images/overview/window-shadings.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="shades" href="#/shades">shades</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/shutters" data-track="shutters"><img src={assetsDirectory+"images/overview/hardwood-shutters.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="shutters" href="#/shutters">shutters</a>
                </figcaption>
            </figure>
        </div>
        <div className="row overviewgrid grid">
            <figure>
                <a href="#/motorization" data-track="motorization"><img src={assetsDirectory+"images/overview/scene-controller.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="motorization" href="#/motorization">powerview<sup>&trade;</sup><br />motorization</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/specialtyshapes" data-track="specialtyshapes"><img src={assetsDirectory+"images/overview/hybrid-shutters.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="specialtyshapes" href="#/specialtyshapes">specialty shapes</a>
                </figcaption>
            </figure>
            <figure>
                <a href="#/drapery" data-track="customdrapery"><img src={assetsDirectory+"images/overview/custom-drapery.jpg"} /></a>
                <figcaption>
                    <a className="goto" data-track="customdrapery" href="#/drapery">custom drapery</a>
                </figcaption>
            </figure>
        </div>
        <rc.AdditionalServices />        
    </div>
        );
    }
});