import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'stencil-props'
})
export class StencilProps {
  @Element() el: HTMLElement;  
  @Prop() component: string;
  @Prop() componentProps: { [key: string]: any } = {};
  @Prop() showErrors: boolean = false;

  componentWillLoad() {
    const dataset = this.el.dataset || Object.create(null);
    for (const key in dataset) {
      try {
        this.componentProps[key] = JSON.parse(dataset[key]);
      } catch (error) {
        if (this.showErrors === true) {
          console.error(`Error parsing data-${key}`, error);
        }          
      }      
    }
  }
  render() {
    if (this.component){
      const ChildComponent = this.component;
      return <ChildComponent {...this.componentProps} />;
    }

    if (this.el.children){
      const firstChild = this.el.children[0];
      for (const key in this.componentProps) {
        firstChild[key] = this.componentProps[key];        
      }
    }      
    
    return <slot />;
  }
}
