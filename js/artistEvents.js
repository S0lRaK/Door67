$(document).ready(function(){
	selectArtistHover();
	selectArtistClick();
	function selectArtistHover(){
		$(".imgArtist").hover(function(){
			$(this).attr("style", "-webkit-filter: grayscale(0%);");
			$(this).parent().find("label").text($(this).parent().attr("artistName"));
		}, function(){
			$(this).parent().find("label").fadeOut("fast", function(){
				$(this).attr("style", "display: block;");
				$(this).empty();
				$(this).parent().find("img").attr("style", "-webkit-filter: grayscale(100%);");
			});
		});
	}
	
	function selectArtistClick(){
		$(".imgArtist").click(function(){
			var artistName = $(this).parent().attr("artistName");
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
