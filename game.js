var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(50);
  playSound(randomChosenColour);
}

$(".btn").click(function() {
  var userChosenColur = $(this).attr("id");
  userClickedPattern.push(userChosenColur);
  playSound(userChosenColur);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
