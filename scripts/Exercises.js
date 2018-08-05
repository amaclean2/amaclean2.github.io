let myEl = document.getElementById('actionBox');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let today = new Date(),
	year = today.getFullYear(),
	month = today.getMonth(),
	day = today.getDate() + 1,
	weekday = today.getDay(),
	todayString = days[weekday] + ' ' + months[month] + ' ' + day + ', ' + year;

myEl.innerHTML += '<div class="date">' + todayString + '</div>';

let functions = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 
				'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 
				'TwentyOne', 'TwentyTwo', 'TwentyThree', 'TwentyFour', 'TewntyFive', 'TwentySix', 'TwentySeven', 
				'TwentyEight', 'TwentyNine', 'Thirty', 'ThirtyOne'];

function AugustFour() {

	myEl.innerHTML += '<div class="focus">let newArr = [5, 4, 3, 2, 1];</div>';
	myEl.innerHTML += `An array is a data object to group a list of emements. <br />
					   Each item in an array is called an element.	<br />
					   In programming you count elements starting from 0, so '5' would be the 0-th element, '4' the first and so on.<br />
					   You access this by calling newArr[0]. <br />`;
	myEl.innerHTML += '<div class="focus">let element = newArr[3]; // 2';

}

function AugustFive() {
	myEl.innerHTML += `<div class="focus">This will be more instructions than a lesson</div>
					   Go here and download this program.<br />
					   <a href="https://www.sublimetext.com/3" target="_blank" class="download-button">Sublime</a><br />
					   Mac OS:<br />
					   <code class="keys">command + space</code>, type "terminal" press enter, then type the following commands
					   <div class="center-this"><code>cd ~/Desktop</code><br /><br />
					   <code>mkdir TheLessonBox</code><br /><br />
					   <code>cd TheLessonBox</code><br /><br />
					   <code>ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime</code><br /><br />
					   <code>sublime .</code><br /><br />
					   <code class="keys">command + s</code><br /><br />
					   Save as ExerciseOne.py<br /></div>`;
					   // Windows:<br />
					   // I'll have the instructions tomorrow...
					   // Press the Windows key, type Command Prompt and hit enter
					   // <div class="center-this"><code>cd ~/Desktop</code><br />
					   // <code>mkdir TheLessonBox</code><br />
					   // <code>cd TheLessonBox</code><br />
					   // <code>ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime</code><br />
					   // <code>sublime .</code><br /></div>`;
}

function AugustSix() {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = (response) => {
		if (this.readyState === 4 && this.status === 200 ) {
			myEl.innerHTML = this.responseText;
		}
	}

	xhttp.open('GET', 'html/data.json', true);
	xhttp.send();
}

let functionName = months[month] + functions[day];
this[functionName]();