window.onLoad = init;

function init () {
	window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
	alert("got this far");
	window.requestFileSystem(window.TEMPORARY, 5*1024*1024, alert("Welcome to Filesystem! It's showtime :)"));
	alert("complete");
}

function initFS(fs){
	alert("Welcome to Filesystem! It's showtime :)"); // Just to check if everything is OK :)
  // place the functions you will learn bellow here
}

function errorHandler(){
	alert('An error occured');
}