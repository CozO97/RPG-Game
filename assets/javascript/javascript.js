var RandomNumber;
var gemNumber = [];
var total = 0;
var winCounter = 0;
var lossCounter = 0;

$(document).ready(function(){
		RandomNumber = Math.floor(Math.random() * 50) + 49;
		//console.log(RandomNumber);
		$('#randomNumGen').text(RandomNumber);

		});

