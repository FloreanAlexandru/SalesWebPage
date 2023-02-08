//Declaration of testimonial's slider
$('.testimonial-slider').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    margin: 20,
    items: 3,
});

//Declaration of homepage's slider
$('.homepage-slider').owlCarousel({
    margin: 15,
    nav: true,
    navText: ["<div class='nav-button owl-prev'><</div>", "<div class='nav-button owl-next'>›</div>"],
    items: 3,
});

