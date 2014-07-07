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
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html(forms.showcaseForm());
					btn_3D_Cick();
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
});
