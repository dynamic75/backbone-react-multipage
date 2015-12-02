
rc.ServicesComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="services-content"> 
        <h2 className="title">The Macy&#39;s Shop at Home Experience</h2>
        <h3 className="subtitle">Explore thousands of colors, styles &amp; fabrics—just like you would in a
         showroom, but in the comfort of your own home. 
        </h3>

        <div className="row grid">
            <figure className="left">
                <img src={assetsDirectory+"images/services/services-1.jpg"} />
                <figcaption>Sign up for a free in-home consultation with one of our designers.</figcaption>
            </figure>
            <figure className="left">
                <img src={assetsDirectory+"images/services/services-2.jpg"} />
                <figcaption>Choose your window treatments with our expert guidance.</figcaption>
            </figure>
            <figure className="left">
                <img src={assetsDirectory+"images/services/services-3.jpg"} />
                <figcaption>Let our full-service team handle the measuring, delivery &amp; installation.</figcaption>
            </figure>
        </div>

        <div className="row expert-designers">
            <h4>EXPERT DESIGNERS</h4>
            <p>Our team of professionals will be by your side to guide you through the process. 
            </p>
            <p>
Macy’s Shop at Home designers understand the challenges &amp; the excitement of a decorating project. 
            </p>
            <p>
With their expertise &amp; product knowledge, Your Macy&#39;s Shop at Home designer will help you sort through
 the wide array of colors, textures &amp; new technologies available. Together, you’ll determine a style, a budget &amp;
  a time frame that suits your needs &amp; your lifestyle. 

            </p>
        </div>       
   
    </div>
        );
    }
});