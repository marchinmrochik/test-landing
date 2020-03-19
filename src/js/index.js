var $ = require('jquery');
import { Map } from './map';
import 'slick-carousel';

$(document).ready(function (e) {
    let mapElement = document.getElementById('map');
    let body = $('#body'), popup = $('.container-popup'), navbar = $('.nav-list');

    Map.loadGoogleMapsApi().then(function(googleMaps) {
        Map.createMap(googleMaps, mapElement);
    });

    $('#slider-app_screenshots').slick({
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('#prev-slide'),
        nextArrow: $('#next-slide'),
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('#slider-reviews').slick({
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrow: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $("a.nav-link").on('click',function(e) {
        var url = e.target.href;
        var hash = url.substring(url.indexOf("#")+1);
        $('html, body').animate({
            scrollTop: $('#'+hash).offset().top
        }, 500);
        return false;
    });

    $("#contact").submit(function (e) {
        e.preventDefault();
        body.addClass('show-popup');
        popup.addClass('show');
    });

    $('.btn-close-popup, .close-popup').on('click', function () {
        body.removeClass('show-popup');
        popup.removeClass('show');
    });

    $('.menu-mobile').on('click', function () {
        navbar.hasClass('show') ? navbar.removeClass('show') : navbar.addClass('show');
    })
});
