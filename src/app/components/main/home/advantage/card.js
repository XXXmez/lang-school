import Component from "../../../../component/component";

class Card extends Component {
    constructor(root, cardName, cardText, cardImg) {
        super(root, 'li', ['advantage__item', 'card'])

        this.image = new Component(this.component, 'div', ['card__image']);
        this.img = new Component(this.image.component, 'img', ['card__image-img']);
        this.img.component.style.width = '100%';
        this.img.component.src = cardImg;

        this.text = new Component(this.component, 'div', ['card__text']);
        this.text = new Component(this.component, 'h3', ['card__title'], cardName);
        this.text = new Component(this.component, 'p', ['card__description'], cardText);
    }
}

export default Card;