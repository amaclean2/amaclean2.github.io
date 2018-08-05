let myEl = document.getElementById('actionBox');

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let today = new Date(),
	year = today.getFullYear(),
	month = today.getMonth(),
	day = today.getDate(),
	weekday = today.getDay(),
	todayString = days[weekday] + ' ' + months[month] + ' ' + day + ', ' + year;

myEl.innerHTML += '<div class="date">' + todayString + '</div>';

let functions = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 
				'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen', 'Twenty', 
				'TwentyOne', 'TwentyTwo', 'TwentyThree', 'TwentyFour', 'TewntyFive', 'TwentySix', 'TwentySeven', 
				'TwentyEight', 'TwentyNine', 'Thirty', 'ThirtyOne'];

function httpCall(filePath) {
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if ( this.readyState === 4 && this.status === 200 ) {
			myEl.innerHTML += this.responseText;
		}
	}

	xhttp.open('GET', filePath, true);
	xhttp.send();
}

function AugustFour() {

	httpCall('html/AugustFour.html');
}

function AugustFive() {

	httpCall('html/AugustFive.html');
}

function AugustSix() {

	httpCall('html/AugustSix.html');
}

let functionName = months[month] + functions[day];
this[functionName]();