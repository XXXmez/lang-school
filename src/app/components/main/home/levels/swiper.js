import Component from "../../../../component/component";
import Slide from "./swiperSlide";

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class SwiperSlider extends Component {
    constructor(root){
        super(root, 'div', ['swiper']);

        const descr = [
            'Сможете рассказать о себе и поговорить на бытовые темы, где живете, работаете, рассказать о хобби, будете чувствовать себя уверенно в другой стране.',
            'Вы сможете поддерживать дружеское общение, заводить иностранные знакомства. Пополните свой запас привычными терминами: знакомство и приветствия, рассказ о себе, своей семье и друзьях, адреса и номера телефонов, страны и национальности, учеба и профессии, здоровье, внешность, характер, время и распорядок дня, а также многое другое.',
            'После прохождения курса на сайте для изучения английского языка вы будете лучше ориентироваться в незнакомых текстах, научитесь составлять резюме, официальные письма и поддерживать личную переписку.',
            'Уверенность в общении с иностранцами — научитесь использовать некоторые идиоматические выражения и фразовые глаголы, сможете смотреть кино и сериалы без субтитров, а также читать несложные художественные произведения и статьи без словаря. А еще сможете рассказать о своих планах и общаться с иностранными коллегами.',
            'Ваш словарный запас увеличится до 4 тысяч слов. Сможете вести деловую переписку, общаться с партнёрами, понимать и свободно отвечать иностранцам, а также выступать с отчетом или на конференции. А еще сможете легко читать книги в оригинале и выражать свою мысль на английском языке.'
        ]

        this.pagination = new Component(this.component, 'div', ['swiper-pagination']);
        this.wrapper = new Component(this.component, 'div', ['swiper-wrapper']);

        this.slide1 = new Slide(this.wrapper.component, 'Beginner', descr[0]);
        this.slide2 = new Slide(this.wrapper.component, 'Elementary', descr[1]);
        this.slide3 = new Slide(this.wrapper.component, 'Pre-Intermediate', descr[2]);
        this.slide4 = new Slide(this.wrapper.component, 'Intermediate', descr[3]);
        this.slide5 = new Slide(this.wrapper.component, 'Upper-Intermediate', descr[4]);

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