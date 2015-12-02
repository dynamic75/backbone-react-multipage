var BBLovedList = ( function() {

	var fbImage;
	var userName;
	var myLovedList = [];
	var cookiedItems;

	function addItemsToLovedList( array ) {
		//alert("addItemsToLovedList");

		myLovedList = myLovedList.concat( array );
		myLovedList = _.uniq( myLovedList );

		//jQuery.cookie('lovedItems',JSON.stringify( myLovedList ));
		$.cookie( 'lovedItems', JSON.stringify( myLovedList ) );
	}

	function emptyLovedList() {
		if ( myLovedList.length > 0 ) {
			while( myLovedList.length > 0 ) {
				myLovedList.pop();
			}
		}
	}

	function returnLovedList() {
		return myLovedList;
	}

	function checkMyLovedListForEntryId( entryid ) {
		var isInList = false;
		isInList = _.contains( myLovedList, entryid );
		return isInList;
	}

	function storeUserName( name ) {
		userName = name;
	}

	function returnUserName ( name ) {
		return userName;
	}

	function storeFbImage( pathToImage ) {
		fbImage = pathToImage;
	}

	function returnFbImage() {
		return fbImage;
	}

	// table of contents
	return {
		addItemsToLovedList: addItemsToLovedList,
		returnLovedList: returnLovedList,
		emptyLovedList: emptyLovedList,
		checkMyLovedListForEntryId: checkMyLovedListForEntryId,
		storeUserName: storeUserName,			// Keith
		returnUserName: returnUserName,			// Keith
		storeFbImage: storeFbImage,				// Keith
		returnFbImage : returnFbImage			// Keith
	};



} )();

