/* Extras added by Agostina Capponi to enhance bootstrap
This file is merely for backup reasons, the code was already added to bootstrap.js so we don't call 2 files */
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

/*Minified version by https://javascript-minifier.com

jQuery(function(a){if(a(".navbar-off-canvas").length>0){let n=a(".navbar-off-canvas").find('[data-toggle="offcanvas"]').attr("data-target");a(".navbar-off-canvas").find('[data-toggle="offcanvas"]').on("click",function(){a(n).addClass("show"),setTimeout(function(){a(n).addClass("animating")},1)}),a(".collapse").on("click",function(t){var o=a(n).children(".navbar-collapse--content");o.is(t.target)||0!==o.has(t.target).length||(a(n).removeClass("animating"),setTimeout(function(){a(n).removeClass("show")},500))})}});
*/
