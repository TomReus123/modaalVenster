$(document).ready( function(){
	//haalt grote foto en tekst weg.
	var groot1 = $('#groot1').detach();
	var groot2 = $('#groot2').detach();
	var groot3 = $('#groot3').detach();
	var groot4 = $('#groot4').detach();
	
	//modaal venster openen met tekst
	$('#thumb1').on('click', function(){
		modaalVensterObject.openen({inhoud: groot1, breedte: 700});
	});
	
	$('#thumb2').on('click', function(){
		modaalVensterObject.openen({inhoud: groot2, breedte: 700});
	});
	
	$('#thumb3').on('click', function(){
		console.log("hdegcwsh");
		modaalVensterObject.openen({inhoud: groot3, breedte: 700});
	});
	
	$('#thumb4').on('click', function(){
		modaalVensterObject.openen({inhoud: groot4, breedte: 700});
	});
});