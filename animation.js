$(document).ready(function(){
  $('.button').click(function(){
    $('.button').toggleClass('button2');
    // $('.button2').css("background-color", "transparent");
    $('.button2').text('done');
  });

  $('h1').click(function(){
    $('h1').toggleClass('text');
  });

});
