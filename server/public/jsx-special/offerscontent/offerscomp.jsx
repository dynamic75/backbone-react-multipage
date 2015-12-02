
rc.OffersComp = React.createClass({
    getInitialState:function(){
        return _.extend(app.status, {
        })
    }, 

    render:function(){
        console.log(this.constructor.displayName+' render()');
        
        return (    
    <div className="offers-content"> 
        <h2 className="title">Special Offers</h2>
        <h3 className="subtitle">Save on custom window treatments.</h3>        

        <div className="row specialoffer">
            <figure>
                <img className="left" src={assetsDirectory+"images/offers/offers-shading.jpg"} />
                <figcaption className="right">                        
                    <h4 className="itemname">Hunter Douglas</h4>
                    <strong>Free Literise<sup>&reg;</sup> Cordless <br />Operating System</strong>                     
                    <p className="description">With purchase of Silhouette<sup>&reg;</sup> window shadings from 12/8/15-1/30/16.</p>
                    <p className="legal">
Instant savings valid on qualifying purchases made between 12/8/15 - 1/30/16. A qualifying purchase is defined as a purchase
 of any of the product models set forth above. Offer excludes Nantucket<sup>&trade;</sup> window shadings, a collection of Silhouette&reg; window
  shadings. No minimum or maximum purchase required. Additional limitations may apply. Offers may not be combined. All rights
   reserved. All trademarks herein reserved by their respective corporations.
   </p>
                </figcaption>  
            </figure>
        </div> 

        <div className="row specialoffer">
            <figure>
                <img className="right" src={assetsDirectory+"images/offers/offers-drapery.jpg"} />
                <figcaption className="left">                        
                    <h4 className="itemname">Custom Drapery</h4>
                    <strong>25% OFF</strong>                     
                    <p className="description">Our top 25 drapery fabrics. Offer valid 12/8/15-2/29/16.</p>
                    <p className="legal">
Sale ends 2/29/16. Ask your designer for details. Not applicable to Simplicity by Design, Hunter Douglas, hardware,
 shipping/freight, installation or tax. Reg. &amp; orig. prices are offering prices and savings may not be based on actual sales.
  Some orig. prices not in effect during the past 90 days. Prices and merchandise may differ on macys.com.
   </p>
                </figcaption>  
            </figure>
        </div>    


    </div>
        );
    }
});