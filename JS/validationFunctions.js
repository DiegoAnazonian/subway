validateDni = function (_number){
	if (isThisaNumber(_number) && _number.length == 8) {
		console.log("El dni es correcto");	
	}else{
		console.log("El dni es incorrecto");
	}
}



checkEmptyBox = function (_user , _outPutText){
	if(_user.val() == ""){
		_user.css("color","grey");
		_user.css("font-style","italic");
		_user.val(_outPutText);
	}
}

clearText = function (_id , _text){
	if(_id.val() == _text){
		_id.val("");
	}
}

normalizeText = function (_id){
	_id.css("color","black");
	_id.css("font-style","normal");
}

validateName = function (_name){
	if(!(isThisaNumber(_name))){
		console.log("El nombre es correcto");
	}else{
		console.log("El nombre es incorrecto");
	}
}

validateLastName = function (_lastName){
	if(!(isThisaNumber(_lastName))){
		console.log("Apellido correcto");
	}else{
		console.log("Apellido incorrecto");
	}
}


isThisaNumber = function(_number){
	var numbers="0123456789";
	var isNumber = true;

	for (var i = 0; i < _number.length ; i++){

		if(numbers.indexOf(_number[i]) == -1) {
			isNumber = false;
			
		}
	}

	return isNumber;
}

isThisaText = function (_text) {
	var isText = true;

	for (var i = 0; i<_text.length; i++){
		if(!(isThisaLetter(_text[i]))){
			isText = false ;
		}
	}

	if(isText && _text.length > 0){
		console.log("Es un texto valido");
		return true;
	}else{
		return false;
	}
}

isThisaLetter = function (_letter){
	var letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    //var especiales = [8,37,39,46];
    var letra_especial = false;
    /*
    for (var i = 0; i < especiales.length; i ++){

    	if(_letter.toLowerCase() == especiales[i]){
    		console.log("es letra especial");
    		letra_especial = true ;
    	}

    }
	*/

    if((letras.indexOf(_letter.toLowerCase()) == -1)) {
    	return false;
    }else{
    	return true;

    }
}