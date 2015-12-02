


// protect against IE console errors
try {
    console.log(' ');
}
catch (e) {
    window.console = {};
    window.console.log = function(txt){};
    window.console.warn = function(txt){};
    window.console.error = function(txt){}
}


// assetsDirectory will be empty locally but when on staging it will reflect the FILES_ROOT + /ipad/
// the following piece of code injects this into every html partial

_.each(htmlpartials, function( value, key, obj ){
    obj[key] = obj[key].replace(/randomDirectory\/images/g, SiteConfig.assetsDirectory+'images');
});

var Router = Backbone.Router.extend( routerSetupConfig );
$(document).ready(function() {

    $('#finderContainer').replaceWith( htmlpartials.structure );

    window.app = new Router;
    Backbone.history.start();


    // this will maintain highlight state in the nav
    onRouteEvent();
    app.on('route', onRouteEvent);
    function onRouteEvent(){
        //app.navView.updateNavActive();
    }


});

