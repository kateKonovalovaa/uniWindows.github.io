$(function(){
    console.log($('#about-1'))
    $('#about-1').mouseover(function(){
        const elem = $('#about-1').find('.about__hidden');
        elem.fadeIn()
    })
    $('#about-2').mouseover(function(){
        const elem = $('#about-2').find('.about__hidden');
        elem.fadeIn()
    })
    $('#about-1').mouseleave(function(){
        const elem = $('#about-1').find('.about__hidden');
        elem.fadeOut()
    })
    $('#about-2').mouseleave(function(){
        const elem = $('#about-2').find('.about__hidden');
        elem.fadeOut()
    })
})