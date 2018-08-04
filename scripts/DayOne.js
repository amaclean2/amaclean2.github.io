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


myEl.innerHTML += '<div class="focus">let newArr = [5, 4, 3, 2, 1];</div>';
myEl.innerHTML += `An array is a data object to group a list of emements. <br />
				   Each item in an array is called an element.	<br />
				   In programming you count elements starting from 0, so '5' would be the 0-th element, '4' the first and so on.<br />
				   You access this by calling newArr[0]. <br />`;
myEl.innerHTML += '<div class="focus">let element = newArr[3]; // 2';