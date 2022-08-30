import Component from "../../../component/component";
import Levels from "./levels/levels";
import Works from "./works/works";

import "./style.scss";


class Textbook {
    constructor(root) {
        this.root = root;
        this.textbook = new Component(this.root, 'div', ['textbook']);
        this.container = new Component(this.textbook.component, 'div', ['textbook__container']);
        this.textbookHeader = new Component(this.container.component, 'div', ['textbook__header']);
        this.textbookHeaderTitle = new Component(this.textbookHeader.component, 'h2', ['textbook__header-title'], 'Учебник');
        this.textbookHeaderDescr = new Component(this.textbookHeader.component, 'p', ['textbook__header-description'], 'Уровни сложности');
        
        this.levels = new Levels(this.container.component);
    }

}

export default Textbook;