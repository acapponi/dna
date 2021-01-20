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

/* ============ slick ========== */


$('.slick-fade').on('init', function(slick){
  var slide = $('[data-slick-index="0"]');
  TweenMax.set($('.slick-slide').find(".slick-anim"), {opacity:0});
  setTimeout(function(){
    TweenMax.staggerTo(slide.find(".slick-anim"), 1, {opacity:1}, 0.3);
  },500)
}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var slide = $('[data-slick-index="'+nextSlide+'"]');
  TweenMax.set(slide.find(".slick-anim"), {opacity:0});
}).on('afterChange', function(event, slick, currentSlide){
  var slide = $('[data-slick-index="'+currentSlide+'"]');
  TweenMax.staggerTo(slide.find(".slick-anim"), 1, {opacity:1}, 0.3);
});

$('.slick-from-top').on('init', function(slick){
  var slide = $('[data-slick-index="0"]');
  TweenMax.set($('.slick-slide').find(".slick-anim"), {opacity:0, y:-15});
  setTimeout(function(){
    TweenMax.staggerTo(slide.find(".slick-anim"), 1, {opacity:1, y:0}, 0.3);
  },500)
}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var slide = $('[data-slick-index="'+nextSlide+'"]');
  TweenMax.set(slide.find(".slick-anim"), {opacity:0, y:-15});
}).on('afterChange', function(event, slick, currentSlide){
  var slide = $('[data-slick-index="'+currentSlide+'"]');
  TweenMax.staggerTo(slide.find(".slick-anim"), 1, {opacity:1, y:0}, 0.3);
});

$('.slick-from-bottom').on('init', function(slick){
  var slide = $('[data-slick-index="0"]');
  TweenMax.set($('.slick-slide').find(".slick-anim"), {opacity:0, y:15});
  setTimeout(function(){
    TweenMax.staggerTo(slide.find(".slick-anim"), 1, {opacity:1, y:0}, 0.3);
  },500)
}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
  var slide = $('[data-slick-index="'+nextSlide+'"]');
  TweenMax.set(slide.find(".slick-anim"), {opacity:0, y:15});
}).on('afterChange', function(event, slick, currentSlide){
  var slide = $('[data-slick-index="'+currentSlide+'"]');
  TweenMax.staggerTo(slide.find(".slick-anim"), 1, {opacity:1, y:0}, 0.3);
});
