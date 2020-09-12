$(function(){
    const slider = $('.slider__slide-container').owlCarousel({
        loop: true,
        nav: false,
        margin: 50,
        items: 1,
        smartSpeed: 700,
        dotsContainer: '.pagination',
        dotsEach: true
    })

    const prevBtn = $('.slider__btn-slide--left');
    const nextBtn = $('.slider__btn-slide--right');

    $('.pagination__elem').click(function(){
        slider.trigger('to.owl.carousel', [$(this).index(), 1000])
    })

    prevBtn.click(function(){
        slider.trigger("prev.owl.carousel");
    })

    nextBtn.click(function(){
        slider.trigger("next.owl.carousel");
    })

    const btnTitles = ['Доставляем и устанавливаем','Заявка', 'Расчет цены за 15 минут', 'Бесплатный замер на объекте', 'Оформляем документы у Вас дома', 'Изготавливаем от 7 дней', 'Доставляем и устанавливаем', 'Заявка']

    var prevTitle = $('.slider__btn-slide--left span')
    const nextTitle = $('.slider__btn-slide--right span')

    slider.on('changed.owl.carousel', function(e) {
        const index = e.item.index - 2
        console.log(index)
        prevTitle.text(btnTitles[index-1])
        nextTitle.text(btnTitles[index+1])
    })

})