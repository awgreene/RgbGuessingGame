/************************************************
Title Functions
************************************************/
var hard = true;

var banner = document.querySelector(".banner");
var rgbDisplay = document.querySelector("#rgbDisplay");
function updateBanner() {
	rgbDisplay.innerHTML = boxes[selectRandomBox()].style.background;
	banner.style.background = "steelblue";
}

/************************************************
Option Functions
************************************************/
var options = document.querySelectorAll(".option");
var winnerMessage = document.querySelector("#winner");
for(var i = 0; i < options.length; i++){
	options[i].addEventListener("mouseover", function() {
		this.classList.toggle("option-hover");
	});
	options[i].addEventListener("mouseout", function() {
		this.classList.toggle("option-hover");
	});
}

var bEasy = document.querySelector("#bEasy");
bEasy.addEventListener("click", function() {
	hard = false;
	bEasy.classList.add("option-selected");
	bHard.classList.remove("option-selected");
	newGame();
});

var bHard = document.querySelector("#bHard");
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
	bNew.textContent="New colors";
	winnerMessage.style.color="white";
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
		hideBox(boxes[i]);
	}
	activeBoxArray().forEach(function(box){
		changeColor(box);
	});
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
function hideBox(box) {
	box.style.background = '#232323';
}

function selectRandomBox() {
	if(hard) {
		return Math.floor(Math.random() * 6);
	}
	return Math.floor(Math.random() * 3);
}

function activeBoxArray() {
	var rtn = [];
	var arraySize = 6;
	if(!hard) {
		arraySize = 3;
	}
	for(var i = 0; i < arraySize; i++) {
		rtn.push(boxes[i]);
	}
	return rtn;
}

/************************************************
Win Condition
************************************************/
function win() {
	console.log("YOU WIN!");
	activeBoxArray().forEach(function(box){
		box.style.backgroundColor = rgbDisplay.innerHTML;
	});
	banner.style.background = rgbDisplay.innerHTML;
	bNew.textContent="Play again?";
	winnerMessage.style.color="black";
}

/************************************************
Init Game
************************************************/
newGame();
