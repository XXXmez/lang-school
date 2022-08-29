import Component from "../../../../component/component";

class Card extends Component {
    constructor(root, eng, rus) {
        super(root, 'div', ['works__card'])

        this.eng = new Component(this.component, 'div', ['works__card-eng'], eng)
        this.rus = new Component(this.component, 'div', ['works__card-rus'], rus)
    }
}

export default Card;