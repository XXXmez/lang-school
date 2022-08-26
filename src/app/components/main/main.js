import Component from "../../component/component";
import Start from "./home/start/start";
import Advantage from "./home/advantage/advantage";
import Levels from "./home/levels/levels";
import Developers from "./home/developers/developers";

class Main extends Component {
    constructor(root) {
        super(root, 'main', ['main']);

        this.start = new Start(this.component);
        this.advantage = new Advantage(this.component)
        this.levels = new Levels(this.component);
        this.developers = new Developers(this.component);
    }

    
}

export default Main;