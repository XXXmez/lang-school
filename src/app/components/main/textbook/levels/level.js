import Component from "../../../../component/component";
import Works from "../works/works";

class Level extends Component {
    constructor(root, complex, start, end, lvl, out) {
        super(root, 'div', ['textbook__level']);

        this.root = root;
        this.out = out;

        this.description = new Component(this.component, 'div', ['textbook__level-description']);
        this.complex = new Component(this.description.component, 'h3', ['textbook__level-complex'], complex);
        this.count = new Component(this.description.component, 'p', ['textbook__level-count'], `${start} - ${end}`);
        this.title = new Component(this.component, 'h3', ['textbook__level-title'], lvl);

        this.component.addEventListener('click', () => {
            let textbookWorks = document.querySelector('.textbook-works');
            if(textbookWorks){
                textbookWorks.remove();
            }
            new Works(this.out, (start -1) / 20);
        })
    }
}

export default Level;