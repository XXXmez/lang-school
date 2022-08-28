import Component from "../../component/component";

class Footer extends Component {
    constructor(root) {
        super(root, 'footer', ['footer']);

        this.container = new Component(this.component, 'div', ['footer__container']);

        this.main = new Component(this.component, 'div', ['footer__main']);

        this.wrapper1= new Component(this.main.component, 'div', ['footer__wrapper']);
        this.title1 = new Component(this.wrapper1.component, 'h3', ['footer__title'], 'RS Lang');
        this.links1 = new Component(this.wrapper1.component, 'div', ['footer__links']);
        this.link11 = new Component(this.links1.component, 'a', ['footer__link'], 'Ссылка');
        this.link11.component.setAttribute('href', '#11');
        this.link12 = new Component(this.links1.component, 'a', ['footer__link'], 'Ссылка');
        this.link12.component.setAttribute('href', '#11');

        this.wrapper2 = new Component(this.main.component, 'div', ['footer__wrapper']);
        this.title2 = new Component(this.wrapper2.component, 'h3', ['footer__title'], 'Меню');
        this.links2 = new Component(this.wrapper2.component, 'div', ['footer__links']);
        this.link21 = new Component(this.links2.component, 'a', ['footer__link'], 'Ссылка');
        this.link21.component.setAttribute('href', '#11');
        this.link22 = new Component(this.links2.component, 'a', ['footer__link'], 'Ссылка');
        this.link22.component.setAttribute('href', '#11');

        this.wrapper3 = new Component(this.main.component, 'div', ['footer__wrapper']);
        this.title3 = new Component(this.wrapper3.component, 'h3', ['footer__title'], 'Разработчики');
        this.links3 = new Component(this.wrapper3.component, 'div', ['footer__links']);
        this.link31 = new Component(this.links3.component, 'a', ['footer__link'], 'Ссылка');
        this.link31.component.setAttribute('href', '#11');
        this.link32 = new Component(this.links3.component, 'a', ['footer__link'], 'Ссылка');
        this.link32.component.setAttribute('href', '#11');

        this.school = new Component(this.component, 'div', ['footer__school']);
        this.schoolText = new Component(this.school.component, 'p', ['footer__school-text'], '2022 RS Lang. Project for course ');
        this.schoolLink = new Component(this.schoolText.component, 'a', ['footer__school-link'], '«JavaScript/Front-end»');

    }
}

export default Footer;