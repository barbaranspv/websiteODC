$('#rightarrow').click(function () {
    var currentSlide = $('.slide.active');
    var nextSlide = currentSlide.next();

    currentSlide.fadeOut(300).removeClass('active');
    nextSlide.fadeIn(800).addClass('active');

    if (nextSlide.length == 0) {
        $('.slide').first().fadeIn(800).addClass('active');
    }
});


$('#leftarrow').click(function () {
    var currentSlide = $('.slide.active');
    var prevSlide = currentSlide.prev();

    currentSlide.fadeOut(300).removeClass('active');
    prevSlide.fadeIn(800).addClass('active');

    if (prevSlide.length == 0) {
        $('.slide').last().fadeIn(800).addClass('active');
    }
});