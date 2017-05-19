/************************************************
Title Functions
************************************************/
var rgbDisplay = document.querySelector("#rgbDisplay");
function updateBanner() {
	rgbDisplay.innerHTML = boxes[selectRandomBox()].style.background
}

var isEasy = true;


/************************************************
Option Functions
************************************************/
var options = document.querySelectorAll(".option");
for(var i = 0; i < options.length; i++){
	options[i].addEventListener("mouseover", function() {
		this.classList.toggle("focus");
	});
	options[i].addEventListener("mouseout", function() {
		this.classList.toggle("focus");
	});
}


var bNew = document.querySelector("#bNew");
bNew.addEventListener("click", newGame);
function newGame(){
	changeAllBoxColors();
	updateBanner();
}

/************************************************
Box Functions
************************************************/
var boxes = document.querySelectorAll(".box");
for(var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", function() {
		console.log("clicked box: " + console.log(this.style.backgroundColor));
		console.log("target: " + rgbDisplay.innerHTML);
		if(this.style.backgroundColor === rgbDisplay.innerHTML) {
			alert("YOU WIN!!!");
		} else {
			alert("Wrong color!!!");
		}
	});
}
function changeAllBoxColors() {
	for(var i = 0; i < boxes.length; i++) {
		changeColor(boxes[i]);
	}
}

function changeColor(box) {
	box.style.background = 'rgb(' + rgbColorArray().join(',') +')';
}

function rgbColorArray() {
	return [rgbRandom(), rgbRandom(), rgbRandom()];
}
function rgbRandom() {
	return  Math.floor(Math.random() * 255);
}

function selectRandomBox() {
	return Math.floor(Math.random() * 6);
}


/************************************************
Init Game
************************************************/
newGame();