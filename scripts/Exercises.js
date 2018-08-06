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

let functionName = months[month] + functions[day];

function httpCall() {
	let xhttp = new XMLHttpRequest(),
		file = 'html/' + functionName + '.html';

	xhttp.onreadystatechange = function() {
		if ( this.readyState === 4 && this.status === 200 ) {
			myEl.innerHTML += this.responseText;
		}
	}

	xhttp.open('GET', file, true);
	xhttp.send();
}

httpCall();