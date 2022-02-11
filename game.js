var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  $("#level-title").text("level " + level);
  level++;
  playSound(randomChosenColour);
  animatePress(randomChosenColour);
}

$(".btn").click(function() {
  var userChosenColur = $(this).attr("id");
  userClickedPattern.push(userChosenColur);
  checkAnswer(userClickedPattern.length - 1);
  playSound(userChosenColur);
  animatePress(userChosenColur);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    startOver();
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(document).keydown(function() {
  if (started === false) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
