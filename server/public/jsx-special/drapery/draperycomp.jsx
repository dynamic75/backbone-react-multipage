

rc.DraperyComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="drapery-content"> 
        <h2 className="title">Custom Drapery</h2>
        <h3 className="subtitle">Dress up your space &amp; create a mood with one-of-a-kind window dressings.</h3>
        <div className="row grid">
            <figure>
                <img src={assetsDirectory+"images/drapery/drapery-1.jpg"} />
                <figcaption>drapery</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/drapery/drapery-2.jpg"} />
                <figcaption>valances &amp; cornices</figcaption>
            </figure>
            <figure>
                <img src={assetsDirectory+"images/drapery/drapery-3.jpg"} />
                <figcaption>fabric shades</figcaption>
            </figure>
        </div>
   
    </div>
        );
    }
});