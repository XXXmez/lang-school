import Start from "../home/start/start";
import Advantage from "../home/advantage/advantage";
import Levels from "../home/levels/levels";
import Developers from "../home/developers/developers";

class Home {
    constructor(root) {
        this.start = new Start(root);
        this.advantage = new Advantage(root)
        this.levels = new Levels(root);
        this.developers = new Developers(root);
    }
}

export default Home;