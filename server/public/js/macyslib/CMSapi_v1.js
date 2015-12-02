var CMSapi = (function(){

    var cmsCache = null;
    var marketingTiles = [];

    function storeCmsCall(arg){
        cmsCache = arg;
    }

    function getOriginalData(){
        return cmsCache;
    }

    function getCategoryEntries( category_key ){
        var answer = [];
        try {
            if (cmsCache[category_key]) answer = cmsCache[category_key].entries;
        } catch(e){}
        return answer;
    }


    function getMarketingTiles(){
        return marketingTiles;
    }

    function tilesExist(){
        var answer = false;
        if(marketingTiles.length > 0){
            answer = true;
        }
        return answer;
    }

    function formatMarketingTile(){
        // ok now we need to massage the data into a array for keith
        _.each(cmsCache, function(value, key, list){
            for (var i = 0; i < value.entries.length; i++) {
                marketingTiles.push({
                    category : key,
                    filename : value.entries[i].filename,
                    link : value.entries[i].link,
                    position : value.entries[i].position - 1, /* because marketing count the topgift tile */
                    trackingidentifier: 'marketingtile.' + value.entries[i].trackingidentifier
                });
            }
        });
    }

    function getSuppressedBrands(){
        var string = cmsCache.suppressed_brands_array.entries[0].data;
        var answer = null;
        try { answer = JSON.parse(string); } catch (e) {}
        return answer;
    }

    return {
        storeCmsCall : storeCmsCall,                    // author Eran
        getOriginalData : getOriginalData,              // author Eran
        getCategoryEntries : getCategoryEntries,        // author J.Davis

        // specific to marketing tiles
        formatMarketingTile : formatMarketingTile,      // author J.Davis
        getMarketingTiles : getMarketingTiles,          // author J.Davis
        tilesExist : tilesExist,                        // author J.Davis

        // specific to suppressed brands
        getSuppressedBrands : getSuppressedBrands       // author J.Davis
    }
})();