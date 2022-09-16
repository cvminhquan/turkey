document.addEventListener("scroll", getHeightEl);

let element = document.getElementById("nav");
let body = document.querySelector("body");
let elementHeight = element.offsetTop;

function getHeightEl() {
    let doc = document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > elementHeight) {
        element.classList.add('onscroll');
        body.classList.add('onscroll');
    } else {
        element.classList.remove('onscroll');
        body.classList.remove('onscroll');
    }
}


$('.logo-scroll').click( function () {
    $(this).parents('.box-nav').toggleClass('open');
    $(this).toggleClass('open');
})

$('.nav-link').click( function () {
    $('.logo-scroll').removeClass('open')
    $('.box-nav').removeClass('open')
})