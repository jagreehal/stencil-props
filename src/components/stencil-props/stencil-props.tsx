import { Component, Element } from '@stencil/core';

@Component({
  tag: 'stencil-props'
})
export class StencilProps {
  @Element() el: HTMLElement;

  componentWillLoad() {
    if (this.el.children.length) {
      const dataset = this.el.dataset || Object.create(null);
      for (const key in dataset) {
        let value;
        try {
          value = JSON.parse(dataset[key]);
        } catch (error) {
          value = dataset[key];
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
