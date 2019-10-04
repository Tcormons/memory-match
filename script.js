$(document).ready(intializApp);

function intializApp() {
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);
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
    if (firstCardClicked.is(secondCardClicked)) {
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
    attempts++;
    matches++;
    displayStats();
  }
  // Mismatch
  else {
    console.log('Try again');
    $('.card').unbind('click');
    setTimeout(handleMisMatch, 500);
    attempts++;
    displayStats();
  }
}

function removeCompletedPair() {
  firstCardClicked.addClass('disappear');
  secondCardClicked.addClass('disappear');
  firstCardClicked = null;
  secondCardClicked = null;

  // Re-apply click handlers
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);

  // completed game condition
  if (matches === maxMatches) {
    gamesPlayed++;
    displayStats();
    displayGameOver();
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

function calculateAccuracy() {
  var calcAccuracy = matches / attempts;
  var accuracy = (calcAccuracy * 100).toFixed(1) + '%';
  return accuracy;
}

function displayStats() {
  var gameDiv = $('#gamesPlayed');
  var attemptDiv = $('#attempts');
  var accuracyDiv = $('#accuracy');

  gameDiv.text(gamesPlayed);
  attemptDiv.text(attempts);
  accuracyDiv.text(calculateAccuracy);
}

function displayGameOver() {
  var retry = $('<div>').addClass('retry').text("Retry");
  $('.container').prepend(retry);
  var modal = $('<div>').addClass('modal');
  $('.container').prepend(modal);

  $('.retry').on('click', retryGame);
}

function retryGame() {
  // debugger;
  attempts = 0;
  matches = 0;
  calculateAccuracy = 0;

  $('.back-card').removeClass('hidden');
  $('.card').removeClass('disappear');

  $('.modal').remove();
  $('.retry').remove();
}
