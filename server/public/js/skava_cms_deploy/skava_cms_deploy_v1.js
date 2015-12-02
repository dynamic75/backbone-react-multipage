// ----------->  IMPORTANT   paste in CMS project id here
var project_id =  112;
var passphrase = 'VGG';

// ----------->  IMPORTANT   comment out the correct field
var zdev__buildType = 'desktop';
//var zdev__buildType = 'tablet';
//var zdev__buildType = 'mobile';








// protect against IE console errors
try { console.log(' '); }
catch (e) {
    window.console = {};
    window.console.log = function(txt){};
    window.console.warn = function(txt){};
    window.console.error = function(txt){}
}

console.log('skava_cms_deploy_v1 - ', zdev__buildType.toUpperCase() );

var feed_dev = "http://cmsmacys.aws.af.cm/?service=feed_dev&noheader=1&project_id="+project_id+"&callback=cmsCallback";
var feed_preprod = "http://d345h07ts0fu2m.cloudfront.net/379/data"+project_id+"_preprod.json";
var feed_prod = "http://d345h07ts0fu2m.cloudfront.net/379/data"+project_id+".json";

var feed = feed_dev;
if (isProduction) { feed = feed_prod; } // holds true for preprod as well

$.ajax({
    type: 'GET',
    url: feed,
    jsonpCallback: 'cmsCallback',
    cache: false,
    dataType: "jsonp",
    success: function (result) {
        console.log('cms ajax call success for cms project_id ',project_id);
        window.cmsStatus = {};
        window.cmsStatus.cmsLoaded = true;
        window.cmsStatus.cmsData = result;
        window.cmsStatus.forBuild = zdev__buildType;
        window.cmsStatus.deployflag = 'false';
        afterCMScall(true);
    },
    error: function (xhr, status, strErr) {
        console.log('cms ajax call failed for cms project_id ',project_id);
        console.log('xhr ',xhr);
        console.log('status ',status);
        console.log('strErr ',strErr);
        afterCMScall(false);
    }
});


function afterCMScall( callSuccess ){

    //  set up defaults
    assetsDirectory = '';
    try { assetsDirectory = FILES_ROOT + 'ipad/'; } catch (e) { assetsDirectory = ''; }

    // override defaults if cms call is successful AND the switch is true
    if (callSuccess) {
        try {
            var zdev_deployconfig = cmsStatus.cmsData.categories.zdev_deployconfig.entries;
            console.log('zdev_deployconfig category found');
            for (var i = 0; i < zdev_deployconfig.length; i++) {
                if (zdev_deployconfig[i].forbuild == window.cmsStatus.forBuild) {
                    window.cmsStatus.deployflag = zdev_deployconfig[i].deployflag.toLowerCase().replace(/\s+/g, '') === 'true';
                    console.log('converting string '+zdev_deployconfig[i].deployflag+' to boolean '+ window.cmsStatus.deployflag);
                    window.cmsStatus.playhead = zdev_deployconfig[i].playhead;
                    window.cmsStatus.path = zdev_deployconfig[i].path;
                    window.cmsStatus.passphrase = zdev_deployconfig[i].passphrase;
                    window.cmsStatus.path2images = zdev_deployconfig[i].path;
                    window.cmsStatus.usehevronpools = zdev_deployconfig[i].usehevronpools.toLowerCase().replace(/\s+/g, '') === 'true';
                    window.cmsStatus.hevronpoolpath = zdev_deployconfig[i].hevronpoolpath;
                }
            }
        }
        catch (e) { console.log('zdev_deployconfig category is missing in cms'); }
        var tempString;
        if ( window.cmsStatus.deployflag === true && window.cmsStatus.passphrase == passphrase ) {
            try {
                var catname = 'zdev_' + window.cmsStatus.forBuild + 'builds';
                console.log('Searching for category ' + catname);
                var buildlist = cmsStatus.cmsData.categories[catname].entries;
                console.log(catname + ' found');
                try {
                    for (var j = 0; j < buildlist.length; j++) {
                        console.log('Searching for build number ' + window.cmsStatus.playhead);
                        if (buildlist[j].buildnumber == window.cmsStatus.playhead) {
                            console.log('Correct build found.');
                            window.cmsStatus.scriptfile = buildlist[j].scriptfile;
                            window.cmsStatus.cssfile = buildlist[j].cssfile;
                            // some hacky code but limited time available.  lets check for SIX more parts of css code
                            for (var k = 2; k < 8; k++) {
                                tempString = tryToFindExtraCSS( buildlist , window.cmsStatus.playhead+'-extracsspart'+k );
                                window.cmsStatus.cssfile += tempString;
                                tempString = tempString == '' ? 'not found' : 'found';
                                console.log('looking for extra css under '+window.cmsStatus.playhead+'-extracsspart'+k+' ... '+tempString );
                            }
                            break;
                        }
                    }
                }
                catch(e){ console.log('error looking through buildlist', buildlist); }
            }
            catch (e) { console.log('error looking for build'); }
        } else {
            console.log('aborting, passphrase mismatch or flag is false');
        }
    }




    var path;


    // inject build css

    if (window.cmsStatus.cssfile) {
        $('head').append('<style type="text/css">\n'+window.cmsStatus.cssfile+'\n</style>');
        afterCSSinject();
    } else {
        path = assetsDirectory+'prod/build0.css';
        console.log(path);
        // $.get(path, function(data){
        //     console.log('get success with '+path+'   data = ', data);
        //     $('head').append('<style type="text/css">\n'+data+'\n</style>');
        // });
        console.log('HERE =====>  ajax in css');
        $.ajax({
            url: path,
            type: "GET",
            dataType: "text",
            success: function(data) {
                //console.log('get success with '+path+' data = ', data);
                var el = $("head").length>0 ? $("head") : $('#finderContainer');
                el.append('<style type="text/css">\n'+data+'\n</style>');
                afterCSSinject()
            },
            error: function(xhr, status, error) {
                console.error("fail error injecting CSS in skava_cms_deploy", xhr, status, error);
                console.error("SKAVA IF THIS IS MCSTAGE, PLEASE CHECK THIS ON PREPROD");
            }
        });
    }


    function afterCSSinject() {
        // inject build js
        path = window.cmsStatus.scriptfile ? window.cmsStatus.scriptfile : assetsDirectory + 'prod/build0.js';
        console.log('JS path = ' + path);
        $.getScript(path, function (data, textStatus, jqxhr) {
            console.log(textStatus); // Success
            console.log(jqxhr.status); // 200
        }).fail(function (jqxhr, settings, exception) {
            console.error('$.getScript failed!!');
            console.warn('jqxhr ', jqxhr);
            console.warn('settings ', settings);
            console.warn('exception ', exception);
        });
    }



    function tryToFindExtraCSS( buildlist , searchString ){
        var result = '';
        for (var x = 0; x < buildlist.length; x++) {
            //console.log('...seaching counter = ', x);
            if (buildlist[x].buildnumber == searchString) {
                //console.log('...found it');
                result = buildlist[x].cssfile;
                break;
            }
        }
        //if (result=='') console.log('...not found');
        return result;
    }



}



