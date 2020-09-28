$(function() {
    $("#tel").mask("+7(999) 999-9999");

    const ajaxSend = (url, formData, callback) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(formData)
        })
            .then(response => callback())
            .catch(error => console.error(error))
    };
   

    $('.modal__form').submit(function(e){
        
        e.preventDefault();

        let name = $('.modal__form').find('[name="name"]');
        name.val(name.val().trim());
        let tel = $('.modal__form').find('[name="tel"]')

        if(name.val().length < 3) {
            name.addClass('error')
            name.one('focus', function(e){
                name.removeClass('error')
            })
            return false
        } else if(tel.val().length < 12) {
            tel.addClass('error')
            tel.one('focus', function(){
                tel.removeClass('error')
            })
            return false
        }

        let form = $('#modal__form')[0];
        let formData = new FormData(form);
        formData = Object.fromEntries(formData);
        console.log(JSON.stringify(formData))
        
        let url = 'http://localhost:3000/request';
        ajaxSend(url, formData, function(){
            $('.modal__body').css('animation', 'fade-out 0.7s');
            $('.modal__bg').fadeOut();
            setTimeout(() => {
                $('.modal').css('display', 'none');
            }, 700);
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

    $('.header__call').click(function(){
        $('.modal').css('display', 'block')
        $('.modal__bg').fadeIn();
        $('.modal__body').css('animation', 'fade-in 0.7s ease');
    })

    $('.modal__close').click(function(){
        $('.modal__body').css('animation', 'fade-out 0.7s');
        $('.modal__bg').fadeOut();
        $('.modal').find('input').val('');
        $('.modal').find('input').removeClass('error');
        setTimeout(() => {
            $('.modal').css('display', 'none');
        }, 700);
    })
})