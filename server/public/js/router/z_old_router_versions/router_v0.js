
/*

Router Version 0
Author: JDavis

This version contains the following features
- equivalent of processParams from KK framework, on the view its called processRouteChange()
- preRouting ability

Still To Do
- build.js and the switcher between CMS and skava
- we need sto switch paths for amazon path randomizer, maybe app.renderHTMLpartial()
- build a macys loader
- examine staging, testing for skava iPad.html injection
- image preloaded so we don’t render html before an img has loaded


*/






var grandCentral = _.extend({}, Backbone.Events);


/*
    - trigger all app wide events through grand central
    - will work when communicating from  one view to another

    grandCentral.trigger('pleaseTurnOffTheTv');

    grandCentral.on('pleaseTurnOffTheTv', function(){
        //
    });

*/



var Router = Backbone.Router.extend({


    status : {
        currentPage : '',
        lastPage : '',
        currentRoute : '',
        currentFragsArray : [],
        currentQueryString : ''
        // app.status is for app wide vars (this may include data returned from ajax)
        // for page level vars, please store in the view for that page. Example this.homeView.myvar = 12;
    },


    initialize: function  () {
        console.log('router initialize()');
        this.status.currentPage = this.status.lastPage = this.status.currentRoute = null;
        $('body').html(htmlpartials.structure);

        // the following views will self render on init
        this.headerView = new HeaderView();
        this.navView = new NavView();
        this.loaderView = new LoaderView();


        // the following views are pages and will only render on a route, so when adding pages add here
        this.homeView = new HomeView();
        this.thronesView = new ThronesView();
        this.walkingView = new WalkingView();

    },


    routes: {
        '(?*path)': function(f, q){ this.routeTunnel('home', this.homeView, f, q) },
        'gameofthrones(/*path)': function(f, q){ this.routeTunnel('gameofthrones', this.thronesView, f, q) },
        'walkingdead(/*path)': function(f, q){ this.routeTunnel('walkingdead', this.walkingView, f, q) },
        // insert new routes here
        //
        // end insert new routes
        '*badroute': function(){ this.navigate('#', {trigger: true}); }
        // for more information on routing try reading http://mrbool.com/backbone-js-router/28001
    },

    routeTunnel: function(currentPage, view, f, q){
        // fix a bug where the querystring ends up in frags, its rare and happens when URL is '#?aaa=555' or '#/?aaa=555'
        if ( currentPage == 'home' && f && !q ) { q = f; f= null; }

        // keep app.status up-to-date !
        var pageChanged = false;
        if ( this.status.currentPage != currentPage ) {
            pageChanged = true;
            this.status.lastPage = this.status.currentPage;
            this.status.currentPage = currentPage;
        }
        this.status.currentRoute = Backbone.history.fragment;
        this.status.currentFragsArray =  f ? f.split('/') : [];
        this.status.currentQueryString = q;

        // track routing on the console
        if (pageChanged) { console.log('\n-- new route (new page)'); } else { console.log('\n-- new route (hashchange only)'); }
        console.log('app.status.currentPage='+this.status.currentPage +
            '\napp.status.lastPage='+this.status.lastPage +
            '\napp.status.currentRoute='+this.status.currentRoute +
            '\napp.status.currentFragsArray='+JSON.stringify(this.status.currentFragsArray) +
            '\napp.status.currentQueryString='+this.status.currentQueryString
        );

        //
        if (pageChanged) {
            this.preRouting();
            view.render();
            view.processRouteChange();
        }else {
            view.processRouteChange();
        }
    },


    preRouting : function(){
        // any code that must happen before every page change, place here
        console.log('preRouting()');
    }



});



$(document).ready(function() {


    window.app = new Router;
    Backbone.history.start();


    // this will maintain highlight state in the nav
    onRouteEvent();
    app.on('route', onRouteEvent);
    function onRouteEvent(){
        app.navView.updateNavActive();
    }


});

