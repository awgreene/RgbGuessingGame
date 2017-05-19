/************************************************
Title Functions
************************************************/
var rgbDisplay = document.querySelector("#rgbDisplay");
function updateBanner() {
	rgbDisplay.innerHTML = boxes[selectRandomBox()].style.background
	banner.style.background = "blue";
}

var hard = true;
var banner = document.querySelector(".banner");

/************************************************
Option Functions
************************************************/
var options = document.querySelectorAll(".option");
for(var i = 0; i < options.length; i++){
	options[i].addEventListener("mouseover", function() {
		this.classList.toggle("option-hover");
	});
	options[i].addEventListener("mouseout", function() {
		this.classList.toggle("option-hover");
	});
}

var bEasy = document.querySelector("#bEasy");
var bHard = document.querySelector("#bHard");
bEasy.addEventListener("click", function() {
	hard = false;
	bEasy.classList.add("option-selected");
	bHard.classList.remove("option-selected");
	newGame();
});

bHard.addEventListener("click", function() {
	hard = true;
	bHard.classList.add("option-selected");
	bEasy.classList.remove("option-selected");
	newGame();
});


var bNew = document.querySelector("#bNew");
bNew.addEventListener("click", newGame);
function newGame(){
	changeBoxColors();
	updateBanner();
}

/************************************************
Box Functions
************************************************/
var boxes = document.querySelectorAll(".box");
for(var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", function() {
		if(this.style.backgroundColor === rgbDisplay.innerHTML) {
			win();
		} else {
			this.style.backgroundColor = "#232323";
		}
	});
}
function changeBoxColors() {
	for(var i = 0; i < boxes.length; i++) {
		if(!hard && i > 2) {
			hideBox(boxes[i]);
		} else {
			changeColor(boxes[i]);
		}
	}
}

function changeColor(box) {
	box.style.background = 'rgb(' + rgbColorArray().join(',') +')';
}

function hideBox(box) {
	box.style.background = '#232323';
}

function rgbColorArray() {
	return [rgbRandom(), rgbRandom(), rgbRandom()];
}

function rgbRandom() {
	return  Math.floor(Math.random() * 255);
}

function selectRandomBox() {
	if(hard) {
		return Math.floor(Math.random() * 6);
	}

	return Math.floor(Math.random() * 3);
}

function win() {
	console.log("YOU WIN!");
	for(var i = 0; i < boxes.length; i++) {
		if(!hard && i > 2) {
			hideBox(boxes[i]);
		} else {
			boxes[i].style.backgroundColor = rgbDisplay.innerHTML;
		}
	}
	banner.style.background = rgbDisplay.innerHTML;
}

/************************************************
Init Game
************************************************/
newGame();
