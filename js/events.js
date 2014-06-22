$(document).ready(function(){
	btn_3D_Cick();
	function btn_3D_Cick(){
		$(".btn_3d").click(function(){
			$(this).parent().find("button").addClass("btn_3d").unbind();
			$(this).removeClass("btn_3d");
			$("#spinner").addClass("turnRight");
			if($(this).attr("id") == "btn_contact_general"){
				$("#face2").html("General");
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html("General");
					btn_3D_Cick();
				}, 2000);
			}
			else if($(this).attr("id") == "btn_contact_showcase"){
				$("#face2").html("ShowCase");
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html("ShowCase");
					btn_3D_Cick();
				}, 2000);
			}
			else if($(this).attr("id") == "btn_contact_demo"){
				$("#face2").html("Send Demo");
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html("Send Demo");
					btn_3D_Cick();
				}, 2000);
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
