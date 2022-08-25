import App from "./app/app";

import "./style/style.scss"
import "./file/img/logo.svg"
import "./file/img/1.png"

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            let nameBullet = '';
            if (index === 0) nameBullet = 'Beginner';
            if (index === 1) nameBullet = 'Elementary';
            if (index === 2) nameBullet = 'Pre-Intermediate';
            if (index === 3) nameBullet = 'Intermediate';
            if (index === 4) nameBullet = 'Upper-Intermediate';

            return '<span class="swiper-label ' + className + '">' + (nameBullet) + '</span>';
        },
    },
    speed: 900,
});




window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('body');

    const app = new App(root);
    app.start();
});