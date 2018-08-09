function renderCalendar(date) {

	today = date;
	year = today.getFullYear();
	month = today.getMonth();
	day = today.getDate();
	weekday = today.getDay();
	todayString = days[weekday] + ' ' + months[month] + ' ' + day + ', ' + year;

	functionName = months[month] + functions[day];

	let dateObj = document.getElementById('date');

	if ( dateObj ) {
		dateObj.innerHTML = todayString;
	}
	else {
		myEl.innerHTML += '<div class="date" id="date">' + todayString + '</div>';
	}
}

function showSkipButtons() {
	let skipButton = document.getElementById('parentButton'),
		buttonBox = document.getElementById('buttonBox');

	skipButton.classList.add('hidden-buttons');
	buttonBox.classList.remove('hidden-buttons');
}

function moveBack() {
	today.setDate(today.getDate() - 1);
	httpCall(today);

	document.getElementById('forewardButton').disabled = false;

	let disabled = today.getTime();
	disabled = new Date(disabled);
	disabled.setDate(disabled.getDate() - 1);
	disabled = disabled.getTime();
	if(disabled < 1533366000000) {
		document.getElementById('backButton').disabled = true;
	}
}

function moveForewards() {
	today.setDate(today.getDate() + 1);
	httpCall(today);

	document.getElementById('backButton').disabled = false;

	let disabled = today.getTime();
	disabled = new Date(disabled);
	disabled.setDate(disabled.getDate() + 1);
	disabled = disabled.getTime();
	if(disabled > new Date().getTime()) {
		document.getElementById('forewardButton').disabled = true;
	}
}

function httpCall(date) {

	renderCalendar(date);

	let xhttp = new XMLHttpRequest(),
		file = 'html/' + functionName + '.html';

	xhttp.onreadystatechange = function() {
		if ( this.readyState === 4 && this.status === 200 ) {
			let body = document.getElementById('lessonBody');
			if ( body ) {
				body.innerHTML = this.responseText;
			} else {
				myEl.innerHTML += '<div id="lessonBody">' + this.responseText + '</div>';
			}
		}
	}

	xhttp.open('GET', file, true);
	xhttp.send();
}

let myEl = document.getElementById('actionBox');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	functions = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 
				'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 
				'TwentyOne', 'TwentyTwo', 'TwentyThree', 'TwentyFour', 'TewntyFive', 'TwentySix', 'TwentySeven', 
				'TwentyEight', 'TwentyNine', 'Thirty', 'ThirtyOne'];

let today, year, month, day, weekday, todayString, functionName;

let date = new Date();
date.setDate(date.getDate() + 3);

httpCall(date);