$(document).ready(function(){
	ContactModal_Click();
	// exececute function to add a click envent on modal buttons
	function ContactModal_Click(){
		$("#face1").empty();
		$("#face1").html(forms.generalForm());
		btn_3D_Cick();
		ButtonSubmit_Click();
	}
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
					$("#face2").empty();
					btn_3D_Cick();
					ButtonSubmit_Click();
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
					PrevNextMonth_Click();
					ButtonSubmit_Click();
				}, 1000);
			}
			else if($(this).attr("id") == "btn_contact_demo"){
				$("#face2").html(forms.sendDemo());
				setTimeout(function(){
					$("#spinner").removeClass("turnRight");
					$("#face1").html(forms.sendDemo());
					$("#face2").empty();
					btn_3D_Cick();
				}, 1000);
			}
			
		});
	}
	//add event click to all days on calendar, which is on showcase form
	function DateCalendar_Click(){
		$(".ui-state-default").parent().click(function(){
			year= $(this).attr("data-year");
			month = $(this).attr("data-month");
			day = $(this).find(".ui-state-default").text();
			$("#inptDateShowcase").val("");
			$("#inptDateShowcase").val(day + "/" + (parseInt(month) + 1) + "/" + year);
			$(".ui-state-default").unbind();
			DateCalendar_Click();
			PrevNextMonth_Click();
		});
	}
	//add event click to both selector month on calendar, which is on showcase form
	function PrevNextMonth_Click(){
		$(".ui-datepicker-next, .ui-datepicker-prev").click(function(){
			$(".ui-state-default").unbind();
			DateCalendar_Click();
			PrevNextMonth_Click();
		});
	}
	
	function ButtonSubmit_Click(){
		$(".btnSubmit").click(function(){
			ValidateAllForm("face1", "row_form_general", "inptEmail", "textareaForm", $("#face1").children("h1").text());	
		});
	}
	/* GLOBAL VALIDATOR FUNTIONS */
	/* function that evalue all fileds are fill in */
	function ValidateAllForm(idTotal, section){
		arrayRows = new Array();
		arrayRows = $("#" + idTotal).find("." + section);
		for(i=0 ; i < arrayRows.length ; i++){
			if($(arrayRows[i]).children("input").length == 1){
				if(ValidateFullFiled($(arrayRows[i]).children("input").attr("id")) == false){
					console.log("You should fill in all fields, please.");
					return;
				}				
			}
		}
		console.log("Your email has been sent.");
	}
	/* function that evalue all fileds are fill in and correct email*/
	function ValidateAllForm(idTotal, section, idEmail){
		arrayRows = new Array();
		arrayRows = $("#" + idTotal).find("." + section);
		for(i=0 ; i < arrayRows.length ; i++){
			if($(arrayRows[i]).children("input").length == 1){
				if(ValidateFullFiled($(arrayRows[i]).children("input").attr("id")) == false){
					console.log("You should fill in all fields, please.");
					return;
				}				
			}
		}
		if(ValidateEmail(idEmail) == false){
			console.log("You should put a correct email, please.");
			return;
		}
		console.log("Your email has been sent.");
	}
	/* function that evalue all fileds are fill in, a correct email and textarea fill in*/
	function ValidateAllForm(idTotal, section, idEmail, textarea, titleFormH1){
		arrayRows = new Array();
		arrayRows = $("#" + idTotal).find("." + section);
		for(i=0 ; i < arrayRows.length ; i++){
			if($(arrayRows[i]).children("input").length == 1){
				if(ValidateFullFiled($(arrayRows[i]).children("input").attr("id")) == false){
					console.log("You should fill in all fields, please.");
					return;
				}				
			}
		}
		if(ValidateEmail(idEmail) == false){
			console.log("You should put a correct email, please.");
			return;
		}
		if(ValidateFullFiled($("." + textarea).attr("id")) == false){
			console.log("You should fill in a brief mesaje, please.");
			return;
		}
		if(titleFormH1 == "General"){
			/*SendAjax4(
						"name",
						$("#inptName").val(),
						"email",
						$("#inptEmail").val(),
						"subject",
						$("#inptSubject").val(),
						"mesaje",
						$("#textareaFormGeneral").val(),
						"sendFormGeneral", 
						function(xmlhttp){
							alert(xmlhttp.responseText);
							//$("#div_content_espacioOcupado").html(xmlhttp.responseText);
						}
			); 
			*/
		}
		else{
			
		}
		console.log("Your email has been sent.");
	}
// MAIN VIDEO
/*
	<iframe class="embed-responsive-item" id="videoBackground" src="http://www.youtube.com/embed/g0NHDmvkc78?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;html5=1&amp;allowfullscreen=true&amp;wmode=transparent" allowfullscreen></iframe>
*/	
/* AJAX FUNCTIONS */
function SendAjax4(x, xValue, y, yValue, z, zValue, r, rValue, url, FinalFunction)
{
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
  	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	  {
		 FinalFunction(xmlhttp);
	  }
  };
  xmlhttp.open("GET", url +".php?"+ x + "="+xValue+"&"+y+"="+yValue+"&"+z+"="+zValue+"&"+r+"="+rValue,true);
  xmlhttp.send();
}

function SendAjax5(x, xValue, y, yValue, z, zValue, r, rValue, s, sValue, url, FinalFunction)
{
  if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
  }
  else
  {// code for IE6, IE5
  	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function()
  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	  {
		 FinalFunction(xmlhttp);
	  }
  };
  xmlhttp.open("GET", url +".php?"+ x + "="+xValue+"&"+y+"="+yValue+"&"+z+"="+zValue+"&"+r+"="+rValue,true);
  xmlhttp.send();
}
/* Functions for validate forms*/

function ValidateFullFiled(id){
	if($("#" + id).val() == "" || $("#" + id).val() == null){
		return false;
	}
	else{
		return true;
	}
}

function ValidateEmail(id){
	var x = $("#"+id).val();
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    else{
    	return true;
    }
}
});
