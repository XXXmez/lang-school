import Component from "../../../../component/component";

class Optoin extends Component {
    constructor(root, index, id, start) {
        super(root, 'option', '', `Пункт ${id}`);
        this.root = root;
        this.component.value = index;
        this.index = index;
        this.id = id;
        
        if (this.index / 20 == start) {
            this.root.onchange()
        }
        
    }
}

export default Optoin;