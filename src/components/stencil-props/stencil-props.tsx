import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-props'
})
export class StencilProps {
  @Element() el: HTMLElement;
  @Prop() showErrors: boolean = false;
  @Prop() passInvalid: boolean = false;

  componentWillLoad() {
    if (this.el.children.length) {
      const dataset = this.el.dataset || Object.create(null);
      for (const key in dataset) {
        let value;
        try {
          value = JSON.parse(dataset[key]);
        } catch (error) {
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
    return <slot />;
  }
}
