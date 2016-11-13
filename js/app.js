$(document).ready(function(){
	if($('.bxslider').length > 0)
		$('.bxslider').bxSlider({
			mode: 'fade',
			auto: true,
			speed: 700,
		});

	if(location.pathname.includes('upis') && location.search !== ""){
		$('#select').val(location.search[1]);
		$('#select').css("box-shadow","0 0 5px #34B5BA");
	}

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
		$("#message").css("color","white");
	});


	function showGames(){
		$("#dota2").css("opacity","1");
		$("#CSGO").css("opacity","1");
		$("#HS").css("opacity","1");
		$("#SC2").css("opacity","1");
		$("#LOL").css("opacity","1");
	}

	function hideGames(){
		$("#dota2").css("opacity","0");
		$("#CSGO").css("opacity","0");
		$("#HS").css("opacity","0");
		$("#SC2").css("opacity","0");
		$("#LOL").css("opacity","0");
	}

	

	$('#img-blur').on({
    'mouseover' : function() {
      	showGames();
    },
    'mouseout' : function() {
  		hideGames();
    }
  });

	$('#dota2').on({
    'mouseover' : function() {
      	$(this).attr('src','images/old/DOTA2Blur.png');
      	showGames();
    },
    'mouseout' : function() {
  		$(this).attr('src','images/old/DOTA2.png');
  		hideGames();
    }
  });

	$('#CSGO').on({
    'mouseover' : function() {
      	$(this).attr('src','images/old/CSGOBlur.png');
      	showGames();
    },
    'mouseout' : function() {
  		$(this).attr('src','images/old/CSGO.png');
  		hideGames();
    }
  });

	$('#LOL').on({
    'mouseover' : function() {
      	$(this).attr('src','images/old/LOLBlur.png');
      	showGames();
    },
    'mouseout' : function() {
  		$(this).attr('src','images/old/LOL.png');
  		hideGames();
    }
  });

	$('#SC2').on({
    'mouseover' : function() {
      	$(this).attr('src','images/old/Starcraft2Blur.png');
      	showGames();
    },
    'mouseout' : function() {
  		$(this).attr('src','images/old/Starcraft2.png');
  		hideGames();
    }
  });

	$('#HS').on({
    'mouseover' : function() {
      	$(this).attr('src','images/old/HearthstoneBlur.png');
      	showGames();
    },
    'mouseout' : function() {
  		$(this).attr('src','images/old/Hearthstone.png');
  		hideGames();
    }
  });
	
});