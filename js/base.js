/* ========== navbar =========== */
$(function(){
  $('.hamburger').click(function(){
  	$(this).toggleClass('is-active');
  	$(this).parents('.navbar').toggleClass('navbar-open');
  })
})

jQuery(function($){
  if($('.navbar-off-canvas').length > 0){
    let navbar = $('.navbar-off-canvas');
    let collapse = navbar.find('[data-toggle="offcanvas"]').attr('data-target');

    $('.navbar-off-canvas').find('[data-toggle="offcanvas"]').on('click', function(){
      $(collapse).addClass('show');
      setTimeout(function(){
        $(collapse).addClass('animating');
      },1)
    });

    $('.collapse').on('click', function(e){
      var container = $(collapse).children('.navbar-collapse--content');
      if (!container.is(e.target) && container.has(e.target).length === 0){
        $(collapse).removeClass('animating');
        setTimeout(function(){
          $(collapse).removeClass('show');
        },500)
      }
    })

  }

});

$(function(){
  if($('.navbar-fade').length > 0){
    let navbar = $('.navbar-fade');
    let collapse = navbar.find('[data-toggle="fade"]').attr('data-target');

    $('.navbar-fade').find('button[data-toggle="fade"]').on('click', function(){
      if($(this).hasClass('is-active')){
        console.log('no active')
        $(collapse).addClass('show');
        setTimeout(function(){
          $(collapse).addClass('animating');
        },1)
      }else{
        console.log('active')
        $(collapse).removeClass('animating');
        setTimeout(function(){
          $(collapse).removeClass('show');
        },350)
      }
    });

  }
});

/* ========== functions =========== */
function exists(c){
  if($(c).length > 0){
    return true;
  }else {
    return false;
  }
}

/* ========== animations =========== */
var controller = new ScrollMagic.Controller();

if(exists('.reveal')){
  var revealElements = document.getElementsByClassName("reveal");
	for (var i=0; i<revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
  			triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
  			offset: 50,												 // start a little later
  			triggerHook: 0.9,
  		})
  		.setClassToggle(revealElements[i], "anim") // add class toggle
  		// .addIndicators({name: "reveal " + (i+1) }) // add indicators (requires plugin)
  		.addTo(controller);
	}
}
