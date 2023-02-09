import smoothScroll from 'smooth-scroll';

let options = {
    speed: 300,
    easing: 'easeInOutCubic',
    header: '#header',
    offset: -100,
    updateURL: false,
};

let scroll = new smoothScroll('a[href*="#"]', options);

const fixed_header = document.getElementById('fixed-header');
const request_form = document.getElementById('download_form_wrapper');

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    let target = window.pageYOffset + document.getElementById('key-visual').getBoundingClientRect().bottom;

    if (scroll > target) {
        fixed_header.style.top = "0";
    } else {
        fixed_header.style.top = "-200px";
    }
    
    if (scroll > 10) {
        request_form.classList.remove("opacity-0", "invisible", "translate-x-80");
    } else {
        request_form.classList.add("translate-x-80");
    }
});

window.addEventListener('load', () => {
    document.getElementById("drawer").classList.remove("opacity-0");
});
