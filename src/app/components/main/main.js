import Component from "../../component/component";
import Start from "./start/start";
import Advantage from "./advantage/advantage";
import Levels from "./levels/levels";
import Developers from "./developers/developers";

class Main extends Component {
    constructor(root) {
        super(root, 'main', ['main']);

        this.start = new Start(this.component);

        this.advantage = new Advantage(this.component);

        this.levels = new Levels(this.component);

        this.developers = new Developers(this.component);

    }
}

export default Main;