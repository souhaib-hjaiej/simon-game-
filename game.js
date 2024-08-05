var buttoncolor = ["red", "blue", "green", "yellow"];
var pattern = [];
var userClickedPattern =[];
var keyPressed = false;
var level=0;
var started =false;


$(document).keypress(function(e) {
    if(!started){
   $('h1').text('level  '+level);
   newsequence();
    started= true;}
});
function playSound(name){
    var audio = new Audio('sounds/'+name+'.mp3');
    audio.play();
  }
function animatePress(currentColour){
$('#' +currentColour).addClass('pressed');
}  

function checkAnswer(currentLevel){
   if(pattern[currentLevel]===userClickedPattern[currentLevel])
   {
   console.log('success');
      if(pattern.length===userClickedPattern.length){
       setTimeout(() => {
           newsequence();    
    }, 1000);
   }

   }
   else{
    playSound('wrong');
    $("body").addClass("game-over");
    setTimeout(()=> {
        $("body").removeClass("game-over")},250);
        $("h1").text("game over presse key to start again");
        startover();
    }
   }


$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    animatePress(userChosenColour);
   
    setTimeout(() => {
        $('#'+userChosenColour).removeClass("pressed");
    }, 100);
   
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    playSound(userChosenColour);
    console.log(userClickedPattern); 
  });
 


function newsequence() {
    userClickedPattern = [];

    var randomsequence = Math.floor(Math.random() * 4);
    var color = buttoncolor[randomsequence];
   level++;
   $('h1').text('level  '+level);
    pattern.push(color);
console.log(color);
    $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(color);
return pattern ;
}

function startover(){
    started =false;
    level=0;
    pattern = [];
}
