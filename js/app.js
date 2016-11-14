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
			$('#select').val(location.search.slice(1,location.search.length));
			$('#select').css("box-shadow","0 0 5px #34B5BA");

			injectHtml = '<div class="col-md-3"><img src="images/old/' + location.search.slice(1,location.search.length) + '.png" height="150px" width="150px" class="center-block" style="margin-top:50px;"></div>' + 
					'<div class="col-md-7" style="margin-top:30px">text</div>';
			switch (location.search.slice(1,location.search.length)){
				case "LOL":
					injectHtml = injectHtml.replace('text','<a href="https://na.leagueoflegends.com/" class="upis-links"><strong>League of Legends</strong></a> je trenutno video igra sa najvećim' +
						' brojem igrača koji aktivno igraju (oko 40 miliona). Cilj našeg programa jeste da stvorimo profesionalne igrače koji će se takmičiti u američkom ili evropskom LCS-u.' +
						' Naučićete zašto je "vision control" najbitnija stavka u pravljenju prednosti i održavanju iste ka putu do pobede, tehnike pomoću kojih igrač može uvek biti svestan o dešavanjima'+
						' na celoj mapi' +
						' u isto vreme kada je u toku "farm" ili "team fight" faza igre. Zašto dobar draft eksponencijalno povećava šanse za pobedu, bez obzira na performanse igrača u igri, ' +
						'kako igrač može poboljšati svoje mehaničke i "game-knowledge" sposobnosti, kako, u svakom trenutku, sagledati "win-condition" za trenutnu kompoziciju tima u zavisnosti od kompozicije ' +
						'protivničkog, zašto su farm i objektivi bitniji od ubistava, kako ostati pribran i ne skretati sa cilja kada se gubi itd. neka su od najznačajnijih znanja koja učenici mogu steći uz našu pomoć.');
					break;
				case "DOTA2":
					injectHtml = injectHtml.replace('text','html tekst za dotu');
					break;

				case "Starcraft2":
					injectHtml = injectHtml.replace('text','html tekst za sc2');
					break;

				case "Hearthstone":
					injectHtml = injectHtml.replace('text','html tekst za hs');
					break;

				case "CSGO":
					injectHtml = injectHtml.replace('text','html tekst za csgo');
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