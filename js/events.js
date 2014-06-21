$(document).ready(function(){
	$("#btn_contact_showcase").click(function(){
		$(this).attr("disabled", "disabled");
		$("#spinner").addClass("onetotwo");
		setTimeout(function(){
			$("#spinner").removeClass("onetotwo");
			$("#face1").html("2");
			
		}, 2000);
	});
});
