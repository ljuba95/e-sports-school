$(document).ready(function(){
	if($('.bxslider').length > 0)
		$('.bxslider').bxSlider({
			mode: 'fade',
			auto: true,
			speed: 700,
		});

	$( window ).resize(function(event) {
  		if($('.slike').css('display') == "none"){
  			$('#dota2, #LOL, #CSGO, #HS, #SC2').css('display','none');
  			$('.slike').fadeIn();
  		}
	});

	if(window.innerWidth/window.innerHeight < 1.9){
		$(window).trigger('resize');
	}


	

	if(location.pathname.includes('upis')){

		var injectHtml;

		if(location.search != ""){
			$('#select').val(location.search[1]);
			$('#select').css("box-shadow","0 0 5px #34B5BA");

			switch (location.search[1]){
				case "1":
					injectHtml = '<div class="col-md-3"><img src="images/old/LOL.png" height="150px" width="150px" class="center-block" style="margin-top:10px;"></div>' + 
					'<div class="col-md-5">HELOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO\nLOLOLOLOLOLOLOLOL</div>';
					break;
				case "2":
					injectHtml = 'todo';
					break;

				case "3":
					injectHtml = 'todo';
					break;

				case "4":
					injectHtml = 'todo';
					break;

				case "5":
					injectHtml = 'todo';
					break;

				default:
					alert('should never appear! go away!');
					break;
			}

			$('.opis').append(injectHtml);
		}

		
		
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

	//efekti za slike===========================================

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

	//get rid of spaghetti code YESSSSSSSS
	//slike, hoveri, resize
	function addBlur(src){
		return src.slice(0,src.length-4) + 'Blur.png';
	}

	function removeBlur(src){
		return src.slice(0,src.length-8) + '.png';
	}
	
	$('#dota22, #LOL2, #CSGO2, #HS2, #SC22').on({
		'mouseover' : function(){
			$(this).attr('src', addBlur($(this).attr('src')));
		},
		'mouseout' : function(){
			$(this).attr('src',removeBlur($(this).attr('src')));
		}
	});

	$('#img-blur').on({
	    'mouseover' : function() {
	      	showGames();
	    },
	    'mouseout' : function() {
	  		hideGames();
	    }
  	});

	$('#dota2,#CSGO,#LOL,#SC2,#HS').on({
    'mouseover' : function() {
      	$(this).attr('src',addBlur($(this).attr('src')));
      	showGames();
    },
    'mouseout' : function() {
  		$(this).attr('src',removeBlur($(this).attr('src')));
  		hideGames();
    }
  });

	$('#contact').on('click',function(){
		$("html, body").animate({ scrollTop: $(".footer-right").offset().top }, 'slow', function(){
			$('.footer-right').css("box-shadow","0 0 5px #34B5BA");
		});
	});
});