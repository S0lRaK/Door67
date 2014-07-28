var forms = {
	generalForm: function(){
		return '<h1>General</h1><div class="row_form_general"><label>Name</label><input type="text"/></div><div class="row_form_general"><label>Email</label><input type="text"/></div><div class="row_form_general"><label>Subject</label><input type="text"/></div><div class="row_form_textarea"><label>Messaje</label><textarea id="textareaFormGeneral"></textarea><button class="btn btn-warning btn-lg" id="btnSubmitGeneral">Submit</button></div>';
	},
	showcaseForm: function(){
		return '<h1>Showcase</h1><div class="row_form_general"><label>Name</label><input type="text"/></div><div class="row_form_general"><label>Email</label><input type="text"/></div><div class="row_form_general"><label>Subject</label><input type="text"/></div><div class="rowFormCalendar"><div class="colFormCalendar"><div id="datepicker"></div></div><div class="colFormCalendar"><div class="row_form_general"><label style="width:100%;">Choose one day</label></div><div class="row_form_general"><input type="text" id="inptDateShowcase" disabled="disabled"/></div><div class="row_form_general" > <label style="width:100%">A brief explanation</label> </div><div class="row_form_general"> <textarea  id="textareaFormShowcase"></textarea> </div></div></div><div class="row_form_general"> <button class="btn btn-warning btn-lg" id="btnSubmitShowcase">Submit</button></div>';
	},
	sendDemo: function(){
		return '<h1>Send Demo</h1><div class="row_form_general"><p>Looking to send a demo to Door67 for consideration? Please send an email with a private STREAMABLE & DOWNLOADABLE link to your music at: <label>demos@door67.com</label></p><img id="imgMoon" src="https://scontent-a-cdg.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1560496_689809134396522_1495269487_n.jpg?oh=c6dc63a85c3c1168f4755de1b6ca1e52&oe=543DF375" alt="logo" width="390px"/></div>';
	}
};

//<div class="calendar" data-color="normal"><div data-role="day" data-day="2013910"><div data-role="event" data-name="This is an event" data-start="9.00" data-end="9.30" data-location="The Web"></div></div></div>