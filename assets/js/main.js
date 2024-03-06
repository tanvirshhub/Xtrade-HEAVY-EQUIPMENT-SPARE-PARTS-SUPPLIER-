$(document).ready(function(){
    $('.hero-section').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        cssEase: 'linear',
        nextArrow: false, // Set nextArrow to false to hide the next button
        // Add more options based on your requirements
    });
});