var RandomNumber;
var gemNumber = [];
var total = 0;
var winCounter = 0;
var lossCounter = 0;

$(document).ready(function() {

    RandomNumber = Math.floor(Math.random() * 50) + 49;
    //console.log(RandomNumber);
    $('#randomNumGen').text(RandomNumber);

});

for (i = 0; i < 4; i++) {
    gemNumber[i] = Math.floor(Math.random() * 11) + 1;
}
//gemNumber.push(gemNumber[i]);
//console.log(gemNumber);


$('.gem1').val(gemNumber[0]);
$('.gem2').val(gemNumber[1]);
$('.gem3').val(gemNumber[2]);
$('.gem4').val(gemNumber[3]);
console.log(gemNumber[0]);
console.log(gemNumber[1]);
console.log(gemNumber[2]);
console.log(gemNumber[3]);

total = 0;
$('.myNumber').html(total);

$('button').click(function() {
    console.log(this);
    total = parseInt(total) + parseInt($(this).val());
    $('.myNumber').html(total);

    if (total === RandomNumber) {
        winCounter++;
        $("#wins").html("Wins: " + winCounter);
        //console.log(winCounter);
        alert("You have Won!!!");
    }
    if (total > RandomNumber) {
        lossCounter++;
        $('#losses').html("Losses: " + lossCounter);
        alert("Game Over! Try Again!")
        setInterval('window.location.reload()', 3000);
    }
});
