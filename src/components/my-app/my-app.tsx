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
