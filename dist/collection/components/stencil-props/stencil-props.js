export class StencilProps {
    constructor() {
        this.componentProps = {};
        this.showErrors = false;
    }
    componentWillLoad() {
        const dataset = this.el.dataset || Object.create(null);
        for (const key in dataset) {
            try {
                this.componentProps[key] = JSON.parse(dataset[key]);
            }
            catch (error) {
                if (this.showErrors === true) {
                    console.error(`Error parsing data-${key}`, error);
                }
            }
        }
    }
    render() {
        if (this.component) {
            const ChildComponent = this.component;
            return h(ChildComponent, Object.assign({}, this.componentProps));
        }
        if (this.el.children) {
            const firstChild = this.el.children[0];
            for (const key in this.componentProps) {
                firstChild[key] = this.componentProps[key];
            }
        }
        return h("slot", null);
    }
    static get is() { return "stencil-props"; }
    static get properties() { return { "component": { "type": String, "attr": "component" }, "componentProps": { "type": "Any", "attr": "component-props" }, "el": { "elementRef": true }, "showErrors": { "type": Boolean, "attr": "show-errors" } }; }
}
