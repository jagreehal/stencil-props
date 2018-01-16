[![NPM](https://nodei.co/npm/stencil-props.png?compact=true)](https://npmjs.org/package/stencil-props)
## Stencil Props

A component that pass data attributes as props to Stencil apps.

### Example

```html
<stencil-props data-str='abc' data-num='1' data-obj='{"foo":"bar"}' data-arr='[1,2,3]' data-bool='true'>
    <my-app/>
</stencil-props>
```

passes on data to the my-app component

```jsx
import { Component, Prop } from '@stencil/core';

export interface Obj {
  foo?: string
}
@Component({
  tag: 'my-app'
})
export class MyApp {
  @Prop() str: string;
  @Prop() num: number;
  @Prop() obj: Obj = {};
  @Prop() arr: number[] = [];
  @Prop() bool: boolean;

  render() {
    return (
      <div>
        <div>str - {this.str}</div>
        <div>num - {this.num}</div>
        <div>obj - {this.obj.foo}</div>
        <div>arr - {this.arr[2]}</div>
        <div>boo - {this.bool.toString()}</div>
      </div>
    );
  }
}

```

