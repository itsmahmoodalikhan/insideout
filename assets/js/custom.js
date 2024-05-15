(function($) {

    // Back to top script

    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // loader

    $(window).on('load', function() {
        $('#js-preloader').addClass('loaded');
    });


    // sticky menu script

    window.onscroll = function() {
        myFunction()
    };

    var header = document.getElementById("sticky-header");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    // accordion  script

    $(document).ready(function() {
        $('.accordion-dropdown > li > .answer').hide();

        $('.accordion-dropdown > li').click(function() {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active").find(".answer").slideUp();
            } else {
                $(".accordion-dropdown > li.active .answer").slideUp();
                $(".accordion-dropdown > li.active").removeClass("active");
                $(this).addClass("active").find(".answer").slideDown();
            }
            return false;
        });

    });

    // search toggler

    $('.site-search').click(function() {
        $('.site-header').toggleClass('hide');

        if (!$('.site-header-search').is('.hide')) {
            $('.site-search-input').focus();
        }
    });

    // slider owl script

    $('.slider').owlCarousel({
        loop: false,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //  about owl script

    $('.about').owlCarousel({
        loop: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // testimonial owl script

    $('.testimonial').owlCarousel({
        loop: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    //  team owl script

    $('.team').owlCarousel({
        loop: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    //brand owl script

    $('.brand').owlCarousel({
        loop: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });



    //  category owl script

    $('.category').owlCarousel({
        loop: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 5
            }
        }
    });

    //  counter owl script

    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });




    // gallery owl script

    $('.gallery').owlCarousel({
        loop: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    //blog owl script

    $('.blog').owlCarousel({
        loop: true,
        margin: 30,
        lazyLoad: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });





})(window.jQuery);