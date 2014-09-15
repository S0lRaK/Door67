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
			var artistName = $(this).parent().attr("artistname");
			$("#divArtists").fadeOut("slow", function(){
				$(this).parent().append("<div id='infoArtist'></div>");
				$("#infoArtist").append("<div class='row'><div class='col-md-11'><h1 style='margin: 0px'>" + artistName  + "</h1></div><div class='col-md-1'><img src='img/closeIcon.png' class='closeImage'/></div></div>");
				//$("#infoArtist").append("<img src='img/closeIcon.png' class='closeImage'/>");
				if(artistName == "Gustavho Bacilo"){
					$("#infoArtist").append(Artists.Gustavho);
				}
				else if(artistName == "Krusound" ){
					$("#infoArtist").append(Artists.Krusound);
				}
				else if(artistName == "German"){
					$("#infoArtist").append(Artists.German);					
				}
				else if(artistName == "Jandro Beat"){
					$("#infoArtist").append(Artists.Jandro);					
				}
				else if(artistName == "Lexlay"){
					$("#infoArtist").append(Artists.Lexlay);					
				}
				else if(artistName == "Cesar"){
					$("#infoArtist").append(Artists.Cesar);					
				}
				else if(artistName == "Agatha Pher"){
					$("#infoArtist").append(Artists.Agatha);					
				}
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
