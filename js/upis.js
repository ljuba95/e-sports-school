$(document).ready(function(){
	

	function validateEmail(email) {
  		var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return regex.test(email);
	}

	function validateName(name){
		return name.length > 1;
	}

	function validateNumber(number){
		return number.length > 8;
	}
	
	function validateForm(){
		var email = $('#emailForm').val();
		var name = $('#nameForm').val();
		var number = $('#telefonForm').val();
		var a = true;
		if(!validateEmail(email)){
			$('#emailHelp').html('Niste uneli ispravan e-mail.');
			a = false;
		}
		if(!validateName(name)){
			$('#nameHelp').html('Niste uneli ime.');
			a = false;
		}
		if(!validateName(name)){
			$('#telefonHelp').html('Niste uneli ispravan broj telefona.');
			a = false;
		}
		return a;
	}
	$(".upis form").bind("submit", validateForm);
	$('#sbmt').click(function(){
    	if(validateForm()) alert('Vaša prijava je uspešno zabeležena!');
    });



});