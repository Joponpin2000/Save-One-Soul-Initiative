var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";

}

// Counter
$('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration:100000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function() {
    $("#owl-donor").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
    });
});

$(document).ready(function() {
    $("#onboard").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,
        animateIn: 'slideInRight',
        animateOut: 'slideOutLeft',
    });
});


/* ==============================================
Back top
=============================================== */

jQuery(window).scroll(function() {
    var duration = 500;
    if (jQuery(this).scrollTop() > 1) {
        jQuery('.dmtop').css({
            bottom: "10px"
        })
    } else {
        jQuery('.dmtop').css({
            bottom: "-100px"
        })
    }
})


jQuery(".dmtop").click(function () {
    jQuery("body, html").animate({
        scrollTop: 0
    }, 600);
});
