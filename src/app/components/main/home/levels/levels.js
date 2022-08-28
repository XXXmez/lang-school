import Component from "../../../../component/component";
import SwiperSlider from "./swiper";

class Levels extends Component {
    constructor(root) {
        super(root, 'section', ['levels']);

        this.container = new Component(this.component, 'div', ['levels__container']);
        this.title = new Component(this.container.component, 'h2', ['levels__title'], 'Прокачайте свой английский');
        this.description = new Component(this.container.component, 'p', ['levels__description'], 'Обучение для всех уровней знаний');
        this.swiperSlider = new SwiperSlider(this.component);
    }
}

export default Levels;