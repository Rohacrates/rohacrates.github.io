function flicker () {
	var divs = document.getElementsByTagName('div');
	var i;
	var opacity = 1 - (Math.random() / 4);
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.opacity = opacity;
	}
	setTimeout(flicker, 10);
}