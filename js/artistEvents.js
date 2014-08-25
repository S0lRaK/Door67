$(document).ready(function(){
	selectArtistHover();
	selectArtistClick();
	function selectArtistHover(){
		$(".imgArtist").hover(function(){
			$(this).attr("style", "-webkit-filter: grayscale(0%);");
		}, function(){
				$(this).parent().find("img").attr("style", "-webkit-filter: grayscale(100%);");
		});
	}
	
	function selectArtistClick(){
		$(".imgArtist").click(function(){
			var artistName = $(this).parent().parent().attr("artistname");
			$("#divArtists").fadeOut("slow", function(){
				$(this).parent().append("<div id='infoArtist'></div>");
				$("#infoArtist").append("<h1 style='margin: 0px'>" + artistName  + "</h1>");
				$("#infoArtist").append("<img src='img/closeIcon.png' class='closeImage'/>");
				$("#infoArtist").fadeIn("fast");
				closeArtistClick();
			});
		});
	}
	
	function closeArtistClick(){
		$(".closeImage").click(function(){
			$("#infoArtist").fadeOut("slow", function(){
				$("#divArtists").fadeIn("fast");
				$(this).remove();
			});
		});
	}
});
