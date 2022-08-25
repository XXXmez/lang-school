class Component {
    constructor(root, tagName = 'div', classes = ''){
        this.component = document.createElement(tagName);
        this.component.classList.add(...classes);
        
        if (root) {
            root.append(this.component);
        }
        
    }
}

export default Component;