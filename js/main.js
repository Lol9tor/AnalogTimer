window.onload = function() {		
	var clock = {		
		dial : document.getElementById('dial'),
		minutes : document.getElementById('minutes'),
		seconds : document.getElementById('seconds'),
		timerId: null,
		timeCounter: 0	
	}	
	clock.dial.style.zIndex = 25;
	clock.minutes.style.zIndex = 50;
	clock.seconds.style.zIndex = 100;
	clock.seconds.position = 0;
	clock.minutes.position = 0;
	var start = document.getElementById('start');
	start.onclick = function(){
		getResult(0);
		if (clock.timerId) {
			return false;
		}
		clock.timerId = window.setInterval(rotatePointers, 1000);
	}	
	var stop = document.getElementById('stop');
	stop.onclick = function(){
		getResult(clock.timeCounter);
		stopTimer();		
	}
	
	function rotatePointers(){
		clock.timeCounter++;
		var s = 6 // degrees per seconds for seconds pointer
		var m = 0.1 // degrees per seconds for minutes pointer  	
		clock.seconds.position += s;
		clock.minutes.position += m;	
		clock.seconds.style.webkitTransform = "rotate("+ clock.seconds.position +"deg)";
		clock.minutes.style.webkitTransform = "rotate("+ clock.minutes.position +"deg)";						
	}
	function stopTimer(){		
		window.clearInterval(clock.timerId);		
		clock.timerId = null;
		clock.timeCounter = 0;
		clock.minutes.position = 0;
		clock.seconds.position = 0;
		clock.seconds.style.webkitTransform = "rotate("+ clock.seconds.position +"deg)";
		clock.minutes.style.webkitTransform = "rotate("+ clock.minutes.position +"deg)";		
	}
	function getResult(time){
		var result = document.getElementById('result');	
		result.innerHTML = "<b>Minutes: "+Math.floor(time/60)+" Seconds: "+time%60+"</b>";
	}	
}