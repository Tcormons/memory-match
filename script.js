$(document).ready(intializApp);

function intializApp(){
  $('.card').on('click',handleCardClick);
  $('.card').on('click',assignClicks);
}

var firstCardClicked = null;
var secondCardClicked = null;
var matches = null;

function handleCardClick(event){
  $(event.currentTarget).find('.back-card').addClass('hidden');
}



function assignClicks(event){
  // debugger;
  if (firstCardClicked === null) {
    firstCardClicked = $(event.currentTarget);
    var firstCardCompare = firstCardClicked.find('.front').css('background-image');
    console.log(firstCardCompare);

  } else if (firstCardClicked !== null) {
    secondCardClicked = $(event.currentTarget);
    var secondCardCompare = secondCardClicked.find('.front').css('background-image');
    console.log(secondCardCompare);
  }




  if (firstCardCompare == secondCardCompare){
    matches ++;
    console.log(matches);

  } else {
    // setTimeout(misMatch(), 1500);
  }

}

function misMatch(){
  firstCardClicked.addClass('hidden');
  secondCardClicked.addClass('hidden');

}
