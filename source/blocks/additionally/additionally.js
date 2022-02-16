$(function(){
  const controller = new ScrollMagic.Controller();
  TweenLite.defaultEase = Linear.easeNone;

  const tween1 = TweenMax.staggerFrom(".additionally__elem--left", 1.5, {
    opacity: 0,
    x: -500,
    ease: Power3.easeInOut
  }, '-=0.1')

  const tween2 = TweenMax.staggerFrom(".additionally__elem--right", 1.5, {
    opacity: 0,
    x: 500,
    ease: Power3.easeInOut
  }, '-=0.1')

  const scene = new ScrollMagic.Scene({
    triggerElement: ".additionally",
    reverse: false,
    triggerHook: 0.6
  })
    .setTween(tween1)
    .addTo(controller);

    const scene2 = new ScrollMagic.Scene({
      triggerElement: ".additionally",
      reverse: false,
      triggerHook: 0.4
    })
      .setTween(tween2)
      .addTo(controller);
})