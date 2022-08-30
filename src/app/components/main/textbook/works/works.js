import Component from "../../../../component/component";
import Optoin from "./option";
import Card from "../levels/card";
import data from "../../../../words.json"

class Works extends Component {
    constructor(root, start) {
        super(root, 'div', ['textbook-works', 'works']);

        this.start = start;

        this.worksTitle = new Component(this.component, 'h2', ['works-title'], 'Слова');

        this.container = new Component(this.component, 'div', ['works-container']);

        this.pagination = new Component(this.component, 'div', ['works-pagination']);
        
        this.select = new Component(this.pagination.component, 'select', ['works-select']);
        this.select.component.onchange = function () {
            // console.log(this.value);
            console.log('Нажатие');
            for(let i = this.value; i < this.value + 20; i++) {
                new Card(this.container, data[i].word, data[i].wordTranslate)
            }

        }
        for (let i = this.start; i < this.start + 30; i++) {
            new Optoin(this.select.component, i*20, i+1, this.start);
        }
        
    }
}

export default Works;