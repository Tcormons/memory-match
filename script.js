$(document).ready(intializApp);

function intializApp() {
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);
  //flipping animation not working
  $('.card').on('click', cardAnimation);
}

var firstCardClicked = null;
var secondCardClicked = null;
var firstCardCompare = null;
var secondCardCompare = null;
var matches = 0;
var maxMatches = 9;
var attempts = 0;
var gamesPlayed = 0;

function handleCardClick(event) {
  $(event.currentTarget).find('.back-card').addClass('hidden');
}

function cardFlip(event) {
  if (firstCardClicked === null) {
    firstCardClicked = $(event.currentTarget);
    firstCardCompare = firstCardClicked.find('.front').css('background-image');
    return;

  } else if (firstCardClicked !== null) {
    secondCardClicked = $(event.currentTarget);
    secondCardCompare = secondCardClicked.find('.front').css('background-image');

    // check for double click on same firstCard
    if (firstCardClicked.is(secondCardClicked)){
      secondCardClicked = null;
      console.log('You need to pick a second card');
      return;
    }
  }

  // Match
  if (firstCardCompare === secondCardCompare) {
    console.log("You have a match");
    $('.card').unbind('click');
    setTimeout(removeCompletedPair, 300);
    attempts ++;
    displayStats();
  }
  // Mismatch
  else {
    console.log('Try again');
    $('.card').unbind('click');
    setTimeout(handleMisMatch, 500);
    attempts ++;
    displayStats();
  }
}

function removeCompletedPair(){
  firstCardClicked.addClass('disappear');
  secondCardClicked.addClass('disappear');
  firstCardClicked = null;
  secondCardClicked = null;
  matches++;

  // Re-apply click handlers
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);

  // completed game condition
  if (matches === maxMatches) {
    var modal = $('<div>').addClass('modal');
    $('.container').prepend(modal);
    gamesPlayed ++;
    displayStats();
  }
}

function handleMisMatch() {
  firstCardClicked.find('.back-card').removeClass('hidden');
  secondCardClicked.find('.back-card').removeClass('hidden');
  firstCardClicked = null;
  secondCardClicked = null;

  // Re-apply click handlers
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);
}

function calculateAccuracy(){
  var calcAccuracy = matches/attempts;
  return calcAccuracy;
}

function displayStats(){
  // debugger;

  var accuracy = calculateAccuracy() * 100;
  var accuracyPerc = accuracy.toFixed(1) ;

  var gameDiv = $('#gamesPlayed');
  var attemptDiv = $('#attempts');
  var accuracyDiv = $('#accuracy');

  gameDiv.text(gamesPlayed);
  attemptDiv.text(attempts);
  accuracyDiv.text(accuracyPerc + "%");

}

//flipping animation not working
function cardAnimation (event) {
  event.addClass('.rotate');
}
