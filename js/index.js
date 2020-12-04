var previousScroll = 0;
$('parent').scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 100) {
        showTopNav();
    } else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
        if (currentScroll > previousScroll) {
            hideNav();
        } else {
            showNav();
        }
        previousScroll = currentScroll;
    }
});

function hideNav() {
    $(".navbar").removeClass("is-visible").addClass("is-hidden");
}

function showNav() {
    $(".navbar").removeClass("is-hidden").addClass("is-visible");
}


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


$('#leftarrowId').click(function () {
    var currentSlideInfo = $('.slideInfo.active');
    var prevSlideInfo = currentSlideInfo.prev();

    currentSlideInfo.fadeOut(300).removeClass('active');
    prevSlideInfo.fadeIn(800).addClass('active');

    if (prevSlideInfo.length == 0) {
        $('.slideInfo').last().fadeIn(800).addClass('active');
    }
});

$('#rightarrowId').click(function () {
    var currentSlideInfo = $('.slideInfo.active');
    var nextSlideInfo = currentSlideInfo.next();

    currentSlideInfo.fadeOut(300).removeClass('active');
    nextSlideInfo.fadeIn(800).addClass('active');

    if (nextSlideInfo.length == 0) {
        $('.slideInfo').first().fadeIn(800).addClass('active');
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

                if ($("#section2").offset().top <= 0) {
                    showNav();


                } else
                    hideNav();
            } else {
                navigationItems.eq(activeSection).removeClass('is-selected');
            }

        });
    }


});





(function () {
    var textoIndex = -1;

    var textosApresentacao = $(".textoApresentacao");

    function showNextTexto() {
        ++textoIndex;
        textosApresentacao.eq(textoIndex % textosApresentacao.length)
            .fadeIn(1000)
            .delay(2200)
            .fadeOut(1000, showNextTexto);
    }

    showNextTexto();

})();




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



/*

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

*/


$(document).ready(function () {

    let is_mobile = window.matchMedia("only screen and (max-width: 760px)").matches;


    // now I can use is_mobile to run javascript conditionally




    $(".flip-card-inner").mouseenter(function (e) {
        if (is_mobile == false) {
            if ($(this).hasClass("active")) {

            } else {

                $(this).fadeIn(900).addClass('active');
            }
        }
    })






    $(".flip-card-inner").click(function (e) {
        console.log("k1");

        if (is_mobile == true) {
            console.log("oi1");
            if ($(this).hasClass("active")) {
                $(this).removeClass('active');
            } else
                $(this).fadeIn(900).addClass('active');
        } else {
            if ($(this).hasClass("active")) {
                $(this).removeClass('active');
            }
        }

    });
});