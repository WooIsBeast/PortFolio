$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList,remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);
        
        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
    })
})

$(document).ready(function () {

    // Scroll spy
    $('body').scrollspy({
        target: "#main-nav"
    });

    // Navbar fade
    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
    });

    function changeNavbar() {
        var navbar = $("#main-nav");
        if ($(this).scrollTop() >=600) {
            navbar.addClass("bg-light shadow").removeClass("bg-transparent");
        } else if ($(this).scrollTop() < 100) {
            navbar.removeClass("bg-light shadow").addClass("bg-transparent");
        }
    }
});

var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

ScrollReveal().reveal('.navbar', {
    delay: 500,
    duration: 1000,
    origin:'bottom'
});
ScrollReveal().reveal('.context', {
    delay: 1000,
    duration: 2000,
    origin:'top',
    distance:'100px'
});
ScrollReveal().reveal('.about-title', {
    delay: 500,
    duration: 1000,
    origin:'top',
    distance:'100px',
    viewFactor: 0.3,
    mobile:false,
    desktop:true
});
ScrollReveal().reveal('.about-title', {
    delay: 500,
    duration: 1000,
    origin:'top',
    distance:'100px',
    mobile:true,
    desktop:false
});
ScrollReveal().reveal('.about-text', {
    delay: 900,
    duration: 1900,
    origin:'right',
    distance:'100px',
    viewFactor: 0.3,
    mobile:false,
    desktop:true
});
ScrollReveal().reveal('.about-text', {
    delay: 500,
    duration: 1000,
    origin:'bottom',
    distance:'100px',
    mobile:true,
    desktop:false
});
ScrollReveal().reveal('.about-img', {
    delay: 700,
    duration: 1500,
    origin:'left',
    distance:'100px',
    viewFactor: 0.3,
    mobile:false,
    desktop:true
});
ScrollReveal().reveal('.about-img', {
    delay: 500,
    duration: 1000,
    origin:'left',
    distance:'100px',
    mobile:true,
    desktop:false
});
ScrollReveal().reveal('.card-group', {
    delay: 700,
    duration: 1500,
    origin:'top',
    distance:'100px',
    easing:'cubic-bezier(0.5, 0, 0, 1)',
    viewFactor: 0.3,
    mobile:false,
    desktop:true
});
ScrollReveal().reveal('.card-group', {
    delay: 500,
    duration: 1000,
    origin:'top',
    distance:'100px',
    easing:'cubic-bezier(0.5, 0, 0, 1)',
    mobile:true,
    desktop:false
});
ScrollReveal().reveal('.freelance-section', {
    delay: 500,
    duration: 1000,
    origin:'bottom',
    distance:'100px',
    viewFactor: 0.3,
    mobile:false,
    desktop:true
});
ScrollReveal().reveal('.freelance-section', {
    delay: 500,
    duration: 1000,
    origin:'bottom',
    distance:'100px',
    viewFactor: 0.3,
    mobile:true,
    desktop:false
});
ScrollReveal().reveal('.contact-form', {
    delay: 700,
    duration: 1500,
    origin:'left',
    distance:'100px',
    viewFactor: 0.3,
    mobile:false,
    desktop:true
});
ScrollReveal().reveal('.contact-form', {
    delay: 700,
    duration: 1500,
    origin:'left',
    distance:'100px',
    mobile:true,
    desktop:false
});






