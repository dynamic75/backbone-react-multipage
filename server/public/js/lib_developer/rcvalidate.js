/*
	Simple validation for React form
*/





var rcValidate = ( function() {

	var emailregEx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var zipregEx = /^\d{5}$/;


	//-------------

	function email(v){
		//console.log(v, emailregEx.test(v))		
		return emailregEx.test(v)
	}

	function  zip(v){
		//console.log(v, zipregEx.test(v))		
		return zipregEx.test(v)
	}

	function string(v){
		//console.log(v.length > 0)
		return v.length > 0;
	}	

	function phone(v){
		if (!v) return false;
		//console.log(v, v.match(/\d/g).length===10)
		var result = v.match(/\d/g);

		if (result === null) {
			result = [];
		}
		return result.length === 10;
	}

	function select(v) {
		//console.log(v)
		return (v.length > 0 && v != "default");
	}

    // table of contents
    return {
    	email: email,
    	zip: zip,
    	string: string,
    	phone: phone,
    	select: select
    }


} )();
