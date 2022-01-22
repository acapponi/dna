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


  /* ========== offcanvas collapse =========== */
  if($('.offcanvas-collapse').length){
    document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function () {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
  }

})
