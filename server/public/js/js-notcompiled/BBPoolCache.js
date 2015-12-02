var BBPoolCache = ( function() {
	var cache = {};

	function storePoolByName( poolArray, name ) {
		cache[ name ] = poolArray;
	}

	function getPoolByName( name ) {
		var poolArray = -1;
		if ( cache[ name ]  ) {
			poolArray = cache[ name ];
		}
		return poolArray;
	}

    function getAllPoolNames(){
        return _.keys(cache);
    }

    function returnCache() {
		return cache;
    }

	// table of contents
	return {
		returnCache: returnCache,			// Keith
		storePoolByName: storePoolByName,   // Keith
		getPoolByName: getPoolByName,       // Keith
        getAllPoolNames : getAllPoolNames   // JDavis
	};



} )();

