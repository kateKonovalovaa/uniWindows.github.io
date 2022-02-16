$(function(){
  const controller = new ScrollMagic.Controller();
  TweenLite.defaultEase = Linear.easeNone;

  const tween1 = TweenMax.staggerFrom(".banner__advantage", 1.5, {
    opacity: 0,
    y: 200,
    ease: Power3.easeInOut
  }, 0.1)

  const scene = new ScrollMagic.Scene({
    triggerElement: ".banner",
    reverse: false,
    triggerHook: 0.4
  })
    .setTween(tween1)
    .addTo(controller);
})
