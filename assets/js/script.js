$(document).ready(intializApp);

function intializApp() {
  randomLocation();
}

var firstCardClicked = null;
var secondCardClicked = null;
var firstCardCompare = null;
var secondCardCompare = null;
var matches = 0;
var maxMatches = 9;
var attempts = 0;
var gamesPlayed = 0;

var gallery = [
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks1.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks1.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks2.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks2.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks3.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks3.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks4.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks4.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks5.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks5.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks6.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks6.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks7.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks7.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks8.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks8.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks9.jpg',
  '../assets/images/MeSeeks/MeeSeeksCards/MeeSeeks9.jpg'
]



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
    setTimeout(handleMisMatch, 300);
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
  var retry = $('<div>').addClass('retry')
  retry.append('<div>').text("Retry");
  $('.container').prepend(retry);
  var modal = $('<div>').addClass('modal');
  $('.container').prepend(modal);

  $('.retry').on('click', retryGame);
}

function retryGame() {
  attempts = 0;
  matches = 0;
  $('#accuracy').text('00.0%');
  $('#attempts').text('0');

  $('.row').addClass('hidden');

  $('.modal').remove();
  $('.retry').remove();
  randomLocation();
}

//DOM elements
function randomLocation() {

  // randomizes gallery
  for (var index = gallery.length - 1; index > 0; index--) {
    var randomNumber = Math.floor(Math.random() * index);
    var tempNumber = gallery[index];
    gallery[index] = gallery[randomNumber];
    gallery[randomNumber] = tempNumber;
  }

//dynamically creates cards
  for (var displayIndex = 0; displayIndex < gallery.length; displayIndex++) {
    var string = gallery[displayIndex];
    var secondNewDiv = $('<div>');
    secondNewDiv.addClass('front');
    secondNewDiv.css('background-image', 'url(' + string + ')');
    var newDiv = $('<div>').addClass('card');
    var firstNewDiv = $('<div>').addClass('back-card');

    if (displayIndex === 0 || displayIndex === 6 || displayIndex === 12) {
      var newRow = $('<row>').addClass('row');
    }

    newDiv.append(firstNewDiv);
    newDiv.append(secondNewDiv);
    newRow.append(newDiv);
    $('.container').append(newRow);
  }
  $('.card').on('click', handleCardClick);
  $('.card').on('click', cardFlip);
}
