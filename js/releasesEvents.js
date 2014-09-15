$(document).ready(function(){
	sizeCarrusel();
	releaseImageClick();
	carruselRightClick();
	function sizeCarrusel(){
		var carrusel = $("#adsCarrusel>ul");
		var countLi = $("#adsCarrusel>ul>li").length;
		var sizeUl = ($("#adsCarrusel>ul>li").height() * countLi) + (countLi * 2);
		console.log("count:" + countLi + ",heightLi:" + $("#adsCarrusel>ul>li").height() + ",sizeUl:" + sizeUl);
		$("#adsCarrusel>ul>li>img").height($("#adsCarrusel>ul>li").height());
		carrusel.attr("style", "width:" + sizeUl + "px");
	}
	function releaseImageClick(){
		$("#adsCarrusel ul li").click(function(){
			var img = $("#divImgActive>img");
			var heightActive = $("#divImgActive>img").height();
			var img2 = $(this).children();
			var activePosition = parseInt(img.attr("pos"));
			var noActivePosition = parseInt(img2.attr("pos"));
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
			if (activePosition == 1){
				$(this).parent().append($(this));
			}
			else if(activePosition == 2){
				if(activePosition == noActivePosition + 1){
					$(this).parent().append($(this));
				}
				else{
					$("img[pos=" + (activePosition - 1) + "]").parent().before($(this));
				}
			}
			else if (activePosition == noActivePosition + 1){
				$("img[pos=" + (activePosition - 2) + "]").parent().before($(this));
			}
			else{
				$("img[pos=" + (activePosition - 1) + "]").parent().before($(this));
			}
		});
	}
	function carruselRightClick(){
		$('.carrousel_right').click(function(){
			$(this).unbind();
			$("#adsCarrusel ul li").unbind();
	    	$('.carrousel_left').addClass('left_inactive');
	    	$('.carrousel_right').addClass('right_inactive');
	        var elementsCount=$('.carrousel_inner ul li').size();
	        var width=$('.caruselImg').width() + 2;
	        var position =$('.carrousel').attr('data-pos');
	        position=parseInt(position, 10);
	        var elementsCount=$('.carrousel ul li').size();
	        elementsCount=elementsCount -6;
	        if (position<elementsCount)
	        {
	        	if((position + 6) > elementsCount)
	        	{
	        		position = elementsCount;
	        	}
	        	else{
					position=position+6;        		
	        	}
	        	if(position == 6){
	        		carruselLeftClick();
	        	}
	            var pos=position*width;
	            $('.carrousel').attr('data-pos',position);
	            $('.carrousel_inner').animate(
	            	{
	            		'scrollLeft' : pos 
	        		}, 
	        		2500, 
	        		function(){
	            		$('.carrousel_left').removeClass('left_inactive');
	            		$('.carrousel_right').removeClass('right_inactive');
	            		carruselRightClick();
	            		releaseImageClick();
	            		if (position==elementsCount){
			                $('.carrousel_right').addClass('right_inactive');
			                $(".carrousel_right").unbind();
			            }
	            	}
	            );
	        }
    	});
	}
    function carruselLeftClick(){
    	$('.carrousel_left').click(function(){
    		$(this).unbind();
    		$("#adsCarrusel ul li").unbind();
    		$('.carrousel_left').addClass('left_inactive');
	    	$('.carrousel_right').addClass('right_inactive');
	    	var width=$('.caruselImg').width() + 2;
	        var position =$('.carrousel').attr('data-pos');
	        var elementsCount=$('carrousel_inner ul li').size();
	        position=parseInt(position, 10);
	        if (position>0)
	        {
	        	if(position == 31){
	        		position = position - 1;
	        	}
	        	else{
	        		position=position-6;	
	        	}
	            if(position == 30){
	        		carruselRightClick();
	        	}
	            var pos=position*width;
	            $('.carrousel').attr('data-pos',position);
	            $('.carrousel_inner').animate(
	            	{
	            		'scrollLeft' : pos 
            		}, 
            		2500,
            		function(){
            			$('.carrousel_left').removeClass('left_inactive');
	            		$('.carrousel_right').removeClass('right_inactive');
	            		carruselLeftClick();
	            		releaseImageClick();
	            		if(position==0)
		                {
		                    $('.carrousel_left').addClass('left_inactive');
		                    $('.carrousel_left').unbind();
		                }
            		});
	        }
    	});
    }
});