import Component from "../../../../component/component";
import work from "../../../../words.json";
import Card from "./card";
import Textbook from "../textbook";

class Levels extends Component {
    constructor(root) {
        super(root, 'div', ['textbook__levels']);

        this.level1 = new Component(this.component, 'div', ['textbook__level']);
        this.descr11 = new Component(this.level1.component, 'div', ['textbook__level-description']);
        this.complex11 = new Component(this.descr11.component, 'h3', ['textbook__level-complex'], 'Easy');
        this.count11 = new Component(this.descr11.component, 'p', ['textbook__level-count'], '1-600');
        this.title11 = new Component(this.level1.component, 'h3', ['textbook__level-title'], 'A1');

        

        this.level1.component.addEventListener('click', () => {
            this.container = document.querySelector('.works-container');
            // console.log('lvl-1', work[120]);
            for(let i = 0; i < 20; i++) {
                new Card(this.container, work[i].word, work[i].wordTranslate)
            }
        })

        this.level2 = new Component(this.component, 'div', ['textbook__level']);
        this.descr21 = new Component(this.level2.component, 'div', ['textbook__level-description']);
        this.complex21 = new Component(this.descr21.component, 'h3', ['textbook__level-complex'], 'Easy');
        this.count21 = new Component(this.descr21.component, 'p', ['textbook__level-count'], '1-600');
        this.title21 = new Component(this.level2.component, 'h3', ['textbook__level-title'], 'A2');

        this.level3 = new Component(this.component, 'div', ['textbook__level']);
        this.descr31 = new Component(this.level3.component, 'div', ['textbook__level-description']);
        this.complex31 = new Component(this.descr31.component, 'h3', ['textbook__level-complex'], 'Easy');
        this.count31 = new Component(this.descr31.component, 'p', ['textbook__level-count'], '1-600');
        this.title31 = new Component(this.level3.component, 'h3', ['textbook__level-title'], 'B1');

        this.level4 = new Component(this.component, 'div', ['textbook__level']);
        this.descr41 = new Component(this.level4.component, 'div', ['textbook__level-description']);
        this.complex41 = new Component(this.descr41.component, 'h3', ['textbook__level-complex'], 'Easy');
        this.count41 = new Component(this.descr41.component, 'p', ['textbook__level-count'], '1-600');
        this.title41 = new Component(this.level4.component, 'h3', ['textbook__level-title'], 'B2');

        this.level5 = new Component(this.component, 'div', ['textbook__level']);
        this.descr51 = new Component(this.level5.component, 'div', ['textbook__level-description']);
        this.complex51 = new Component(this.descr51.component, 'h3', ['textbook__level-complex'], 'Easy');
        this.count51 = new Component(this.descr51.component, 'p', ['textbook__level-count'], '1-600');
        this.title51 = new Component(this.level5.component, 'h3', ['textbook__level-title'], 'C1');

        this.level6 = new Component(this.component, 'div', ['textbook__level']);
        this.descr61 = new Component(this.level6.component, 'div', ['textbook__level-description']);
        this.complex61 = new Component(this.descr61.component, 'h3', ['textbook__level-complex'], 'Easy');
        this.count61 = new Component(this.descr61.component, 'p', ['textbook__level-count'], '1-600');
        this.title61 = new Component(this.level6.component, 'h3', ['textbook__level-title'], 'C2');
    }
}

export default Levels;