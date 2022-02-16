$(function(){
  const controller = new ScrollMagic.Controller();
  TweenLite.defaultEase = Linear.easeNone;

  var tl = new TimelineMax();

  tl.staggerFrom(".advantages__list-elem", 2, {
    opacity: 0,
    y: 500,
    ease: Power3.easeInOut
  }, 0.2)
  .from(".advantages__sale", 1.2, {
    delay: -1,
    opacity: 0,
    x: 500,
    ease: Power3.easeInOut
  })
  .staggerFrom('.benefit', 1.2, {
    opacity: 0,
    x: 300,
    ease: Power3.easeInOut
  }, 0.1)

  const scene = new ScrollMagic.Scene({
    triggerElement: ".advantages",
    reverse: false,
    triggerHook: 0.4
  })
    .setTween(tl)
    .addTo(controller);
})