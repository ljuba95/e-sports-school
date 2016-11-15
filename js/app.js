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


	

	if(window.location.pathname.includes('upis')){

		var injectHtml;

		if(window.location.search != ""){
			$('#select').val(window.location.search.slice(1,window.location.search.length));
			$('#select').css("box-shadow","0 0 5px #34B5BA");

			injectHtml = '<div class="row"><div class="col-md-3"><img src="images/old/' + window.location.search.slice(1,window.location.search.length) + '.png" height="250px" width="250px" class="center-block" style="margin-top:50px;"></div>' + 
					'<div class="col-md-9" style="margin-top:30px; font-size: 18px; font-weight: bold">text</div></div>';
					$("body").css("background-image", "url(\"images/" + window.location.search.slice(1,window.location.search.length) + ".png\")");
			switch (window.location.search.slice(1,window.location.search.length)){
				case "LOL":
					injectHtml = injectHtml.replace('text','<a href="https://na.leagueoflegends.com/" class="upis-links"><strong>&emsp;&emsp;League of Legends</strong></a> je trenutno najpopularnija <a class="masterTooltip upis-links" title="Multiplayer Online Battle Arena - Online igra, za više igrača, tipa arene(ringa)."><strong>MOBA</strong></a> video igra sa najvećim' +
						' brojem igrača koji je aktivno igraju (oko 40 miliona). Cilj našeg programa jeste da stvorimo profesionalne igrače koji će se takmičiti u američkom ili evropskom <a class="masterTooltip upis-links" title="League Championship Series - Glavna League of Legends liga u kojoj se takmiče najbolji profesionalni timovi na svetskoj e-sport sceni."><strong>LCS-u</strong></a>.' +
						' Naučićete zašto je <a class="masterTooltip upis-links" title="Kontrolisanje vidljivosti na mapi putem wardova."><strong>vision control</strong></a> najbitnija stavka u pravljenju prednosti i održavanju iste ka putu do pobede, tehnike pomoću kojih igrač može uvek biti svestan o dešavanjima'+
						' na celoj mapi' +
						' u isto vreme kada je u toku <a class="masterTooltip upis-links" title="Prvih 10 do 20 minuta igre, kada igrači većinu vremena troše međusobnom borbom i ubijanjem miniona na odgovarajućim lane-ovima."><strong>laning</strong></a> ili <a class="masterTooltip upis-links" title="Deo igre kada igrači većinu vremena provode grupisanjem i borbom 5 na 5."><strong>team fight</strong></a> faza igre. Kako prevesti vođstvo iz <a class="masterTooltip upis-links" title="Prelazak iz prvih 0-30(early/mid game) minuta igre u završnih 30+(late game) minuta igre."><strong>early/mid game-a u late game</strong></a>, zašto dobar <a class="masterTooltip upis-links" title="Faza pre početka igre, kada timovi biraju heroje koje će igrati."><strong>draft</strong></a> eksponencijalno povećava šanse za pobedu, bez obzira na performanse igrača u igri, ' +
						'kako igrač može poboljšati svoje <a class="masterTooltip upis-links" title="Sposobnosti igrača da vešto i precizno pomera i klikće mišem, dobro kontroliše kameru, ima veliki procenat pogođenih magija koje se moraju ciljati(skillshot) i brzo pritiska dugmiće na tastaturi i reaguje u odgovarajućim situacijama."><strong>mehaničke sposobnosti</strong></a> i <a class="masterTooltip upis-links" title="Teorijsko znanje o igri, posedovanje znanja o mogućnostima i granicama svih heroja, kada praviti pritisak na objektivima(kulama/zmaju/baronu), kada je dobro umreti za tim i slično."><strong>game-knowledge</strong></a>, zatim kako, u svakom trenutku, sagledati <a class="masterTooltip upis-links" title="Generalna ideja kojom se tim vodi do pobede, tj. na koji način tim, sa odgovarajućim herojima, može konstantno ostvarivati prednost u igri i tako pobediti."><strong>win-condition</strong></a> za trenutnu kompoziciju tima u zavisnosti od kompozicije ' +
						'protivničkog, zašto su <a class="masterTooltip upis-links" title="Broj ubijenih miniona(farm), kule/baron/zmaj/inhibitori/nexus(objektivi)."><strong>farm i objektivi</strong></a> bitniji od ubistava, kako ostati pribran i ne skretati sa cilja kada se gubi, kada je bolje koristiti <a class="masterTooltip upis-links" title="Strategija igre gde se tim podeli po lane-ovima (4-1 ili 1-3-1) i pokušava ostvariti prednost bez borbe 5 na 5."><strong>splitpush</strong></a> a kada <a class="masterTooltip upis-links" title="Strategija igre gde se svih 5 članova tima grupiše i tako kreće po mapi, pokušavajući ta stekne prednost forsiranjem borbe 5 na 5."><strong>group</strong></a> strategiju itd. neka su od najznačajnijih znanja koja učenici mogu steći uz našu pomoć.');
					break;
				case "Hearthstone":
					injectHtml = injectHtml.replace('text','<a href="http://us.battle.net/hearthstone/en/" class="upis-links"><strong>&emsp;&emsp;Hearthstone</strong></a>, kao taktička igra u kojoj oba igrača naizmenično igraju po potezima, je interesantna u tome što recept za uspeh leži u korišćenju raspoloživih resursa efikasnije od protivnika. Jedan od prvih i očiglednih resursa sa kojima se igrači susreću jesu karte. Cilj je da igrač konstantno svojim potezima ostvaruje <a class="masterTooltip upis-links" title="Situacija kada igrač poseduje više karata od protivnika u zbiru (na polju i u ruci)."><strong>card advantage</strong></a>.' +
						' Neki od načina kojima se ovo može postići, na koje se naš obrazovni program fokusira, jesu putem optimalnog korišćenja <a class="masterTooltip upis-links" title="Unikatna magija koju svaki heroj poseduje, sa koštanjem od dve mane."><strong>hero power-a</strong></a> i obavljanjem <a class="masterTooltip upis-links" title="Proces kada igrač iskoristi jednu ili više svojih karata kako bi eliminisao jednu ili više karata protivnika."><strong>trade-ova</strong></a> uz visoki <a class="masterTooltip upis-links" title="Označava vrednost nekog trade-a. Visoki value je, na primer, kada igrač sa nekom svojom kartom, koja košta malo mane, eliminiše jednu kartu protivnika koja košta puno mane ili više karata odjednom i time ostvari card advantage."><strong>value</strong></a>.' +
						' Sledeći bitan resurs jeste <a class="masterTooltip upis-links" title="Resurs koji određuje koliko dugo će trajati igra, broj poteza dok životni poeni nekog od igrača ne dostignu 0, i time odlučuje koje karte se mogu iskoristiti u kom trenutku."><strong>vreme(tempo)</strong></a>. <a class="masterTooltip upis-links" title="Broj mana kristala koji se moraju potrošiti da bi se aktivirala odgovarajuća karta."><strong>Mana cost</strong></a> karti i optimalno korišćenje mana kristala je usko povezano sa vremenom.' +
						' Životni poeni su sledeći resurs koji je jako važan, jer uz dobar tempo, prednost u kartama i slično, bez životnih poena igrač nije u mogućnosti da pobedi. Učenici stiču znanje kako da optimalno zamene život, kao resurs, za tempo, card advantage ili <a class="masterTooltip upis-links" title="Prisutnost na tabli, tj. koliko karata igrač poseduje na tabli i koliko mu one omogućavaju da kontroliše igru."><strong>board presence</strong></a>(poslednji jako bitan resurs).' +
						' Uz naš program, učenici će vladati resursima na vrhunskom nivou i time povećati svoje šanse za pobedu.');
					break;

				case "Starcraft2":
					injectHtml = injectHtml.replace('text','html tekst za sc2');
					break;

				case "DOTA2":
					injectHtml = injectHtml.replace('text','html tekst za dotu 2 fak');
					break;

				case "CSGO":
					injectHtml = injectHtml.replace('text','<a href="http://blog.counter-strike.net/" class="upis-links"><strong>&emsp;&emsp;Counter Strike: Global Offensive</strong></a> je najpopularnija <a class="masterTooltip upis-links" title="First Person Shooter - Pucačina u prvom licu."><strong>FPS</strong></a> video igra na svetu.');
					break;

				default:
					alert('should never appear! go away!');
					break;
			}

			$('.opis').prepend(injectHtml);
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


	//tooltip
	$('.masterTooltip').hover(function(){
               
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .css("opacity","1")
                .fadeIn('fast');
        }, function() {
               
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
        }).mousemove(function(e) {
                var mousex = e.pageX + 20; 
                var mousey = e.pageY + 10; 
                $('.tooltip')
                .css({ top: mousey, left: mousex });
        });


});