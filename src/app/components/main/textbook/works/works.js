import Component from "../../../../component/component";

class Works extends Component {
    constructor(root) {
        super(root, 'div', ['textbook-works', 'works']);

        this.worksTitle = new Component(this.component, 'h2', ['works-title'], 'Слова');

        this.container = new Component(this.component, 'div', ['works-container']);

        
    }
}

export default Works;