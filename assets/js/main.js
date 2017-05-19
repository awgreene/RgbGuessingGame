
/************************************************
Title Functions
************************************************/
var rgbDisplay = document.querySelector("#rgbDisplay");
function updateBanner() {
	rgbDisplay.innerHTMLboxes[selectRandomBox()].style.background;
}


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

/************************************************
Box Functions
************************************************/
var boxes = document.querySelectorAll(".box");
changeAllBoxColors();
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
