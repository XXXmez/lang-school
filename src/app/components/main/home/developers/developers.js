import Component from "../../../../component/component";
import CardImg from "../../../../../file/img/1.png"
import Card from "./card";

class Developers extends Component {
    constructor(root) {
        super(root, 'section', ['developers']);

        this.container = new Component(this.component, 'div', ['developers__container']);

        this.title = new Component(this.container.component, 'h2', ['developers__title'], 'Разработчики');
        this.description = new Component(this.container.component, 'p', ['developers__description'], 'Наша команда');

        this.cards = new Component(this.container.component, 'div', ['developers__cards']);
        this.cardsList = new Component(this.cards.component, 'ul', ['developers__list']);

        this.card1 = new Card(this.cardsList.component, 'Руслан', 'Занимался разработкой всего что имеется', CardImg, 'Frontend', 'https://github.com/XXXmez');
        // this.card2 = new Card(this.cardsList.component, 'Not found', 'Not found', CardImg, 'Not found', '#notGit');
        // this.card3 = new Card(this.cardsList.component, 'Not found', 'Not found', CardImg, 'Not found', '#notGit');
    }
}

export default Developers;