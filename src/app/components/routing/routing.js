import Home from "../main/home/home";
import Component from "../../component/component";

class Routing {
    constructor(root) {
        this.root = root;
        // this.home = new Home(this.root);

        this.router = [
            {
                hash: '',
                init: () => {
                    this.root.style = '';
                    this.pageHome = new Home(this.root);
                }
            },
            {
                hash: 'textbook',
                init: () => {
                    this.root.style.display = 'flex';
                    this.root.style.alignItems = 'center';
                    this.root.style.flex = '1 0 auto';
                    this.root.style.justifyContent = 'center';
                    this.content = new Component(this.root, 'h2', ['default'], 'Учебник в разработке');
                }
            },
            {
                hash: 'games',
                init: () => {
                    this.root.style.display = 'flex';
                    this.root.style.alignItems = 'center';
                    this.root.style.flex = '1 0 auto';
                    this.root.style.justifyContent = 'center';
                    this.content = new Component(this.root, 'h2', ['default'], 'Игры в разработке');
                }
            },
            {
                hash: 'statistics',
                init: () => {
                    this.root.style.display = 'flex';
                    this.root.style.alignItems = 'center';
                    this.root.style.flex = '1 0 auto';
                    this.root.style.justifyContent = 'center';
                    this.content = new Component(this.root, 'h2', ['default'], 'Статистика в разработке');
                }
            }
        ];

        this.defaultRouter = {
            hash: 'default',
            init: () => {
                this.root.innerHTML = 'default';
            }
        }
    }   

    upRouting() {
        this.root.innerHTML = '';
        const currentRouteName = window.location.hash.slice(1);
        const currentRoute = this.router.find((h) => h.hash === currentRouteName);
        (currentRoute || this.defaultRouter).init();
    }

    init() {
        window.onpopstate = () => this.upRouting();
        this.upRouting();
    }
}

export default Routing;