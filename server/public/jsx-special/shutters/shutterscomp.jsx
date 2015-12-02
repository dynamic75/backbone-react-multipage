
rc.ShuttersComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="blinds-content"> 
        <h2 className="title">Hunter Douglas Custom Shutter Collection</h2>
        <h3 className="subtitle">Elegant shutters frame your windows with panache.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/shutters/shutters-1.jpg"} />
                <figcaption>Heritance<sup>®</sup> hardwood shutters</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shutters/shutters-2.jpg"} />
                <figcaption>NewStyle<sup>®</sup> hybrid shutters</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/shutters/shutters-3.jpg"} />
                <figcaption>Palm Beach<sup>™</sup> polysatin shutters</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});