export class StencilProps {
    constructor() {
        this.showErrors = false;
        this.passInvalid = false;
    }
    componentWillLoad() {
        if (this.el.children.length) {
            const dataset = this.el.dataset || Object.create(null);
            for (const key in dataset) {
                let value;
                try {
                    value = JSON.parse(dataset[key]);
                }
                catch (error) {
                    if (this.showErrors === true) {
                        console.error(`Error parsing data-${key}`, error);
                    }
                    if (this.passInvalid === true) {
                        value = dataset[key];
                    }
                }
                //@ts-ignore
                this.el.children[0][key] = value;
            }
        }
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "stencil-props"; }
    static get properties() { return { "el": { "elementRef": true }, "passInvalid": { "type": Boolean, "attr": "pass-invalid" }, "showErrors": { "type": Boolean, "attr": "show-errors" } }; }
}
