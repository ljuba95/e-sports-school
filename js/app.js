$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 'fade',
		auto: true,
		speed: 700,
	});

	//==============validacije====================================

	function validateEmail(email) {
  		var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  		return regex.test(email);
	}

	function validateMessage(message){
		return message.length > 2;
	}

	function validate(){
		var emailPolje = $("#email");
		var messagePolje = $("#message");
		var a = true;

		if(!validateEmail(emailPolje.val())){
			emailPolje.css("color","red");
			a = false;
		}
		

		if(!validateMessage(messagePolje.val())){
			messagePolje.css("color","red");
			a = false;
		}
		return a;
	}

	$(".footer-right form").bind("submit", validate);

	$("#email").on("keypress",function(){
		$("#email").css("color","white");
	});

	$("#message").on("keypress",function(event){
		console.log(event);
		$("#message").css("color","white");
	});


	$('.img-center').on({
    'mouseover' : function() {
      	$(this).attr('src','images/LogoBlur.png');
    },
    'mouseout' : function() {
  		$(this).attr('src','images/Logo.png');
    }
  });
});