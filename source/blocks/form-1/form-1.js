$(function () {
     //Всплывающие окна
    $('#about-1').mouseover(function () {
        const elem = $('#about-1').siblings('.about__hidden');
        elem.fadeIn()
    })
    $('#about-2').mouseover(function () {
        const elem = $('#about-2').siblings('.about__hidden');
        elem.fadeIn()
    })
    $('#about-1').mouseleave(function () {
        const elem = $('#about-1').siblings('.about__hidden');
        elem.fadeOut()
    })
    $('#about-2').mouseleave(function () {
        const elem = $('#about-2').siblings('.about__hidden');
        elem.fadeOut()
    })


    //Длительность акции
    var duration = 14 * 24 * 60 * 60 * 1000;

    if (!localStorage.date) {
        var dateInMs = new Date().getTime();
        var expirationDateInMs = +dateInMs + duration;
        localStorage.date = expirationDateInMs;
    }

    var expirationSaveDate = localStorage.date;

    //возвращает объект с оставшимся временем
    function getTimer(expirationDate) {
        var time = expirationDate - new Date().getTime();
        var getDays = Math.floor((time / (1000 * 60 * 60 * 24)));
        getHours = Math.floor((time / (1000 * 60 * 60)) % 24);
        getMin = Math.floor((time / (1000 * 60)) % 60);
        getSec = Math.floor((time / 1000) % 60);
        return {
            total: time,
            days: getDays,
            hours: getHours,
            minutes: getMin,
            seconds: getSec
        };
    }

    var daysPlace = $('.timer__count--days');
    var hoursPlace = $('.timer__count--hours');
    var minPlace = $('.timer__count--min');
    var secPlace = $('.timer__count--sec');

    function initTimer(expirationDate) {
        function updateTimer() {
            var time = getTimer(expirationDate);

            if (time.total <= 0) {
                clearInterval(timeinterval);
            }

            daysPlace.text(time.days)
            hoursPlace.text(("0" + time.hours).slice(-2));
            minPlace.text(("0" + time.minutes).slice(-2));
            secPlace.text(("0" + time.seconds).slice(-2));
        }
        updateTimer();
        var timeinterval = setInterval(updateTimer, 1000);
    }
    initTimer(expirationSaveDate);
})