// add div for facebook
$(function() {

  /**
   * Fix header
   */
  var header = document.getElementById('site-head'),
  headerHeadRoom =  new Headroom(header, {
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


  /**
   * Navigation
   */
  if(!$('body').hasClass('homepage'))
  {
    navigation.init();
  }

  //$('body').scrollspy({ target: '#side-navigation' })

  /**
   * popover
   */
 // $('abbr').popover({delay: { "show": 500, "hide": 100 }});
 // $('html').click(function() {
 //   $('.popover').popover('hide');
//  });


  /**
   * Serach index
   */
  var idx = new searchIdx(),
  closeBtn = $('<button />').attr('id', 'searchClose').attr('class', 'float_right').append($('<span />').attr('class', 'fa fa-close')).append($('<span />').html(d4p.l.close).attr('class', 'hidden')).hide();

  idx.getData();
  idx.searchResultPlaceholder();

  $('#search-text').after(closeBtn);

  closeBtn.on('click', function(){
    $('#page').children().show();
    $('#search_result').hide();
    $('#search-text').val('');
    $(this).hide();
   });

  $( "#search" ).submit(function( event ) {
    event.preventDefault();
  });

  $('#search-text').keyup(function( event ) {
    if($(this).val().length > d4p.search.minlength)
    {
      idx.search($(this).val());
      idx.output();
      $('#page').children().hide();
      $('#search_result').show();
      $('#searchClose').show();
    }
  });

  $("body").swipe( {
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      if(duration == swipeLeft && d4p.previousTopicHref !== null && d4p.previousTopicHref !== '')
      {
        document.location = d4p.getDocumentationRoot + d4p.previousTopicHref;
      }
      if(duration == swipeRight && d4p.nextTopicHref !== null && d4p.nextTopicHref !== '')
      {
        document.location = d4p.getDocumentationRoot + d4p.nextTopicHref;
      }
    },
    //Default is 75px, set to 0 for demo so any distance triggers swipe
    threshold:30
  });

});
