var RandomNumber;
var gem1;
var gem2;
var gem3;
var gem4;
var total = 0;
var winCounter = 0;
var lossCounter = 0;


function getRandomNumber() {
    randomNumber = 0;
    RandomNumber = Math.floor(Math.random() * 101) + 19;
    //console.log(RandomNumber);
    $('#randomNumGen').text(RandomNumber);
}
getRandomNumber();

function randomGemValue() {
    gem1 = Math.floor((Math.random() * 12) + 1);
    gem2 = Math.floor((Math.random() * 12) + 1);
    gem3 = Math.floor((Math.random() * 12) + 1);
    gem4 = Math.floor((Math.random() * 12) + 1);
    //console.log(gem1);
    //console.log(gem2);
    //console.log(gem3);
    //console.log(gem4);
    $('.gem1').val(gem1);
    //console.log(gem1);
    $('.gem2').val(gem2);
    //console.log(gem2);
    $('.gem3').val(gem3);
    //console.log(gem3);
    $('.gem4').val(gem4);
    //console.log(gem4);
}
randomGemValue();

function reset() {
    getRandomNumber();
    randomGemValue();
    total = 0;
    $('.myNumber').html(total);
    //sending value to html

}




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
        setTimeout('reset()', 2000);

    }
    if (total > RandomNumber) {
        lossCounter++;
        $('#losses').html("Losses: " + lossCounter);
        alert("Game Over! Try Again!");
        setTimeout('reset()', 2000);

    }
});

//1)Hard worker, punctual person, if I dont know thw answer to something I will research it till i find the answer that I am looking for. 
//2) 
//3)
