import Component from "./component/component";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

class App {
    constructor(root) {
        this.root = root;

        this.app = new Component(this.root, 'div', ['app'])
        this.header = new Header(this.app.component);
        this.main = new Main(this.app.component);
        this.footer = new Footer(this.app.component);
    }

    start() {
        console.log('App start', this.root);
    }
}

export default App;