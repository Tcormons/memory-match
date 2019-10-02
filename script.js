$(document).ready(intializApp);

function intializApp() {
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);
}

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;
var firstCardCompare = null;
var secondCardCompare = null;

function handleCardClick(event) {
  $(event.currentTarget).find('.back-card').addClass('hidden');
}

function cardFlip(event) {
  // debugger;
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
    matches++;
    console.log("You have a match");
    firstCardClicked = null;
    secondCardClicked = null;
  } else {
    setTimeout(misMatch, 1500);
  }
}

function misMatch() {
  // debugger;
  firstCardClicked.find('.back-card').removeClass('hidden');
  secondCardClicked.find('.back-card').removeClass('hidden');
  firstCardClicked = null;
  secondCardClicked = null;
}
