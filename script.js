$(document).ready(intializApp);

function intializApp() {
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);
}

var firstCardClicked = null;
var secondCardClicked = null;
var firstCardCompare = null;
var secondCardCompare = null;
var matches = null;
var maxMatches = 9;

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
  }

  if (secondCardCompare == null) {
    console.log("Pick a second card");
  } else if (firstCardCompare === secondCardCompare) {
    console.log("You have a match");
    setTimeout(completedPair, 300);
  } else {
    $('.card').unbind('click');
    setTimeout(misMatch, 500);
  }
}

function completedPair(){
  matches++;

  firstCardClicked.addClass('disappear');
  secondCardClicked.addClass('disappear');
  firstCardClicked = null;
  secondCardClicked = null;
  if (matches === maxMatches) {
    var modal = $('<div>').addClass('modal');
    $('.container').prepend(modal);
  }
}
function misMatch() {
  firstCardClicked.find('.back-card').removeClass('hidden');
  secondCardClicked.find('.back-card').removeClass('hidden');
  firstCardClicked = null;
  secondCardClicked = null;
  // Re-apply click handlers
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);
}
