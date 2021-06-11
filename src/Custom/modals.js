var modal = $('#modallog');
var overlay = $('.overlay');
var register = $('#register');
$('.show-modal').click(function() {

    overlay.show();
    modal.show();

});

$('.close-modal').click(function() {

    modal.hide();
    overlay.hide();
})






// Custom effects
var wm_defaults = {
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 000,
        left: 0
    },
    scale: 0.8,
    reset: false,
    duration: '1000'
};
var dist = '100px';

ScrollReveal()
    .reveal('.reveal', wm_defaults);
ScrollReveal()
    .reveal('.delay-100', { delay: 100 });
ScrollReveal()
    .reveal('.delay-200', { delay: 200 });
ScrollReveal()
    .reveal('.delay-300', { delay: 300 });
ScrollReveal()
    .reveal('.delay-400', { delay: 400 });
ScrollReveal()
    .reveal('.delay-800', { delay: 800 });
ScrollReveal()
    .reveal('.r-top', {
        origin: 'top',
        distance: dist
    });
ScrollReveal()
    .reveal('.r-bottom', {
        origin: 'bottom',
        distance: dist
    });
ScrollReveal()
    .reveal('.r-left', {
        origin: 'left',
        distance: dist
    });
ScrollReveal()
    .reveal('.r-right', {
        origin: 'right',
        distance: dist
    });