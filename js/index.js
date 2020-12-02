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


jQuery(document).ready(function ($) {
    var contentSections = $('.cd-section'),
        navigationItems = $('#cd-vertical-nav a');

    updateNavigation();
    $('.parent').on('scroll', function () {
        updateNavigation();
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function () {
        $('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function () {
        $('.touch #cd-vertical-nav').removeClass('open');
    });


    function updateNavigation() {
        contentSections.each(function () {
            $this = $(this);
            var activeSection = $('#cd-vertical-nav a[href="#' + $this.attr('id') + '"]').data('number') - 1;
            if (($this.offset().top - $(window).height() / 2 < $(window).scrollTop()) && ($this.offset().top + $this.height() - $(window).height() / 2 > $(window).scrollTop())) {
                navigationItems.eq(activeSection).addClass('is-selected');
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }
        });
    }


});





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





$('.infoDiv').hide();
$('.infoDiv[data-link=' + 'first' + ']').fadeIn({

}, 0);
$('.itemIdentidade[data-link=first]').find("div.nomeTurtle").css("color", "#84D8C8");
$('.itemIdentidade[data-link=first]').find("div.nomeCientifico").css("color", "#84D8C8");



$('.itemIdentidade').click(function () {
    $('.infoDiv').hide();
    $('.infoDiv[data-link=' + $(this).attr('data-link') + ']').fadeIn({}, 300);
    console.log($(this).children("div.nomeTurtle"));
    $('.itemIdentidade').find("div.nomeTurtle").css("color", "#282828");
    $('.itemIdentidade').find("div.nomeCientifico").css("color", "#282828");

    $('.itemIdentidade[data-link=' + $(this).attr('data-link') + ']').find("div.nomeTurtle").css("color", "#84D8C8");
    $('.itemIdentidade[data-link=' + $(this).attr('data-link') + ']').find("div.nomeCientifico").css("color", "#84D8C8");
});