import Component from "../../component/component";
import NavLinks from "./navLinks";
import LogoImg from "../../../file/img/logo.svg"

class Header extends Component {
    constructor(root) {
        super(root, 'header', ['header']);

        this.conteiner = new Component(this.component, 'div', ['header__container']);

        this.logo = new Component(this.conteiner.component, 'div', ['header__logo']);
        this.logoLink = new Component(this.logo.component, 'a', ['header__logo-link']);
        this.logoLink.component.setAttribute('href', '#/')
        this.logoLinkImg = new Component(this.logoLink.component, 'img', ['header__logo-img']);
        this.logoLinkImg.component.width = '50';
        this.logoLinkImg.component.height = '50';
        this.logoLinkImg.component.src = LogoImg;

        this.nav = new Component(this.conteiner.component, 'div', ['header__nav']);
        this.navigation = new Component(this.nav.component, 'nav', ['navigation']);
        this.navigationList = new Component(this.navigation.component, 'ul', ['navigation__list']);
        this.navigationLinkToMain = new NavLinks(this.navigationList.component, 'link1', '#/link111');
        this.navigationLinkToTextbook = new NavLinks(this.navigationList.component, 'link2', '#/link222');
        this.navigationLinkToGames = new NavLinks(this.navigationList.component, 'link3', '#/link333');
        this.navigationLinkToStatistics = new NavLinks(this.navigationList.component, 'link4', '#/link444');

        const links = [this.navigationLinkToMain, this.navigationLinkToTextbook, this.navigationLinkToGames, this.navigationLinkToStatistics];

        window.addEventListener('hashchange', () => {
            console.log('hashchange', window.location.hash, links);
        });
    }
}

export default Header;