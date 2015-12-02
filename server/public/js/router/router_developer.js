







// ROUTER INITIALIZE

routerSetupConfig.initialize = function() {
    console.log('router initialize()');
    this.status.currentPage = this.status.lastPage = this.status.currentRoute = null;


    // Permanent items as react components    
    React.render(
        React.createElement( rc.Nav ),
        document.getElementById('navcontainer')
    );
    React.render(
        React.createElement( rc.loader ),
        document.getElementById('loadercontainer')
    );

    this.skavaView = new SkavaView();

};




// ROUTER ROUTES

routerSetupConfig.routes =  {

    // home page route uses a react component as a page
    'home(?*path)': function(f, q){ this.routeTunnel('react', 'home', rc.HomePageComponent, f, q) },

    // product overview page 
    'productoverview(?*path)': function(f, q){ this.routeTunnel('react', 'productoverview', rc.ProductOverview, f, q) },

    // offers page 
    'offers(?*path)': function(f, q){ this.routeTunnel('react', 'offers', rc.Offers, f, q) },

    // services page 
    'services(?*path)': function(f, q){ this.routeTunnel('react', 'services', rc.Services, f, q) },

    // blinds  page 
    'blinds(?*path)': function(f, q){ this.routeTunnel('react', 'blinds', rc.Blinds, f, q) },

    // shades  page 
    'shades(?*path)': function(f, q){ this.routeTunnel('react', 'shades', rc.Shades, f, q) },

    // shutters  page 
    'shutters(?*path)': function(f, q){ this.routeTunnel('react', 'shutters', rc.Shutters, f, q) },

    // motorization  page 
    'motorization(?*path)': function(f, q){ this.routeTunnel('react', 'motorization', rc.Motorization, f, q) },

    // specialtyshapes  page 
    'specialtyshapes(?*path)': function(f, q){ this.routeTunnel('react', 'specialtyshapes', rc.Specialtyshapes, f, q) },

    // drapery  page 
    'drapery(?*path)': function(f, q){ this.routeTunnel('react', 'drapery', rc.Drapery, f, q) },

    // gallery  page 
    'gallery(?*path)': function(f, q){ this.routeTunnel('react', 'gallery', rc.Gallery, f, q) },




    '*badroute': function(){ this.navigate('#/home', {trigger: true}); }
    // for more information on routing try reading http://mrbool.com/backbone-js-router/28001

};






// ROUTER pre

routerSetupConfig.prePageChange =  function(){
    // any code that must happen before every page change ... place here

};





//  Because all the initialize()  functions occur very early before app.status has values like currentPage
//  we need a function to fire once during the start up and after app.status has populated

routerSetupConfig.appStatusNowReady =  function(){


    // instanciate auto track found in macyslib / AutoTracker.js
    // this may be breaking ie8
    this.autotracker = new AutoTracker({
        prefix:'ca-so-',            //     ca-so-    OR   ca-so-mobile-    OR    ca-so-ipad-
        site : 'shopathome'         //  put the project name
    });

};


