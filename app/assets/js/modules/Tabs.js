import $ from 'jquery';

$('.tabs__button').on('click', function(){
  var dataID = $(this).attr('data-tab');

  $('.tabs__button').removeClass("is-active");
  $(this).addClass("is-active");
  $(".tabs__panel").hide();

  $("#panel-" + dataID).fadeIn(800);

});
