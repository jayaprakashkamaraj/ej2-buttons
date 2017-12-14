import { createElement, detach, rippleEffect, setValue } from '@syncfusion/ej2-base';
import { getValue, addClass } from '@syncfusion/ej2-base';
/**
 * Initialize wrapper element for angular.
 * @private
 */
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
/**
 * Creates CheckBox component UI with theming and ripple support.
 * @private
 */
export function createCheckBox(enableRipple, options) {
    if (enableRipple === void 0) { enableRipple = false; }
    if (options === void 0) { options = {}; }
    var wrapper = createElement('div', { className: 'e-checkbox-wrapper' });
    if (options.cssClass) {
        addClass([wrapper], options.cssClass.split(' '));
    }
    if (options.enableRtl) {
        wrapper.classList.add('e-rtl');
    }
    if (enableRipple) {
        var rippleSpan = createElement('span', { className: 'e-ripple-container' });
        rippleEffect(rippleSpan, { isCenterRipple: true, duration: 400 });
        wrapper.appendChild(rippleSpan);
    }
    var frameSpan = createElement('span', { className: 'e-frame e-icons' });
    if (options.checked) {
        frameSpan.classList.add('e-check');
    }
    wrapper.appendChild(frameSpan);
    if (options.label) {
        var labelSpan = createElement('span', { className: 'e-label', innerHTML: options.label });
        wrapper.appendChild(labelSpan);
    }
    return wrapper;
}
export function rippleMouseHandler(e, rippleSpan) {
    if (rippleSpan) {
        var event_1 = document.createEvent('MouseEvents');
        event_1.initEvent(e.type, false, true);
        rippleSpan.dispatchEvent(event_1);
    }
}