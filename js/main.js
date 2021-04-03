let nCount = function (selecter) {
    $(selecter).each(function () {
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 6000,
            easing: 'swing',
            step: function (value) {
                $(this).text(Math.ceil(value))
            }
        });
    });
};

let a = 0;
$(window).scroll(function () {
    let oTop = $('.numbers').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
        a++;
        nCount('.rect>h1');
    }
})