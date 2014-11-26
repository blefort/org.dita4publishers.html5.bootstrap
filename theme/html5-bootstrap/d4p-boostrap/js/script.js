// add div for facebook
$(function() {

  var site_head = document.getElementById('site-head'),
  headerHeadRoom = new  new Headroom(elem, {
    offset: 205,
    tolerance: 5,
    classes: {
      initial: "animated",
      pinned: "slideDown",
      unpinned: "slideUp"
    }
  });

  headerHeadRoom.init();

  $('#site-head').hover(function(){
    if($(this).hasClass('headroom--not-top'))
    {
      $(this).addClass('reveal');
    } else {
     $(this).removeClass('reveal');
    }
  }, function(){
    setTimeout( function () {
      $('#site-head').removeClass('reveal');
      }
    , 600);
  });

});
