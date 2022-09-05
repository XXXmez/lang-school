import Component from "../../../../component/component";
import Card from "./card";
import CardImg from "../../../../../file/img/1.png"

class Advantage extends Component {
    constructor(root) {
        super(root, 'section', ['advantage']);

        this.container = new Component(this.component, 'div', ['advantage__container']);

        this.title = new Component(this.container.component, 'h2', ['advantage__title'], 'Начните изучать английский язык прямо сейчас!');
        this.description = new Component(this.container.component, 'p', ['advantage__description'], 'Мы предлогаем');

        this.cards = new Component(this.container.component, 'div', ['advantage__cards']);
        this.cardsList = new Component(this.cards.component, 'ul', ['advantage__list']);

        this.cardFree = new Card(this.cardsList.component, 'Учебник', '3600 слов, с описанием и испольозванием!', CardImg);
        this.cardGame = new Card(this.cardsList.component, 'Статистика', 'Поможет следить за вашим прогрессом', CardImg);
        this.cardP = new Card(this.cardsList.component, 'Игры', 'Учебно развлекательные игры которые помогут облегчить обучение', CardImg);
        this.cardS = new Card(this.cardsList.component, 'Доступность', 'Доступное приложение без смс и регистрации', CardImg);
    }
}

export default Advantage;