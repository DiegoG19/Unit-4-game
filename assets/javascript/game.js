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
// Set the markers for the wins and losses
$('#wins').text(wins);
$('#losses').text(losses);
// Set the function for reset for game
function reset() {
    Random = Math.floor(Math.random()*101+19)
    $('#randNum').text(Random);
    num1= Math.floor(Math.random()*11+1)
    num2= Math.floor(Math.random()*11+1)
    num3= Math.floor(Math.random()*11+1)
    num3= Math.floor(Math.random()*11+1)
    userTotal= 0;
    $('finaltotal').text(userTotal)
}
function win(){
    wins++;
    $('#wins').text(wins);
    reset();
}
function loss(){
    losses++;
    $('#losses').text(losses);
    reset();
}
// set the on click value for the images
$('#one').on ('click', function(){
    userTotal = userTotal + num1;
    $('#finaltotal').text(userTotal);
    if(userTotal === Random){
        win();
    }
    else if (userTotal > Random){
        loss();
    }
    })  
    $('#two').on ('click', function(){
        userTotal = userTotal + num2;
        $('#finaltotal').text(userTotal);
        if(userTotal === Random){
            win();
        }
        else if (userTotal > Random){
            loss();
        }
    })
     $('#three').on ('click', function(){
        userTotal = userTotal + num3;
        $('#finaltotal').text(userTotal);
         if(userTotal === Random){
             win();
          }
         else if (userTotal > Random){
             loss();
            }
        })
     $('#four').on ('click', function(){
         userTotal = userTotal + num4;
         $('#finaltotal').text(userTotal);
         if(userTotal === Random){
             win();
         }
         else if (userTotal > Random){
             loss();
         }
        });
});
    