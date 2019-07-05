// selects the numbers for each button with the random number being between(19-120)
$(document).ready(function(){
    var Random = Math.floor(Math.random()*101+19)
// Displays the random number in id randNum in the html
    $('#randNum').text(Random); 
// selects the numbers for the four buttons being between(1-12)
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
// set the variubles for the wins/loss/usertotal
var userTotal= 0;
var wins= 0;
var losses=0;

}