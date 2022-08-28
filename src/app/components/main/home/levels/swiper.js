import Component from "../../../../component/component";
import Slide from "./swiperSlide";

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class SwiperSlider extends Component {
    constructor(root){
        super(root, 'div', ['swiper']);

        this.pagination = new Component(this.component, 'div', ['swiper-pagination']);
        this.wrapper = new Component(this.component, 'div', ['swiper-wrapper']);

        this.slide1 = new Slide(this.wrapper.component);
        this.slide2 = new Slide(this.wrapper.component);
        this.slide3 = new Slide(this.wrapper.component);
        this.slide4 = new Slide(this.wrapper.component);
        this.slide5 = new Slide(this.wrapper.component);

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
    }
}

export default SwiperSlider;