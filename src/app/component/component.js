class Component {
    constructor(root, tagName = 'div', classes = '', text = ''){
        this.component = document.createElement(tagName);
        this.component.classList.add(...classes);
        this.component.textContent = text;

        if (root) {
            root.append(this.component);
        }
        
    }
}

export default Component;