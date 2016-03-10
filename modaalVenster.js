var modaalVensterObject = (function(){
	var $window = $(window);
	var $modaalVenster = $('<div class="modaal-venster"/>');
	var $modaalInhoud = $('<div class="modaal-inhoud"/>');
	var $sluitKnop = $('<span class="sluit-knop">&#10005;</span>');
	
	$modaalVenster.append($modaalInhoud);//zorgt dat de grote foto en tekst aan het venster zijn gekoppeld
	
	return {
		centreren: function(){
			//opdrachten centreren
			var links = Math.max($window.width()-$modaalInhoud.outerWidth(), 0) / 2;//berekening zodat de window in het midden blijft
			var boven = Math.max($window.height()-$modaalInhoud.outerHeight(), 0) / 2;//berekening zodat de window in het midden blijft
			$modaalInhoud.css({left: links, top: boven});//berekening zodat de window in het midden blijft
		},
		openen: function(instellingen){
			//opdrachten openen
			$modaalInhoud.append(instellingen.inhoud, $sluitKnop);
			$modaalInhoud.css({width: instellingen.breedte+'px' || 'auto',
			height: instellingen.hoogte+'px' || 'auto'}).on('click', function(e){e.stopPropagation();});
			$modaalVenster.appendTo('body').on('click', modaalVensterObject.sluiten);//klik naast window om te sluiten
			$modaalVensterObject.centreren();//roept functie centreren aan
			$sluitKnop.on('click', modaalVensterObject.sluiten);//sluitknop klikken om window te sluiten
			$window.on('resize', modaalVensterObject.centreren);//window centreren
		},
		sluiten: function(){
			//opdrachten sluiten
			$modaalInhoud.empty().off('click', modaalVensterObject.sluiten);
			$modaalVenster.detach();//haalt window helemaal weg
			$window.off('resize', modaalVensterObject.centreren);//window centreren
		}
	}
}());