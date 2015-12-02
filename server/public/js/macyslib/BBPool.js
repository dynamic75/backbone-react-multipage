var BBPool = ( function() {

	function processData( data ) {
		//console.log( data );
		var poolData = [];
		if ( !data.entries ) data.entries = [];
		console.log( data, " DATA FROM SKAVA");
		if( data.entries.length ) {
			for( var i=0; i<data.entries.length; i++){
				var entry = {};
				entry.pfeed_priceforfilters = parseFloat(data.entries[i].properties.pfeed_priceforfilters);
				//entry.imageWidth = imageWidth;
				// LETS FIX THIS SOMEWHERE PLEASE
				entry.image_fullImage = data.entries[i].fileUrl;
				entry.pfeed_url = data.entries[i].properties.pfeed_url;
				entry.entryId = data.entries[i].entryId;
				entry.pfeed_brand = data.entries[i].properties.pfeed_brand;

				if(data.entries[i].properties.pfeed_id) {
					entry.pfeed_id = data.entries[i].properties.pfeed_id;
				}

				entry.mostVoted = false;
				
				entry.pfeed_productgroup = data.entries[i].properties.pfeed_productgroup;
				entry.pfeed_price1 = data.entries[i].properties.pfeed_price1;
				entry.pfeed_price2 = data.entries[i].properties.pfeed_price2;
				entry.pfeed_price3 = data.entries[i].properties.pfeed_price3;
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				entry.label = data.entries[i].properties.pfeed_name;
				entry.title = data.entries[i].title;
				entry.pfeed_description = data.entries[i].properties.pfeed_longdescription;
				entry.pfeed_availability = data.entries[i].properties.pfeed_availability;
				if ( data.entries[i].properties.pfeed_bvavgrating ) {
					entry.pfeed_bvavgrating = parseFloat( data.entries[i].properties.pfeed_bvavgrating );
				} else {
					entry.pfeed_bvavgrating = 0;
				}
				entry.pfeed_bvnumreviews = data.entries[i].properties.pfeed_bvnumreviews;
			
				entry.pfeed_name = data.entries[i].properties.pfeed_name;
				//entry.votes = Math.floor(Math.random()*255);
				//entry.pfeed_priceforfilters = parseFloat( data.entries[i].properties.pfeed_priceforfilters );

				var price = parseFloat( data.entries[i].properties.pfeed_priceforfilters );
				if ( isNaN( price )) {
					price = 0;
				}

				entry.pfeed_priceforfilters = parseFloat( price );
				//var isItInList = BBLovedList.checkMyLovedListForEntryId( entry.entryId );
				entry.inVoteList = false;
				//entry.votedOn = isItInList;

				// hook up votes to skava votes here
				entry.votes = 0;
				if (data.entryStats) {
					if (data.entryStats[i]) {
						if( data.entryStats[i].numLikes !== null ) {
							entry.votes = data.entryStats[i].numLikes;
						} else {
							entry.votes = 0;
						}
					}
				}

				entry.insertIndex = i;
				
				poolData.push( entry );
			}
		}
		return poolData;
	}

	function changeVoteData ( entryId, data ) {
		var entry = _.where( data , { entryId: entryId });
		entry[0].votedOn = true;
		entry[0].votes += 1;
		return entry[0];
	}

	function changeData ( entryId, data ) {
		var entry = _.where( data , { entryId: entryId } );
		
		entry[ 0 ].votedOn = true;
		entry[ 0 ].votes += 1;

		var o = {};
		o.data = data;
		o.entry = entry[0];
		return o;
	}

	function changeVoteDataRemoveVote ( entryId ) {
		//var entry = _.where( finder.currentPage.data, { entryId: entryId });
		//entry[0].votedOn = false;
		//return entry[0];
	}

	function processTopTenData( data ) {
		var poolData = [];
		if ( !data.entries ) data.entries = [];
		if( data.entries.length > 0) {
			for( var i=0; i<data.entries.length; i++){
				var entry = {};
				entry.id = Math.random( 255 );
				poolData.push( entry );
			}
		}
		//console.log( poolData, " POOL DATA");
		return poolData;
	}

	// get the top gifted product
	// grab the object with the most votes
	function setTopGiftedItem( data ) {
		var returnData = data ;
		if ( returnData[ 0 ] ) {
			returnData[ 0 ].insertIndex = -1;
			returnData[ 0 ].mostVoted = true;
		}
		return returnData;
	}

	function combineTheData( data, topGiftData ) {
		var entryId = topGiftData[ 0 ].entryId;
		data = _.without(data, _.findWhere(data, {entryId: entryId}));
		var returnData = data.concat( topGiftData );
		return returnData;
	}

	// basic logical sort using underscore
	// similar to js native sorting abilites
	function sort( array, f ) {
		var sortedData = _.sortBy( array, f );
		return sortedData;
	}

	// filter
	function filter( array, f) {
		var matches = _.filter( array, f );
		return matches;
	}

	function getVoteCopy( entry ) {
		var voteMsg = '';
		if( entry.votes === 0 ){
			voteMsg = '0 loves this';
		} else if( entry.votes === 1 ){
			voteMsg = '1 loves this';
		} else {
			voteMsg = entry.votes + ' love this';
		}
		return voteMsg;
	}

	// special sorts by reverse insertIndex 
	// this is how marketing wants the pool to show up on the page

	function getTopTenList( data ) {
		var tempData = sortDataByPoolOrder( data );
		tempData = tempData.slice(0,10);
		return tempData;
	}

	function getTopItem( data ) {
		tempData = data;
		tempData = sortDataByPoolOrder( tempData );
		tempData = tempData.slice(0,1);
		//console.log( tempData, "BBPool.getTopItem" );
		return tempData;
	}

	function filterDataUnderValue( data, value ) {
		var tempData = BBPool.filter( data, function( entry ) {
			if( entry[ "pfeed_priceforfilters" ] <= value ) return entry;
		} );
		return tempData;
	}

	function sortDataByPoolOrder( data ) {
		var currentSort = function( o ) { return o.insertIndex; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}
	// sort functions in underscore
	// http://underscorejs.org/
	// look up sortBy
	function sortDataPriceHighToLow( data ) {
		var currentSort = function( o ) { return -o.pfeed_priceforfilters; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}

	function sortDataPriceLowToHigh( data ) {
		var currentSort = function( o ) { return o.pfeed_priceforfilters; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}

	function sortDataVotesHighToLow( data ) {
		var currentSort = function( o ) { return -o.votes; };
		var sortedData = sort( data, currentSort );
		return sortedData;
	}

	// table of contents
	return {
		processData: processData,
		sort: sort,
		filter: filter,
		changeVoteData: changeVoteData,
		changeData: changeData,
		changeVoteDataRemoveVote: changeVoteDataRemoveVote,
		combineTheData: combineTheData,
		getVoteCopy: getVoteCopy,

		// specific pool functions
		filterDataUnderValue: filterDataUnderValue,
		getTopTenList: getTopTenList,
		getTopItem: getTopItem,
		sortDataByPoolOrder: sortDataByPoolOrder,
		setTopGiftedItem: setTopGiftedItem,
		sortDataPriceHighToLow: sortDataPriceHighToLow,
		sortDataPriceLowToHigh: sortDataPriceLowToHigh,
		sortDataVotesHighToLow: sortDataVotesHighToLow
	};

} )();