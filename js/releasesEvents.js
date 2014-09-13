$(document).ready(function(){
	function sizeCarrusel(){
		var carrusel = $("#adsCarrusel>ul");
		var countLi = $("#adsCarrusel>ul>li").length;
		var sizeUl = ($("#adsCarrusel>ul>li").height() * countLi) + (countLi * 2);
		console.log("count:" + countLi + ",heightLi:" + $("#adsCarrusel>ul>li").height() + ",sizeUl:" + sizeUl);
		$("#adsCarrusel>ul>li>img").height($("#adsCarrusel>ul>li").height());
		//carrusel.width(sizeUl); 
		carrusel.attr("style", "width:" + sizeUl + "px");
	}
	function releaseImageClick(){
		$("#adsCarrusel ul li").click(function(){
			var img = $("#divImgActive>img");
			var heightActive = $("#divImgActive>img").height();
			var img2 = $(this).children();
			img2.height(heightActive);
			img.addClass("caruselImg");
			$("#releaseActive").html('<div class="col-md-1"></div><div class="col-md-3" id="divImgActive"></div><div class="col-md-1"></div><div class="col-md-6"><div class="row"><div class="col-md-12"><h2 id="h2Title"></h2><h3 id="h3Artist"></h3></div></div><div class="row"><div class="col-md-12"><p id="pDescription"></p></div></div></div><div class="col-md-1"></div>');
			$(this).children().removeClass("caruselImg").addClass();
			$("#divImgActive").append(img2);
			$("#pDescription").text(img2.attr("description"));
			$("#h2Title").text(img2.attr("title"));
			$("#h3Artist").text(img2.attr("artist"));
			img.height($("#adsCarrusel>ul>li").height());
			$(this).append(img);
			//$("#adsCarrusel>ul>li>img").height();
		});
	}
	sizeCarrusel();
	releaseImageClick();
    $('.carrousel_right').click(function(){
        var elementsCount=$('carrousel_inner ul li').size();
        var width=$('.caruselImg').width() + 2;
        var position =$('.carrousel').attr('data-pos');
        position=parseInt(position, 10);
        var elementsCount=$('.carrousel ul li').size();
        elementsCount=elementsCount -6;
        if (position<elementsCount)
        {
            position=position+1;
            $('.carrousel_left').removeClass('left_inactive');
            if (position==elementsCount){
                $(this).addClass('right_inactive');
            }
            var pos=position*width;
            $('.carrousel').attr('data-pos',position);
            $('.carrousel_inner').animate({'scrollLeft' : pos });
        }
    });

    $('.carrousel_left').click(function(){
    	var width=$('.caruselImg').width() + 2;
        var position =$('.carrousel').attr('data-pos');
        var elementsCount=$('carrousel_inner ul li').size();
        position=parseInt(position, 10);
        if (position>0)
        {
            $('.carrousel_right').removeClass('right_inactive');
            position=position-1;
            if(position==0)
                {
                    $(this).addClass('left_inactive');
                }
            var pos=position*width;
            $('.carrousel').attr('data-pos',position);
            $('.carrousel_inner').animate({'scrollLeft' : pos });
        }
    });
});