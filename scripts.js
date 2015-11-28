var animComplete = 0;

function flicker (toFlicker) {
	var i;
	var opacity = 1 - (Math.random() / 4);
	for (var i = 0; i < toFlicker.length; i++) {
		toFlicker[i].style.opacity = opacity;
	}
}

function hide (toHide) {
	var i;
	for (var i = 0; i < toHide.length; i++) {
		toHide[i].style.opacity = 0;
	}
}

function draw () {
	if (animComplete) {
		flicker(document.getElementsByTagName('div'));
	} else {
		hide(document.getElementsByClassName('menu'));
		flicker(document.getElementsByClassName('splash'));	
	}
	setTimeout(draw, 10);
}

function load () {
	
}