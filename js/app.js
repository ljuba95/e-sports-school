$(document).ready(function(){
	if($('.bxslider').length > 0)
		$('.bxslider').bxSlider({
			mode: 'fade',
			auto: true,
			speed: 700,
		});

	$( window ).resize(function(event) {
		if((window.innerWidth == 1920 || window.innerWidth == 1366) && $('.slike').css('display') != "none"){
			$('#dota2, #LOL, #CSGO, #HS, #SC2').css('display','block');
			$('.slike').fadeOut();
		}
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

			injectHtml = '<div class="row"><div class="col-md-4"><img src="images/old/' + window.location.search.slice(1,window.location.search.length) + '.png" height="300px" width="300px" class="center-block" style="margin-top:50px;"></div>' + 
					'<div class="col-md-8" style="margin-top:30px; font-size: 18px; font-weight: bold">text</div></div>';
					$("body").css("background-image", "url(\"images/" + window.location.search.slice(1,window.location.search.length) + ".png\")");
			switch (window.location.search.slice(1,window.location.search.length)){
				case "LOL":
					injectHtml = injectHtml.replace('text','<p><a class="upis-links" href="https://na.leagueoflegends.com/"><strong>&emsp;&emsp;League of Legends</strong></a> je trenutno najpopularnija <a class="masterTooltip upis-links" title="Multiplayer Online Battle Arena - Online igra, za više igrača, tipa arene (ringa), gde dva tima od po 5 igrača pokušavaju da pobede protivnika rušenjem baze istog."><strong>MOBA</strong></a> video igra sa najvećim' +
						' brojem igrača koji je aktivno igraju (oko 40 miliona). Cilj našeg programa jeste da stvorimo profesionalne igrače koji će se takmičiti u američkom ili evropskom <a class="masterTooltip upis-links" title="League Championship Series - Glavna League of Legends liga u kojoj se takmiče najbolji profesionalni timovi na svetskoj e-sport sceni."><strong>LCS-u</strong></a>.</p>' +
						'<p>&emsp;&emsp;Naučićete zašto je <a class="masterTooltip upis-links" title="Kontrolisanje vidljivosti na mapi putem wardova."><strong>vision control</strong></a> najbitnija stavka u pravljenju prednosti i održavanju iste ka putu do pobede, tehnike pomoću kojih igrač može uvek biti svestan o dešavanjima'+
						' na celoj mapi u isto vreme kada je u toku <a class="masterTooltip upis-links" title="Prvih 10 do 20 minuta igre, kada igrači većinu vremena troše međusobnom borbom i ubijanjem miniona na odgovarajućim lane-ovima."><strong>laning</strong></a> ili <a class="masterTooltip upis-links" title="Deo igre kada igrači većinu vremena provode grupisanjem i borbom 5 na 5."><strong>team fight</strong></a> faza igre. Kako prevesti vođstvo iz <a class="masterTooltip upis-links" title="Prelazak iz prvih 0-30 (early/mid game) minuta igre u završnih 30+ (late game) minuta igre."><strong>early/mid game-a u late game</strong></a>, zašto dobar <a class="masterTooltip upis-links" title="Faza pre početka igre, kada timovi biraju heroje koje će igrati."><strong>draft</strong></a> eksponencijalno povećava šanse za pobedu, bez obzira na performanse igrača u igri, ' +
						'kako igrač može poboljšati svoje <a class="masterTooltip upis-links" title="Sposobnosti igrača da vešto i precizno pomera i klikće mišem, dobro kontroliše kameru, ima veliki procenat pogođenih magija koje se moraju ciljati (skillshot) i brzo pritiska dugmiće na tastaturi i reaguje u odgovarajućim situacijama."><strong>mehaničke sposobnosti</strong></a> i <a class="masterTooltip upis-links" title="Teorijsko znanje o igri, posedovanje znanja o mogućnostima i granicama svih heroja, kada praviti pritisak na objektivima (kulama/zmaju/baronu), kada je dobro umreti za tim i slično."><strong>game-knowledge</strong></a>.</p>&emsp;&emsp;Zatim kako, u svakom trenutku, sagledati <a class="masterTooltip upis-links" title="Generalna ideja kojom se tim vodi do pobede, tj. na koji način tim, sa odgovarajućim herojima, može konstantno ostvarivati prednost u igri i tako pobediti."><strong>win-condition</strong></a> za trenutnu kompoziciju tima u zavisnosti od kompozicije ' +
						'protivničkog, zašto su <a class="masterTooltip upis-links" title="Broj ubijenih miniona (farm), kule/baron/zmaj/inhibitori/nexus (objektivi)."><strong>farm i objektivi</strong></a> bitniji od ubistava, kako ostati pribran i ne skretati sa cilja kada se gubi, kada je bolje koristiti <a class="masterTooltip upis-links" title="Strategija igre gde se tim podeli po lane-ovima (4-1 ili 1-3-1) i pokušava ostvariti prednost bez borbe 5 na 5."><strong>splitpush</strong></a>, a kada <a class="masterTooltip upis-links" title="Strategija igre gde se svih 5 članova tima grupiše i tako kreće po mapi, pokušavajući da stekne prednost forsiranjem borbe 5 na 5."><strong>group</strong></a> strategiju itd. neka su od najznačajnijih znanja koja učenici mogu steći uz našu stručnu pomoć.</p>');
					break;
				case "Hearthstone":
					injectHtml = injectHtml.replace('text','<p><a href="http://us.battle.net/hearthstone/en/" class="upis-links"><strong>&emsp;&emsp;Hearthstone</strong></a>, kao taktička igra u kojoj oba igrača naizmenično igraju po potezima, je interesantna u tome što recept za uspeh leži u korišćenju raspoloživih resursa efikasnije od protivnika. Jedan od prvih i očiglednih resursa sa kojima se igrači susreću jesu karte. Cilj je da igrač konstantno svojim potezima ostvaruje <a class="masterTooltip upis-links" title="Situacija kada igrač poseduje više karata od protivnika u zbiru (na polju i u ruci)."><strong>card advantage</strong></a>.</p>' +
						'<p>&emsp;&emsp;Neki od načina kojima se ovo može postići, na koje se naš obrazovni program fokusira, jesu putem optimalnog korišćenja <a class="masterTooltip upis-links" title="Unikatna magija koju svaki heroj poseduje, sa koštanjem od dve mane."><strong>hero power-a</strong></a> i obavljanjem <a class="masterTooltip upis-links" title="Proces kada igrač iskoristi jednu ili više svojih karti kako bi eliminisao jednu ili više karti protivnika."><strong>trade-ova</strong></a> uz visoki <a class="masterTooltip upis-links" title="Označava vrednost nekog trade-a. Visoki value je, na primer, kada igrač sa nekom svojom kartom, koja košta malo mane, eliminiše jednu kartu protivnika koja košta puno mane ili više karti odjednom i time ostvari card advantage."><strong>value</strong></a>.' +
						' Sledeći bitan resurs jeste <a class="masterTooltip upis-links" title="Resurs koji određuje koliko dugo će trajati igra, broj poteza dok životni poeni nekog od igrača ne dostignu 0, i time odlučuje koje karte se mogu iskoristiti u kom trenutku."><strong>vreme (tempo)</strong></a>. <a class="masterTooltip upis-links" title="Broj mana kristala koji se moraju potrošiti da bi se aktivirala odgovarajuća karta."><strong>Mana cost</strong></a> karti i optimalno korišćenje mana kristala je usko povezano sa vremenom.' +
						' Životni poeni su sledeći resurs koji je jako važan, jer uz dobar tempo, prednost u kartama i slično, bez životnih poena igrač nije u mogućnosti da pobedi.</p><p>&emsp;&emsp;Učenici stiču znanje kako da optimalno zamene život, kao resurs, za tempo, card advantage ili <a class="masterTooltip upis-links" title="Prisutnost na tabli, tj. koliko karti igrač poseduje na tabli i koliko mu one omogućavaju da kontroliše igru."><strong>board presence</strong></a> (poslednji jako bitan resurs).' +
						' Uz naš program, učenici će vladati resursima na vrhunskom nivou i time povećati svoje šanse za pobedu.</p>');
					break;

				case "Starcraft2":
					injectHtml = injectHtml.replace('text','<p><a href="http://us.battle.net/sc2/en/" class="upis-links"><strong>&emsp;&emsp;Starcraft2</strong></a> je najpopularnija <a class="masterTooltip upis-links" title="Real Time Strategy - Strategijska video igra u kojoj igrači kontrolišu vojske i međusobno ratuju kako bi jedni drugima srušili uporišta i time ostvarili pobedu."><strong>RTS</strong></a> video igra koja je pokrenula ono što se danas smatra e-sportom i to je prva video igra koja'+
					' je postala priznata kao nacionalni sport u jednoj zemlji (Južna Koreja, 1999. godine). Dva ili vise igrača,'+
					' u isto vreme, pokušavaju da razviju svoju bazu skupljanjem i trošenjem <a class="masterTooltip upis-links" title="Razna dobra, poput minerala, gasa, supply-ja itd. koja igrač nabavlja korišćenjem svojih pijuna."><strong>resursa</strong></a>, maksimalno otežaju protivniku da uspostavi i razvije svoju, da bi, na kraju, došli do pobede.</p><p>&emsp;&emsp;Uz nas program naučićete koji'+
					' <a class="masterTooltip upis-links" title="Build putanja koju igrač preduzme za prvih par jedinica i građevina."><strong>opening</strong></a> je dobar kod koje <a class="masterTooltip upis-links" title="Zerg, terrans ili protoss."><strong>rase</strong></a> i na kojoj mapi, kako ostvariti ekonomsku i vojnu prednost na samom početku partije i'+
					' polako je pretvarati u nedostižnu. Saznaćete da čitate protivnikov <a class="masterTooltip upis-links" title="Build putanja je specifična serija koraka koje igrač preduzima u ranoj fazi igre kako bi sproveo specifičnu strategiju."><strong>build</strong></a>, da ga <a class="masterTooltip upis-links" title="Sposobnost igrača da predvidi poteze protivnika i odigra na specifičan način, primeni specifičnu strategiju koja efikasno negira protivničku."><strong>counter-ujete</strong></a> i na kraju iznenadite nekom svojom, lucidnom, idejom.</p>'+
					' <p>&emsp;&emsp;Osnove taktike, <a class="masterTooltip upis-links" title="Potez kojim igrač razdvaja delove svoje vojske kako bi izbegao protivnika ili se pozicionirao za efikasniji napad."><strong>split-ovanje vojske</strong></a>, <a class="masterTooltip upis-links" title="Macromenagement (Kreiranje vojske, građevina, unapređenja itd.), Micromanagement (Kontrola vojske radi maksimizacije njihove efikasnosti)."><strong>macro i micro</strong></a> igra, napredan <a class="masterTooltip upis-links" title="Otkrivanje delova mape na kojima se nalazi protivnik, radi dobijanja važnih informacija, korišćenjem pijuna ili skenera."><strong>scouting</strong></a>'+
					' neka su od najvažnijih znanja koja naša škola nudi, pomoću kojih možete postati izvrstan Starcraft 2 igrač i takmičiti se na najvećim svetskim turnirima.</p>');
					break;

				case "DOTA2":
					injectHtml = injectHtml.replace('text','<p><a href="http://blog.dota2.com/" class="upis-links"><strong>&emsp;&emsp;Dota 2</strong></a> je jedna od najpopularnijih <a class="masterTooltip upis-links" title="Multiplayer Online Battle Arena - Online igra, za više igrača, tipa arene (ringa), gde dva tima od po 5 igrača pokušavaju da pobede protivnika rušenjem baze istog."><strong>MOBA</strong></a> video igara na svetu.'+
						' Naša ideja jeste da izgradimo vrhunske igrače koji će sutra moći da se takmiče na najvišem nivou, učestvuju a možda i osvoje <a class="masterTooltip upis-links" title="The International - najveći svetski, internacionalni turnir Dote 2, na kome čast da učestvuju imaju samo najbolji timovi na svetu."><strong>TI</strong></a> i izgrade stabilne e-sport karijere.</p>'+
						' <p>&emsp;&emsp;Naučite na koji način sastaviti optimalni <a class="masterTooltip upis-links" title="Kompozicija heroja koji čine jedan tim, njihova sinergija, snage i slabosti."><strong>team-comp</strong></a> u zavisnosti od protivnika, kada možete <a class="masterTooltip upis-links" title="Niz poteza kojima tim forsira i pokušava uništiti sledeću metu, bila to heroj, kula, baraka itd."><strong>push-ovati</strong></a> <a class="masterTooltip upis-links" title="Kule koje se nalaze na samom ulazu u bazu tima i koje su poslednji vid zaštite za barake."><strong>tier 3 kule</strong></a> a da ne budete kažnjeni,'+
						' kako da kontrolišete reku, na koji način da iznudite situaciju gde će vaše <a class="masterTooltip upis-links" title="Area of Effect magije su one koje mogu pogoditi više meta odjednom i tako naneti mnogo veću štetu ukoliko su protivnici usko grupisani."><strong>AOE magije</strong></a> napraviti maksimalnu štetu, kako da dobrim odlukama konstatno ostvarujete prednost na mapi kao i mnoštvo taktika čijom primenom povećavate šanse za pobedu.</p>'+
						' <p>&emsp;&emsp;Uz edukaciju koju pružamo, situacije u kojima vaš <a class="masterTooltip upis-links" title="Heroj kojeg kontroliše jedan igrač tima koji ima potencijal da prouzrokuje najveću štetu protivničkom timu i time najviše od svih povećava šanse za pobedu."><strong>carry</strong></a> iznova umire u borbi jer niste u mogućnosti da mu obezbedite <a class="masterTooltip upis-links" title="Aegis of the Immortal - item koji igrač može pokupiti nakon ubijanja Roshan-a, koji mu omogućava da se, nakon smrti, momentalno oživi."><strong>aegis</strong></a>,'+
						' kada neuspešno i nepravovremeno aktivirate <a class="masterTooltip upis-links" title="Black King Bar - item koji igrač može aktivirati, koji mu omogućava imunitet za većinu protivnikovih magija koje mu uskraćuju kontrolu nad herojem."><strong>BKB</strong></a>, gde ne uspevate da vežete svoje <a class="masterTooltip upis-links" title="Crowd Control magije omogućavaju igraču da na razne načine uskrati mogućnost kontrole koju protivnik ima nad svojim herojem."><strong>CC magije</strong></a> tako da protivnik ne može povratiti kontrolu nad herojem sve do svoje smrti i mnoge druge će vam se dešavati sve ređe i ređe, što za rezultat znatno poboljšava vaše sposobnosti i mogućnosti postajanja Dota 2 eksperta.</p>');
					break;

				case "CSGO":
					injectHtml = injectHtml.replace('text','<p><a href="http://blog.counter-strike.net/" class="upis-links"><strong>&emsp;&emsp;Counter Strike: Global Offensive</strong></a> je najpopularnija <a class="masterTooltip upis-links" title="First Person Shooter - Pucačina u prvom licu."><strong>FPS</strong></a> video igra na svetu.' +
						' Zbog prirode igre (brza, eksplozivna, zahteva brze reakcije i izvrsnu preciznost), spada u jednu od najtežih igara za <a class="masterTooltip upis-links" title="Proces ovladavanja nekom veštinom do najvišeg mogućeg nivoa."><strong>master-ovanje</strong></a>.</p>' +
						' <p>&emsp;&emsp;Kako se timovi sastoje od 5 igrača, jako je važna brza i jasna komunikacija i zbog toga, pored beneficije sticanja znanja kako biti efikasan igrač, možete očekivati da će se vaš <a class="masterTooltip upis-links" title="Sposobnost saradnje sa saigračima u timu i ostvarivanje jedinke koja je više od zbira njenih članica."><strong>teamwork</strong></a> znatno poboljšati.' +
						' Kako je osnovni i primarni cilj u takmičarskom counter strike-u pobediti u 16 rundi pre protivnika, jako je važan <a class="masterTooltip upis-links" title="Ekonomija u counter strike-u, koliko uspešno, i kada gubi i kada pobeđuje, tim kontroliše svoj i protivnikov novac kojim se kupuju puške, granate itd."><strong>economy</strong></a>, <a class="masterTooltip upis-links" title="Sposobnost tima da kontroliše i ograničava kretanje suparničkog tima na celoj mapi, primorava protivnike da igraju reaktivno i stiče poziciju u kojoj diktira tok igre."><strong>map control</strong></a>' +
						' i odigravanje <a class="masterTooltip upis-links" title="Potezi kojima igrač, bez velikog rizika, polako i sigurno, ostvaruje prednost nad protivnikom."><strong>low risk-high reward poteza</strong></a>.</p>' +
						' <p>&emsp;&emsp;Kako optimalno da odigrate <a class="masterTooltip upis-links" title="Situacija kada je igrač opkoljen sa više protivničkih igrača, iz različitih uglova, u isto vreme."><strong>cross-fire situaciju</strong></a>, uradite <a class="masterTooltip upis-links" title="Potez kada igrač deaktivira bombu u trenutku kada protivnički tim to ne očekuje ili u žaru borbe pomoću dimnih bombi."><strong>ninja-defuse</strong></a>, u većini slučajeva uzmete <a class="masterTooltip upis-links" title="Potez kada igrač ubije jednog ili više protivnika, dok se prvi probija na vidno polje istih i time osvaja dobar deo mape."><strong>entry-frag</strong></a>' +
						', kako da svojim <a class="masterTooltip upis-links" title="Atribut igrača koji se tiho kreće po mapi i vreba protivnike iz neočekivanih uglova."><strong>lurker</strong></a> sposobnostima donesete prednost timu,' +
						' ekspertno izvršite <a class="masterTooltip upis-links" title="Potez kada igrač rafalno puca iz puške i povećava šanse da ubije jednog ili više protivnika, ukoliko to izvrši precizno."><strong>spray</strong></a>, budete izvrstan <a class="masterTooltip upis-links" title="Arctic Warfare Police sniper rifle - Snajperska puška."><strong>AWP</strong></a> igrač itd. neka su od znanja koja stičete aktivnim angažovanjem u našoj školi.</p>');
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