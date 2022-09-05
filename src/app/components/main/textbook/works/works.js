import Component from "../../../../component/component";
import Optoin from "./option";
import Card from "../levels/card";
import data from "../../../../words.json"

class Works extends Component {
    constructor(root, start) {
        super(root, 'div', ['textbook-works', 'works']);

        this.start = start;

        this.worksTitle = new Component(this.component, 'h2', ['works__title'], 'Слова');

        this.container = new Component(this.component, 'div', ['works__container']);

        this.allWords = new Component(this.container.component, 'div', ['works__lists']);
        this.details = new Component(this.container.component, 'div', ['works__details']);

        this.pagination = new Component(this.component, 'div', ['works__pagination']);
        
        this.select = new Component(this.pagination.component, 'select', ['works__select']);
        // this.select.component.onchange = function () {
        //     // console.log(this.value);
        //     console.log('Нажатие', this.value, data[this.value].word, data[this.value].wordTranslate);
        //     for(let i = Number(this.value); i < Number(this.value) + 20; i++) {
        //         new Card(this.container.component, data[i].word, data[i].wordTranslate)
        //         console.log(i, this.worksTitle);
        //     }
        // }

        this.select.component.onchange = () => {
            this.allWords.component.innerHTML = '';
            for(let i = Number(this.select.component.value); i < Number(this.select.component.value) + 20; i++) {
                new Card(this.allWords.component, data[i], this.details.component, i);
            }
        }

        

        for (let i = this.start; i < this.start + 30; i++) {
            new Optoin(this.select.component, i*20, i+1, this.start);
        }
        
    }
}

export default Works;