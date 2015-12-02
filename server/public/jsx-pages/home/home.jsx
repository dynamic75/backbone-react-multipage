
rc.HomePageComponent = React.createClass({

    getInitialState:function(){
        return _.extend(app.status, {
        })
    },
    

    render:function(){
        console.log(this.constructor.displayName+' render()');
        //<rc.MainContent id={"homepage"} midComponent={<rc.Carousel />} sideComponent={<rc.FormComponent />} />
        //<rc.TxtColComponent />
        //         
        /*
        <rc.MainContent id={"homepage"} midComponent={<rc.Carousel />} sideComponent={<rc.FormComponent />} />
        <rc.TxtColComponent />
        <div className="row specialoffer">
            <h3 className="center title">Special Offers</h3>

            <rc.SpecialOfferComponent figureClass="narrow" config={SiteConfig.offers.offer2} />

            <rc.SpecialOfferComponent figureClass="wide" config={SiteConfig.offers.offer1} />
        </div>
        <rc.GalleryComponent />
        */

        return (    
    <div className="content-wrapper">    
        <rc.MainContent id={"homepage"} midComponent={<rc.Carousel />} sideComponent={<rc.FormComponent />} />
        <rc.TxtColComponent />
        <div className="row specialoffer">
            <h3 className="center title">Special Offers</h3>

            <rc.SpecialOfferComponent figureClass="narrow" config={SiteConfig.offers.offer2} />

            <rc.SpecialOfferComponent figureClass="wide" config={SiteConfig.offers.offer1} />
        </div>
        <rc.GalleryComponent />
    </div>
        );
    }
});