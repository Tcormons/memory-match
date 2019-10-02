$(document).ready(intializApp);

function intializApp(){
  $('.card').on('click',handleCardClick);

}

function handleCardClick(event){
  console.log(event);
  $(event.currentTarget).find('.back-card').addClass('hidden');
}
