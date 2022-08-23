import "./style/style.scss"
import "./file/img/logo.svg"
import "./file/img/1.png"

console.log('Hi');

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
    direction: 'vertical',
    loop: true,
});