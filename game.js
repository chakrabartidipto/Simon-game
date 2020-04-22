$('#music-button').toggle(
  function () {
  document.getElementById('playMusic').play();
  },
  function () {
  document.getElementById('playMusic').pause();
  }
  );
//1. start game

    var buttonColors= ["red", "blue", "green", "yellow"];
    var gamePattern=[];
    var level=0;
    var started=false;
    var userClickedPattern=[];
    var userChosenColour;

// game starting function with keypressing any button.

$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

// 2. User interaction through click

$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    musicPlay(userChosenColour);    
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
  


// Core game function (comparing & Restart)

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {

      musicPlay("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

// Game sequence function

function nextSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level "+ level);
    var randomNumber= Math.floor((4* Math.random()));
    var randomChosencolor= buttonColors[randomNumber];
    gamePattern.push(randomChosencolor);
    $( "#"+randomChosencolor ).fadeOut(100).fadeIn(100);
    $(document).on('click', musicPlay(randomChosencolor));
}

// reusable music function

function musicPlay(randomChosen) {
    var audio = new Audio("sounds/"+randomChosen+".mp3");
    audio.play();
}

// animation of the buttons function

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed"); 
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

//start over function

function startOver(){
    
    level=0;
    gamePattern=[];
    started= false;

}

//background-music
