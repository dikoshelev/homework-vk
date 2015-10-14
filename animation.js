$(document).ready(function() {
  $('.button').click(function() {

    var _this = $(this);
    if (_this.hasClass('button2')) {
      $('.button2').addClass('button');
    } else {
      $('.button').toggleClass('button2');

      setTimeout(function() {
        _this.text('done.').toggleClass('button3');

      }, 500);

    }

  });

  $('h1').click(function() {
    $('h1').toggleClass('text');
  });

});
