import { createElement, detach } from '@syncfusion/ej2-base';
import { getValue, setValue } from '@syncfusion/ej2-base';

/**
 * Initialize wrapper element for angular.
 * @private
 */
export function wrapperInitialize(tag: string, type: string, element: HTMLInputElement, WRAPPER: string): HTMLInputElement {
    if (element.tagName === tag) {
        let ejInstance: Object = getValue('ej2_instances', element);
        let input: Element = createElement('input', { attrs: { 'type': type } });
        let props: string[] = ['change', 'cssClass', 'label', 'labelPosition'];
        let wrapper: Element = createElement(tag, {
            className: WRAPPER, attrs: { 'role': type, 'aria-checked': 'false' }
        });
        for (let index: number = 0, len: number = element.attributes.length; index < len; index++) {
            if (props.indexOf(element.attributes[index].nodeName) === -1) {
                input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
            }
        }
        element.parentNode.insertBefore(input, element);
        detach(element);
        element = input as HTMLInputElement;
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        setValue('ej2_instances', ejInstance, element);
    }
    return element;
}

export function getTextNode( element: HTMLElement): Node  {
    let node: Node;
    let childnode: NodeList = element.childNodes;
    for (let i: number = 0; i < childnode.length; i++) {
        node = childnode[i];
        if (node.nodeType === 3) {
            return node;
        }
    }
    return null;
}

export interface EJ2Instance extends HTMLElement {
    ej2_instances: Object[];
}