var BBRalphLaurenConverter = ( function() {

	var ralphData;
	var ralphArray;

	function parseRalphaLaurenData( data ) {
		
		ralphData = {};
		ralphArray = [];

		var i = 0;
		while ( i < data.length ) {
			var o = {};
			o.newname = data[ i ][ "file Name" ].toUpperCase() + ".jpg";
			o.sequenceIndex = data[ i ][ "Position on Comp" ];
			o.index = i;
			o.productId = data[ i ][ "Web ID" ];
			ralphData[ data[ i ][ "Web ID" ] ] = o;
			ralphArray.push( o );
			i++;
		}
	}

	function getData() {
		return ralphData;
	}

	function getArray() {
		return ralphArray;
	}
	// table of contents
	return {
		parseRalphaLaurenData: parseRalphaLaurenData,	// Keith
		getData: getData,								// Keith
		getArray: getArray
	};

} )();