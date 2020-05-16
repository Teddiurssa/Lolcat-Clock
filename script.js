var isPartyTime = false;
var time = new Date().getHours();
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var messageText;
var partyTimeButton = document.getElementById("partyTimeButton");

//Clock Function

var updateClock = function () {
	var lolCatImage = document.getElementById('lolcat');
	var messageJs = document.getElementById('timeEvent');
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

	if (time == partyTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
		messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "IZ NAP TIME…";
	} else if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "IZ TIME TO GET TUP.";
	} else if (time < noon) {
		messageText = "Good morning!";
	} else if (time > evening) {
		messageText = "Good Evening!";
	} else {
		messageText = "Good afternoon!";
	}
	messageJs.innerText = messageText;
	lolCatImage.src = image;

	var showCurrentTime = function () {
		var clock = document.getElementById('clock');
		var currentTime = new Date();
		var hours = currentTime.getHours();
		var mintues = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridian = "AM";
		//sets up hours
		if (hours >= noon) {
			meridian = "PM";
		}
		if (hours > noon) {
			hours = hours - 12;
		}
		//set up mintues
		if (mintues < 10) {
			mintues = "0" + mintues;
		}
		//set seconds
		if (seconds < 10) {
			seconds = "0" + seconds;
		}
		//time display
		var clockTime = hours + ":" + mintues + ":" + seconds + " " + meridian + "!";
		clock.innerText = clockTime;
	};

	showCurrentTime();
};
updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

///Party Button function
var partyEvent = function () {
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyTimeButton.innerText = "Party Over";
		partyTimeButton.style.background = "#0A8DAB";
	} else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButton.innerText = "PARTY TIME!";
		partyTimeButton.style.background = "#222";
	}
};
partyTimeButton.addEventListener("click", partyEvent);


//selector code

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function () {
	wakeupTime = wakeUpTimeSelector.value;
};

var lunchEvent = function () {
	lunchTime = lunchTimeSelector.value;
};

var napEvent = function () {
	napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);