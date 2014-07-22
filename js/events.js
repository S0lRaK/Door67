$(document).ready(function(){
	// exececute function to add a click envent on modal buttons
	btn_3D_Cick();
	
	//declare function wich add event to modal button
	function btn_3D_Cick(){
		$(".btn_3d").click(function(){
			$(this).parent().find("button").addClass("btn_3d").unbind();
			$(this).removeClass("btn_3d");
			$("#spinner").addClass("turnRight");
			if($(this).attr("id") == "btn_contact_general"){
				$("#face2").html(forms.generalForm());
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html(forms.generalForm());
					btn_3D_Cick();
				}, 1000);
			}
			else if($(this).attr("id") == "btn_contact_showcase"){
				$("#face2").html(forms.showcaseForm());
				$( "#datepicker" ).datepicker();
				$(".ui-state-active").removeClass("ui-state-active");
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html(forms.showcaseForm());
					$("#face2").empty();
		    		$( "#datepicker" ).datepicker();
					btn_3D_Cick();
					$(".ui-state-active").removeClass("ui-state-active");
					DateCalendar_Click();
				}, 1000);
			}
			else if($(this).attr("id") == "btn_contact_demo"){
				$("#face2").html(forms.sendDemo());
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html(forms.sendDemo());
					btn_3D_Cick();
				}, 1000);
			}
			
		});
	}
	function DateCalendar_Click(){
		$(".ui-state-default").parent().click(function(){
			year= $(this).attr("data-year");
			month = $(this).attr("data-month");
			day = $(this).find(".ui-state-default").text();
			$("#inptDateShowcase").val("");
			$("#inptDateShowcase").val(day + "/" + month + "/" + year);
			$(".ui-state-default").unbind();
			DateCalendar_Click();
		});
	}
	/*$("#btn_contact_general").unbind();
	$("#btn_contact_showcase").click(function(){
		$(this).parent().find("button").bind("click");
		$(this).unbind();
		$("#spinner").addClass("turnRight");
		$("#face2").html("ShowCase");
		setTimeout(function(){
			$("#spinner").removeClass("turnRight");
			$("#face1").html("ShowCase");
		}, 2000);
	});
	$("#btn_contact_general").click(function(){
		$(this).parent().find("button").bind("click");
		$(this).unbind();
		$("#spinner").addClass("turnRight");
		$("#face2").html("General");
		setTimeout(function(){
			$("#spinner").removeClass("turnRight");
			$("#face1").html("General");
		}, 2000);
	});*/

// MAIN VIDEO
/*
	<iframe class="embed-responsive-item" id="videoBackground" src="http://www.youtube.com/embed/g0NHDmvkc78?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;html5=1&amp;allowfullscreen=true&amp;wmode=transparent" allowfullscreen></iframe>
*/	
});
