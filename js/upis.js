$(document).ready(function(){
	

	function validateEmail(email) {
  		var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return regex.test(email);
	}
	
	function validateForm(){
		var email = $('#emailForm').val();
		
		if(!validateEmail(email)){
			$('#emailHelp').html('Niste uneli ispravan e-mail.');
			return false;
		}
		return true;
	}
	console.log('asdada');
	$(".upis form").bind("submit", validateForm);


});