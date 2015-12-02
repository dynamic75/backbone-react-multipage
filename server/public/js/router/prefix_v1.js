

/*

prefixer was introduced to solve IE8,   please REMOVE this when we no longer support IE8

iframe errors with Backbone, we found the following

- in order for the iFrame resize technique that Khurram Khan set up the document.domain must be set
- when document.domain is set in IE8 it crashed Backbone
- document.domain must be set before Backbone is started


*/

(function(){



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




    

    // test for ie8
    var uaString = navigator.userAgent.toLowerCase();
    if (  (uaString.indexOf('msie') != -1)  && (parseInt(uaString.split('msie')[1])==8)  ) {
        console.log('ITS IE8 ... delaying');
        var millisecondsToLockupBrowser = 800;
        var t = new Date().getTime(); while (new Date().getTime() < t + millisecondsToLockupBrowser);
        console.log('... delay complete');
        setDocumentDomain();
    } else {
        //console.log('ITS NOT IE8');
        setDocumentDomain();
    }
    // this sets the document domain so we can modify the parent frame
    function setDocumentDomain() {
        console.log('setDocumentDomain()');
        if ( window.location.host.indexOf( "atfingertips.com" ) > 0 ) document.domain = "atfingertips.com";
        if ( isProduction ) { document.domain = "macys.com"; }
    }



})();



