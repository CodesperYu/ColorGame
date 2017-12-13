var colors = [
	'rgb(255, 0, 0)',
	'rgb(0, 255, 0)',
	'rgb(0, 0, 255)',
	'rgb(255, 255, 0)',
	'rgb(255, 0, 255)',
	'rgb(0, 255, 255)',
];

var start = 0;
var end = 6;
var squares = document.querySelectorAll('.square')
var randomPick = function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var picked = Math.floor(randomPick(start, end));
document.getElementById('colorDisplay').textContent = colors[picked];

for (var i = 0; i < colors.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add eventlisteners to squares
	squares[i].addEventListener("click", function() {
		console.log(this.style.backgroundColor);
	});
}