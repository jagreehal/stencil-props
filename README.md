[![NPM](https://nodei.co/npm/stencil-props.png?compact=true)](https://npmjs.org/package/stencil-props)

# Stencil Props

A component that passes data attributes as props to [Stencil](https://stenciljs.com/) components.

## Example

```html
<stencil-props data-str='"abc"' data-num='1' data-obj='{"foo":"bar"}' data-arr='[1,2,3]' data-bool='true'>
    <my-app/>
</stencil-props>
```

passes on data to the my-app component

```jsx
import { Component, Prop } from '@stencil/core';
import 'stencil-props';

export interface Obj {
  foo?: string;
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
      <stencil-props>
        <div>str - {this.str}</div>
        <div>num - {this.num}</div>
        <div>obj - {this.obj.foo}</div>
        <div>arr - {this.arr[2]}</div>
        <div>boo - {this.bool ? 'true' : 'false'}</div>
      </stencil-props>
    );
  }
}
```

which outputs

```html
<div>
  <div>str - abc</div>
  <div>num - 1</div>
  <div>obj - bar</div>
  <div>arr - 3</div>
  <div>boo - true</div>
</div>
```

## Options

### show-errors (default: false)

```jsx
<stencil-props data-str='{x}' show-errors>
```

'show-errors' will log errors to the console

###  pass-invalid (default: false)

```jsx
<stencil-props data-str='{y}' pass-invalid>
```

'pass-invalid' will pass values to component even if parsing fails
