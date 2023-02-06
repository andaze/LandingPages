import smoothScroll from 'smooth-scroll';

let options = {
    speed: 300,
    easing: 'easeInOutCubic',
    header: '#header',
    offset: -100,
    updateURL: false,
};

let scroll = new smoothScroll('a[href*="#"]', options);
