import { createElement, detach, rippleEffect } from '@syncfusion/ej2-base';
import { getValue, setValue } from '@syncfusion/ej2-base';
export function wrapperInitialize(tag, type, element, WRAPPER) {
    if (element.tagName === tag) {
        var ejInstance = getValue('ej2_instances', element);
        var input = createElement('input', { attrs: { 'type': type } });
        var props = ['change', 'cssClass', 'label', 'labelPosition'];
        var wrapper = createElement(tag, {
            className: WRAPPER, attrs: { 'role': type, 'aria-checked': 'false' }
        });
        for (var index = 0, len = element.attributes.length; index < len; index++) {
            if (props.indexOf(element.attributes[index].nodeName) === -1) {
                input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
            }
        }
        element.parentNode.insertBefore(input, element);
        detach(element);
        element = input;
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(element);
        setValue('ej2_instances', ejInstance, element);
    }
    return element;
}
export function getTextNode(element) {
    var node;
    var childnode = element.childNodes;
    for (var i = 0; i < childnode.length; i++) {
        node = childnode[i];
        if (node.nodeType === 3) {
            return node;
        }
    }
    return null;
}
export function createCheckBox() {
    var wrapper = createElement('div', { className: 'e-checkbox-wrapper' });
    var frameSpan = createElement('span', { className: 'e-frame e-icons' });
    var rippleSpan = createElement('span', { className: 'e-ripple-container' });
    rippleEffect(rippleSpan, { isCenterRipple: true, duration: 400 });
    frameSpan.appendChild(rippleSpan);
    wrapper.appendChild(frameSpan);
    return wrapper;
}
