import Component from "../../component/component";

class Footer extends Component {
    constructor(root) {
        super(root, 'footer', ['footer']);

        this.container = new Component(this.component, 'div', ['footer__container']);

        this.main = new Component(this.component, 'div', ['footer__main']);

        this.wrapper1= new Component(this.main.component, 'div', ['footer__wrapper']);
        this.title1 = new Component(this.wrapper1.component, 'h3', ['footer__title'], 'RS Lang');
        this.links1 = new Component(this.wrapper1.component, 'div', ['footer__links']);
        this.link11 = new Component(this.links1.component, 'a', ['footer__link'], 'GitHub');
        this.link11.component.setAttribute('href', 'https://github.com/XXXmez/lang-school');
        this.link11.component.target = '_blank';
        this.link12 = new Component(this.links1.component, 'a', ['footer__link'], 'RS School');
        this.link12.component.setAttribute('href', 'https://rs.school/');
        this.link12.component.target = '_blank';

        this.wrapper2 = new Component(this.main.component, 'div', ['footer__wrapper']);
        this.title2 = new Component(this.wrapper2.component, 'h3', ['footer__title'], 'Меню');
        this.links2 = new Component(this.wrapper2.component, 'div', ['footer__links']);
        this.link21 = new Component(this.links2.component, 'a', ['footer__link'], 'Главная');
        this.link21.component.setAttribute('href', '#');
        this.link22 = new Component(this.links2.component, 'a', ['footer__link'], 'Учебник');
        this.link22.component.setAttribute('href', '#textbook');
        this.link23 = new Component(this.links2.component, 'a', ['footer__link'], 'Игры');
        this.link23.component.setAttribute('href', '#games');
        this.link24 = new Component(this.links2.component, 'a', ['footer__link'], 'Статистика');
        this.link24.component.setAttribute('href', '#statistics');

        this.wrapper3 = new Component(this.main.component, 'div', ['footer__wrapper']);
        this.title3 = new Component(this.wrapper3.component, 'h3', ['footer__title'], 'Разработчики');
        this.links3 = new Component(this.wrapper3.component, 'div', ['footer__links']);
        this.link31 = new Component(this.links3.component, 'a', ['footer__link'], 'Руслан');
        this.link31.component.setAttribute('href', 'https://github.com/XXXmez');
        this.link31.component.target = '_blank';
        // this.link32 = new Component(this.links3.component, 'a', ['footer__link'], 'Ссылка');
        // this.link32.component.setAttribute('href', '#11');

        this.school = new Component(this.component, 'div', ['footer__school']);
        this.schoolText = new Component(this.school.component, 'p', ['footer__school-text'], '2022 RS Lang. Project for course ');
        this.schoolLink = new Component(this.schoolText.component, 'a', ['footer__school-link'], '«JavaScript/Front-end»');
        this.schoolLink.component.setAttribute('href', 'https://rs.school/');
        this.schoolLink.component.target = '_blank';

    }
}

export default Footer;