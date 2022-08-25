import Component from "../../../component/component";
import StartImg from "../../../../file/img/1.png";

class Start extends Component {
    constructor(root) {
        super(root, 'section', ['start']);

        this.container = new Component(this.component, 'div', ['start__container']);
        this.info = new Component(this.container.component, 'div', ['start__info']);

        this.text = new Component(this.info.component, 'div', ['start__text']);
        this.title = new Component(this.text.component, 'h2', ['start__title'], 'Выучите английский с НАМИ');
        this.description = new Component(this.text.component, 'p', ['start__description'], 'Нескучное онлайн-обучение английскому языку с помощью игр и интересных заданий в любое удобное для вас время');

        this.image = new Component(this.info.component, 'div', ['start__image']);
        this.img = new Component(this.image.component, 'img', ['start__image-img']);
        this.img.component.style.width = '100%'
        this.img.component.src = StartImg;
    }
}

export default Start;