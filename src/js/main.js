 import '../scss/style.scss';


import jQuery from 'jquery';
import 'slick-carousel'
const $ = jQuery;

$('.photo-wrap').slick({
    fade: false,
    autoplay: false,
    pauseOnHover: true,
    autoplaySpeed: 5400,
    speed: 300,
    touchThreshold: 8,
    infinite: false,
    center: true,
    // variableWidth: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding:'60px',
  });