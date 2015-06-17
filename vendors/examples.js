$(document).ready(function(){

	$("#MenusGal").change(function(){
	  var id = $(this).find("option:selected").attr("id");

	  switch (id){
		case 'Gal1':
	  		window.location.href = 'index.html';
		  break;

	  	case 'Gal2':
	  		window.location.href = 'artista2.html';
		  break;

		case 'Gal3':
		  window.location.href = 'artista3.html';
		  break;

		case 'Gal4':
		  window.location.href = 'artista4.html';
		  break;
	    case 'Gal5':
		  window.location.href = 'artista5.html';
		  break;




	
	  }
	});

});