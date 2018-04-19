'use strict';
var start = 0;
var end = 6;
var colors = colorGenerator(end);
var squares = document.querySelectorAll('.square');
var picked = Math.floor(randomPick(start, end));
var correct = document.getElementById('colorDisplay').textContent = colors[picked];
var newColorButton = document.getElementById('newColors');
var makeEasy = document.getElementById('easy');
var makeHard = document.getElementById('hard');
var h1 = document.querySelector('h1');
var selected = document.querySelector('.selected');
var result = document.getElementById('result');
var btn = document.querySelectorAll('button');

//event listeners 
newColorButton.addEventListener("click", function() {
	if (makeEasy.className === 'selected'){
		easyMode.bind(makeEasy)();
	} else {
		hardMode.bind(makeHard)();
	}
});

makeEasy.addEventListener('click', easyMode);

makeHard.addEventListener('click', hardMode);


// difficulty mode functions
function easyMode() {
	end = 3;
	changeColor();
	clear();
	if (this) {
		this.classList.add('selected');
	}
	makeHard.classList.remove('selected');
	h1.style.background = 'steelBlue';
	result.textContent = 'Let\'s Begin!';
}

function hardMode() {
	end = 6;
	changeColor();
	listColors();
	this.classList.add('selected');
	makeEasy.classList.remove('selected');
	h1.style.background = 'steelBlue';
	result.textContent = 'Let\'s Begin!';
}


function clear() {
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = 'none';
		}
	}
}

function changeColor() {
	colors = colorGenerator(end);
	picked = Math.floor(randomPick(start, end));
	correct = document.getElementById('colorDisplay').textContent = colors[picked];
}

function randomColor() {
	return Math.floor(Math.random() * (256));
}

function colorGenerator(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		var r = randomColor();
		var g = randomColor();
		var b = randomColor();
		arr.push('rgb(' + r + ', ' + g + ', ' + b + ')');
	};
	return arr;
}


function randomPick(min, max) {
  return Math.random() * (max);
}

var sameColor = function() {
	// for (var i = 0; i < btn.length; i++) {
	// 	btn[i].style.color = correct;
	// }

	// selected.style.backgroundColor = correct;
	for (var i = 0; i < end; i++) {
		squares[i].style.backgroundColor = correct;
	}
}

function listColors() {
	for (var i = 0; i < colors.length; i++) {
		//add initial colors to squares
		squares[i].style.display = 'initial';
		squares[i].style.backgroundColor = colors[i];
		//add eventlisteners to squares

		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === correct) {
				result.textContent = 'correct';
				h1.style.backgroundColor = correct;
				sameColor();
			} else {
				this.style.background = '#232323';
				result.textContent = 'wrong';
			}
		});
	}
}
listColors();


