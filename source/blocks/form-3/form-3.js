$(function () {
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

  //обработка формы
  $('#form-3').find("#tel").mask("+7(999) 999-9999");

  $('#form-3').submit(function (e) {

    e.preventDefault();

    let name = $('#form-3').find('[name="name"]');
    name.val(name.val().trim());
    let tel = $('#form-3').find('[name="tel"]')

    if (name.val().length < 3) {
      name.addClass('error')
      name.one('focus', function (e) {
        name.removeClass('error')
      })
      return false
    } else if (tel.val().length < 12) {
      tel.addClass('error')
      tel.one('focus', function () {
        tel.removeClass('error')
      })
      return false
    }

    let form = $('#form-3')[0];
    let formData = new FormData(form);
    formData = Object.fromEntries(formData);
    console.log(JSON.stringify(formData))

    let url = 'http://localhost:3000/request';
    ajaxSend(url, formData, function () {
      $('input').val('');
    });
    form.reset();

    // $.ajax({
    //     url: 'http://localhost:3000/request',
    //     method: 'POST',
    //     data: formData,

    // }).done(function(data){
    //     console.log('окей')
    // })
  })
})