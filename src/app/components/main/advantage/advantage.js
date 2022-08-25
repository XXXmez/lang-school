import Component from "../../../component/component";
import Card from "./card";
import CardImg from "../../../../file/img/1.png"

class Advantage extends Component {
    constructor(root) {
        super(root, 'section', ['advantage']);

        this.container = new Component(this.component, 'div', ['advantage__container']);

        this.title = new Component(this.container.component, 'h2', ['advantage__title'], 'Начните изучать английский язык прямо сейчас!');
        this.description = new Component(this.container.component, 'p', ['advantage__description'], 'Мы предлогаем');

        this.cards = new Component(this.container.component, 'div', ['advantage__cards']);
        this.cardsList = new Component(this.container.component, 'ul', ['advantage__list']);

        this.cardFree = new Card(this.cardsList.component, 'Имя', 'Описание', CardImg);
        this.cardGame = new Card(this.cardsList.component, 'Имя', 'Описание', CardImg);
        this.cardP = new Card(this.cardsList.component, 'Имя', 'Описание', CardImg);
        this.cardS = new Card(this.cardsList.component, 'Имя', 'Описание', CardImg);
    }
}

export default Advantage;