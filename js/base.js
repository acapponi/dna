/* ========== navbar =========== */
$(function(){
  $('.hamburger').click(function(){
  	$(this).toggleClass('is-active');
  	$(this).parents('.navbar').toggleClass('navbar-open');
  })
})

$(function(){
  $(".anchor").click(function(event){
    event.preventDefault();
    var offset = $($(this).attr('href')).offset().top;
    var offset_mod = 0;
    if($(this).attr('data-offset')){
      offset_mod = parseInt($(this).attr('data-offset'));
    }
    offset = offset+offset_mod;
    $('html, body').animate({scrollTop:offset}, 500);
  });
})

$(function () {
  if(exists('.offcanvas-collapse')){
    document.querySelector('[data-bs-toggle="offcanvas"]').addEventListener('click', function (){
      document.querySelector('.offcanvas-collapse').classList.toggle('open')
    })
  }
})

/* ========== functions =========== */
function exists(c){
  if($(c).length > 0){
    return true;
  }else {
    return false;
  }
}
