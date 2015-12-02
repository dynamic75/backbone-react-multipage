
rc.SpecialtyshapesComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="specialtyshapes-content"> 
        <h2 className="title">Hunter Douglas Specialty Shapes</h2>
        <h3 className="subtitle">Discover specialty shapes to suit unique windows throughout your home.</h3>

        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/specialtyshapes/specialtyshapes-1.jpg"} />
                <figcaption>skylights</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/specialtyshapes/specialtyshapes-2.jpg"} />
                <figcaption>arches</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/specialtyshapes/specialtyshapes-3.jpg"} />
                <figcaption>triangles</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});