import Component from "../../../../component/component";
import Img from '../../../../../file/img/1.png'

class Slide extends Component {
    constructor(root) {
        super(root, 'div', ['swiper-slide']);

        this.slide = new Component(this.component, 'div', ['slide']);

        this.info = new Component(this.slide.component, 'div', ['slide__info']);
        this.title = new Component(this.info.component, 'h3', ['slide__title'], 'Титул');
        this.items = new Component(this.info.component, 'div', ['slide__items']);
        this.items.component.innerHTML = `<p>300 слов</p>
            <p>300 слов</p>
            <p>300 слов</p>
            <p>300 слов</p>
        `;
        this.description = new Component(this.info.component, 'p', ['slide__description'], `Сможете рассказать о себе и поговорить на бытовые темы, где живете, работаете, рассказать о хобби, будете чувствовать себя уверенно в другой стране.`);

        this.image = new Component(this.slide.component, 'div', ['slide__image']);
        this.img = new Component(this.image.component, 'img', ['slide__image-img']);
        this.img.component.style.width = '100%';
        this.img.component.src = Img;
    }
}

export default Slide;