$(function(){
  const controller = new ScrollMagic.Controller();
  TweenLite.defaultEase = Linear.easeNone;

  const tween1 = TweenMax.from(".form-3__man", 1.5, {
    opacity: 0,
    x: -700,
    ease: Power3.easeInOut
  })

  const scene = new ScrollMagic.Scene({
    triggerElement: ".form-3",
    reverse: false,
    triggerHook: 0.2
  })
    .addIndicators({
      name: "Box Timeline",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black"
    })
    .setTween(tween1)
    .addTo(controller);
})