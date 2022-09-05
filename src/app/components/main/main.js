import Component from "../../component/component";
import Routing from "../routing/routing";

class Main extends Component {
    constructor(root) {
        super(root, 'main', ['main']);

        this.routing = new Routing(this.component);
        this.routing.init()
    }
}

export default Main;