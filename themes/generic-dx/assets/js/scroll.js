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

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    let target = window.pageYOffset + document.getElementById('key-visual').getBoundingClientRect().bottom;

    if (scroll > target) {
        fixed_header.style.top = "0";
    } else {
        fixed_header.style.top = "-200px";
    }
});
