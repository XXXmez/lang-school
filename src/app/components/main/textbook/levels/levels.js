import Component from "../../../../component/component";
import work from "../../../../words.json";
import Card from "./card";
import Level from "./level";
import Textbook from "../textbook";

class Levels extends Component {
    constructor(root) {
        super(root, 'div', ['textbook__levels']);

        this.root = root;

        this.a1 = new Level(this.component, 'Easy', 1, 600, 'A1', this.root);
        this.a2 = new Level(this.component, 'Easy', 601, 1200, 'A2', this.root);
        this.b1 = new Level(this.component, 'Medium', 1201, 1800, 'B1', this.root);
        this.b2 = new Level(this.component, 'Medium', 1801, 2400, 'B2', this.root);
        this.c1 = new Level(this.component, 'Hard', 2401, 3000, 'C1', this.root);
        this.c2 = new Level(this.component, 'Hard', 3001, 3600, 'C2', this.root);

        // this.level1.component.addEventListener('click', () => {
        //     this.container = document.querySelector('.works-container');
        //     // console.log('lvl-1', work[120]);
        //     for(let i = 0; i < 20; i++) {
        //         new Card(this.container, work[i].word, work[i].wordTranslate)
        //     }
        // })
    }
}

export default Levels;