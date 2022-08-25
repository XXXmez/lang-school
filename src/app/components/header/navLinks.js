import Component from "../../component/component";

class NavLinks extends Component {
    constructor(root, textLink, hrefLink) {
        super(root, 'li', ['navigation__item']);

        this.link = new Component(this.component, 'a', ['navigation__item-link']);
        this.link.component.setAttribute('href', hrefLink);
        this.link.component.textContent = textLink;
    }
}

export default NavLinks;