import Component from "../../../../component/component";

class Card extends Component {
    constructor(root, name, text, img, position, link) {
        super(root, 'li', ['developers__item', 'card'])

        this.image = new Component(this.component, 'div', ['card__image']);
        this.img = new Component(this.image.component, 'img', ['card__image-img']);
        this.img.component.style.width = '100%';
        this.img.component.src = img;

        this.text = new Component(this.component, 'div', ['card__text']);
        this.title = new Component(this.text.component, 'h3', ['card__title']);
            this.link = new Component(this.title.component, 'a', ['card__title-link'], name);
            this.link.component.target = '_blank'
            this.link.component.setAttribute('href', link);
            this.role = new Component(this.title.component, 'span', ['card__title-role'], position);
        this.description = new Component(this.text.component, 'p', ['card__description'], text);
    }
}

export default Card;