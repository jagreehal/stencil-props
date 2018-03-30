import '../../stencil.core';
export declare class StencilProps {
    el: HTMLElement;
    component: string;
    componentProps: {
        [key: string]: any;
    };
    showErrors: boolean;
    componentWillLoad(): void;
    render(): JSX.Element;
}
