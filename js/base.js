jQuery(function($){

  /* ========== navbar =========== */
  $('.hamburger').click(function(){
  	$(this).toggleClass('is-active');
  	$(this).parents('.navbar').toggleClass('navbar-open');
  })

  /* ========== anchor =========== */
  $(".anchor").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top;
    var offset_mod = 0;
    offset_mod = parseInt(getComputedStyle(document.body).getPropertyValue('--tc-scroll-ofset'));
    offset = offset+offset_mod;
    $('html, body').animate({scrollTop:offset}, 500);
  });


  /* ============== search on navbar ==================*/
  $('.input-group-search--anim .input-group-text').on('click', function(e){
    $(e.target).parents('.input-group-search--anim').addClass('onshow');
    $(e.target).parents('.input-group-search--anim').find('.form-control').focus();
  })

  $(document).mouseup(function(e) {
      var container = $(".input-group-search--anim");

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('onshow');
      }
  });

})
