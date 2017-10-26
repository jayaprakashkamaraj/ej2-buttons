/*!
*  filename: ej2-buttons.umd.js
*  version : 1.0.25
*  Copyright Syncfusion Inc. 2001 - 2017. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@syncfusion/ej2-base"));
	else if(typeof define === 'function' && define.amd)
		define(["@syncfusion/ej2-base"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@syncfusion/ej2-base")) : factory(root["@syncfusion/ej2-base"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(1), __webpack_require__(4), __webpack_require__(6), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, index_1, index_2, index_3, index_4) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(index_1);
	    __export(index_2);
	    __export(index_3);
	    __export(index_4);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, common_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(common_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    function wrapperInitialize(tag, type, element, WRAPPER) {
	        if (element.tagName === tag) {
	            var ejInstance = ej2_base_2.getValue('ej2_instances', element);
	            var input = ej2_base_1.createElement('input', { attrs: { 'type': type } });
	            var props = ['change', 'cssClass', 'label', 'labelPosition'];
	            var wrapper = ej2_base_1.createElement(tag, {
	                className: WRAPPER, attrs: { 'role': type, 'aria-checked': 'false' }
	            });
	            for (var index = 0, len = element.attributes.length; index < len; index++) {
	                if (props.indexOf(element.attributes[index].nodeName) === -1) {
	                    input.setAttribute(element.attributes[index].nodeName, element.attributes[index].nodeValue);
	                }
	            }
	            element.parentNode.insertBefore(input, element);
	            ej2_base_1.detach(element);
	            element = input;
	            element.parentNode.insertBefore(wrapper, element);
	            wrapper.appendChild(element);
	            ej2_base_2.setValue('ej2_instances', ejInstance, element);
	        }
	        return element;
	    }
	    exports.wrapperInitialize = wrapperInitialize;
	    function getTextNode(element) {
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
	    exports.getTextNode = getTextNode;
	    function createCheckBox(enableRipple, options) {
	        if (enableRipple === void 0) { enableRipple = false; }
	        if (options === void 0) { options = {}; }
	        var wrapper = ej2_base_1.createElement('div', { className: 'e-checkbox-wrapper' });
	        var frameSpan = ej2_base_1.createElement('span', { className: 'e-frame e-icons' });
	        if (options.checked) {
	            frameSpan.classList.add('e-check');
	        }
	        if (enableRipple) {
	            var rippleSpan = ej2_base_1.createElement('span', { className: 'e-ripple-container' });
	            ej2_base_1.rippleEffect(rippleSpan, { isCenterRipple: true, duration: 400 });
	            frameSpan.appendChild(rippleSpan);
	        }
	        wrapper.appendChild(frameSpan);
	        if (options.label) {
	            var labelSpan = ej2_base_1.createElement('span', { className: 'e-label', innerHTML: options.label });
	            wrapper.appendChild(labelSpan);
	        }
	        return wrapper;
	    }
	    exports.createCheckBox = createCheckBox;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, button_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(button_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, common_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var cssClassName = {
	        RTL: 'e-rtl',
	        BUTTON: 'e-btn',
	        PRIMARY: 'e-primary',
	        ICONBTN: 'e-icon-btn'
	    };
	    var Button = (function (_super) {
	        __extends(Button, _super);
	        function Button(options, element) {
	            return _super.call(this, options, element) || this;
	        }
	        Button.prototype.preRender = function () {
	        };
	        Button.prototype.render = function () {
	            this.initialize();
	        };
	        Button.prototype.initialize = function () {
	            if (this.cssClass) {
	                ej2_base_3.addClass([this.element], this.cssClass.split(' '));
	            }
	            if (this.isPrimary) {
	                this.element.classList.add(cssClassName.PRIMARY);
	            }
	            if (this.content) {
	                this.element.innerHTML = this.content;
	            }
	            this.setIconCss();
	            if (this.enableRtl) {
	                this.element.classList.add(cssClassName.RTL);
	            }
	            if (this.disabled) {
	                this.controlStatus(this.disabled);
	            }
	            ej2_base_2.rippleEffect(this.element, { selector: '.' + cssClassName.BUTTON });
	            this.wireEvents();
	        };
	        Button.prototype.controlStatus = function (disabled) {
	            this.element.disabled = disabled;
	        };
	        Button.prototype.setIconCss = function () {
	            if (this.iconCss) {
	                if (!this.element.textContent) {
	                    this.element.classList.add(cssClassName.ICONBTN);
	                }
	                var span = ej2_base_3.createElement('span', { className: 'e-btn-icon ' + this.iconCss });
	                var node = this.element.childNodes[0];
	                if (node && this.iconPosition === 'left') {
	                    this.element.insertBefore(span, node);
	                    span.classList.add('e-icon-left');
	                }
	                else {
	                    this.element.appendChild(span);
	                    if (this.iconPosition === 'right') {
	                        span.classList.add('e-icon-right');
	                    }
	                }
	            }
	        };
	        Button.prototype.wireEvents = function () {
	            if (this.isToggle) {
	                ej2_base_2.EventHandler.add(this.element, 'click', this.btnClickHandler, this);
	            }
	        };
	        Button.prototype.unWireEvents = function () {
	            if (this.isToggle) {
	                ej2_base_2.EventHandler.remove(this.element, 'click', this.btnClickHandler);
	            }
	        };
	        Button.prototype.btnClickHandler = function () {
	            if (this.element.classList.contains('e-active')) {
	                this.element.classList.remove('e-active');
	            }
	            else {
	                this.element.classList.add('e-active');
	            }
	        };
	        Button.prototype.destroy = function () {
	            var span;
	            var element = this.element;
	            _super.prototype.destroy.call(this);
	            ej2_base_3.removeClass([this.element], [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, 'e-success',
	                'e-info', 'e-danger', 'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round']);
	            ['e-ripple', 'disabled'].forEach(function (value) {
	                element.removeAttribute(value);
	            });
	            if (this.content) {
	                element.innerHTML = element.innerHTML.replace(this.content, '');
	            }
	            span = element.querySelector('span.e-btn-icon');
	            if (span) {
	                ej2_base_3.detach(span);
	            }
	            this.unWireEvents();
	        };
	        Button.prototype.getModuleName = function () {
	            return 'btn';
	        };
	        Button.prototype.getPersistData = function () {
	            return this.addOnPersist([]);
	        };
	        Button.prototype.onPropertyChanged = function (newProp, oldProp) {
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'isPrimary':
	                        if (newProp.isPrimary) {
	                            this.element.classList.add(cssClassName.PRIMARY);
	                        }
	                        else {
	                            this.element.classList.remove(cssClassName.PRIMARY);
	                        }
	                        break;
	                    case 'disabled':
	                        this.controlStatus(this.disabled);
	                        break;
	                    case 'iconCss':
	                        var span = this.element.querySelector('span.e-btn-icon');
	                        if (span) {
	                            span.className = 'e-btn-icon ' + this.iconCss;
	                            if (this.element.textContent) {
	                                if (this.iconPosition === 'left') {
	                                    span.classList.add('e-icon-left');
	                                }
	                                else {
	                                    span.classList.add('e-icon-right');
	                                }
	                            }
	                        }
	                        else {
	                            this.setIconCss();
	                        }
	                        break;
	                    case 'iconPosition':
	                        span = this.element.querySelector('span.e-btn-icon');
	                        if (span) {
	                            ej2_base_3.detach(span);
	                        }
	                        this.setIconCss();
	                        break;
	                    case 'cssClass':
	                        if (oldProp.cssClass) {
	                            ej2_base_3.removeClass([this.element], oldProp.cssClass.split(' '));
	                        }
	                        ej2_base_3.addClass([this.element], newProp.cssClass.split(' '));
	                        break;
	                    case 'enableRtl':
	                        if (newProp.enableRtl) {
	                            this.element.classList.add(cssClassName.RTL);
	                        }
	                        else {
	                            this.element.classList.remove(cssClassName.RTL);
	                        }
	                        break;
	                    case 'content':
	                        var node = common_1.getTextNode(this.element);
	                        if (node) {
	                            node.textContent = newProp.content;
	                        }
	                        else {
	                            this.element.innerHTML = newProp.content;
	                            this.element.classList.remove(cssClassName.ICONBTN);
	                            this.setIconCss();
	                        }
	                        break;
	                    case 'isToggle':
	                        if (newProp.isToggle) {
	                            ej2_base_2.EventHandler.add(this.element, 'click', this.btnClickHandler, this);
	                        }
	                        else {
	                            ej2_base_2.EventHandler.remove(this.element, 'click', this.btnClickHandler);
	                            ej2_base_3.removeClass([this.element], ['e-active']);
	                        }
	                        break;
	                }
	            }
	        };
	        return Button;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_1.Property('left')
	    ], Button.prototype, "iconPosition", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Button.prototype, "iconCss", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Button.prototype, "disabled", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Button.prototype, "isPrimary", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Button.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], Button.prototype, "content", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], Button.prototype, "isToggle", void 0);
	    Button = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], Button);
	    exports.Button = Button;
	    exports.buttonBuilder = ej2_base_2.CreateBuilder(Button);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, check_box_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(check_box_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var CHECK = 'e-check';
	    var DISABLED = 'e-checkbox-disabled';
	    var FRAME = 'e-frame';
	    var INDETERMINATE = 'e-stop';
	    var LABEL = 'e-label';
	    var RIPPLE = 'e-ripple-container';
	    var RTL = 'e-rtl';
	    var WRAPPER = 'e-checkbox-wrapper';
	    var CheckBox = (function (_super) {
	        __extends(CheckBox, _super);
	        function CheckBox(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.isKeyPressed = false;
	            return _this;
	        }
	        CheckBox.prototype.changeState = function (state) {
	            var ariaState;
	            var frameSpan = this.getWrapper().getElementsByClassName(FRAME)[0];
	            if (state === 'check') {
	                frameSpan.classList.remove(INDETERMINATE);
	                frameSpan.classList.add(CHECK);
	                ariaState = 'true';
	                this.element.checked = true;
	            }
	            else if (state === 'uncheck') {
	                ej2_base_3.removeClass([frameSpan], [CHECK, INDETERMINATE]);
	                ariaState = 'false';
	                this.element.checked = false;
	            }
	            else {
	                frameSpan.classList.remove(CHECK);
	                frameSpan.classList.add(INDETERMINATE);
	                ariaState = 'mixed';
	                this.element.indeterminate = true;
	            }
	            this.getWrapper().setAttribute('aria-checked', ariaState);
	        };
	        CheckBox.prototype.clickHandler = function (event) {
	            this.focusOutHandler();
	            if (this.indeterminate) {
	                this.changeState(this.checked ? 'check' : 'uncheck');
	                this.indeterminate = false;
	                this.element.indeterminate = false;
	            }
	            else if (this.checked) {
	                this.changeState('uncheck');
	                this.checked = false;
	            }
	            else {
	                this.changeState('check');
	                this.checked = true;
	            }
	            var changeEventArgs = { checked: this.element.checked, event: event };
	            this.trigger('change', changeEventArgs);
	        };
	        CheckBox.prototype.destroy = function () {
	            var wrapper = this.getWrapper();
	            _super.prototype.destroy.call(this);
	            if (!this.disabled) {
	                this.unWireEvents();
	            }
	            wrapper.parentNode.insertBefore(this.element, wrapper);
	            ej2_base_3.detach(wrapper);
	            this.element.checked = false;
	            if (this.indeterminate) {
	                this.element.indeterminate = false;
	            }
	            if (this.name) {
	                this.element.removeAttribute('name');
	            }
	            if (this.value) {
	                this.element.removeAttribute('value');
	            }
	            if (this.disabled) {
	                this.element.removeAttribute('disabled');
	            }
	        };
	        CheckBox.prototype.focusHandler = function () {
	            if (this.isKeyPressed) {
	                this.getWrapper().classList.add('e-focus');
	            }
	        };
	        CheckBox.prototype.focusOutHandler = function () {
	            this.getWrapper().classList.remove('e-focus');
	        };
	        CheckBox.prototype.getModuleName = function () {
	            return 'checkbox';
	        };
	        CheckBox.prototype.getPersistData = function () {
	            return this.addOnPersist(['checked', 'indeterminate']);
	        };
	        CheckBox.prototype.getWrapper = function () {
	            return this.element.parentElement.parentElement;
	        };
	        CheckBox.prototype.initialize = function () {
	            if (this.name) {
	                this.element.setAttribute('name', this.name);
	            }
	            if (this.value) {
	                this.element.setAttribute('value', this.value);
	            }
	            if (this.checked) {
	                this.changeState('check');
	            }
	            if (this.indeterminate) {
	                this.changeState();
	            }
	            if (this.disabled) {
	                this.setDisabled();
	            }
	        };
	        CheckBox.prototype.initWrapper = function () {
	            var wrapper = this.element.parentElement;
	            if (!wrapper.classList.contains(WRAPPER)) {
	                wrapper = ej2_base_3.createElement('div', {
	                    className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
	                });
	                this.element.parentNode.insertBefore(wrapper, this.element);
	            }
	            var label = ej2_base_3.createElement('label', { attrs: { for: this.element.id } });
	            var frameSpan = ej2_base_3.createElement('span', { className: 'e-icons ' + FRAME });
	            if (this.enableRtl) {
	                wrapper.classList.add(RTL);
	            }
	            if (this.cssClass) {
	                ej2_base_3.addClass([wrapper], this.cssClass.split(' '));
	            }
	            wrapper.appendChild(label);
	            label.appendChild(this.element);
	            label.appendChild(frameSpan);
	            if (ej2_base_3.isRippleEnabled) {
	                var rippleSpan = ej2_base_3.createElement('span', { className: RIPPLE });
	                frameSpan.appendChild(rippleSpan);
	                ej2_base_3.rippleEffect(rippleSpan, { duration: 400, isCenterRipple: true });
	            }
	            if (this.label) {
	                this.setText(this.label);
	            }
	        };
	        CheckBox.prototype.keyActionHandler = function (e) {
	            if (e.action === 'space') {
	                e.preventDefault();
	                this.clickHandler(e);
	                this.focusHandler();
	            }
	        };
	        CheckBox.prototype.keyDownHandler = function () {
	            this.isKeyPressed = true;
	        };
	        CheckBox.prototype.labelMouseHandler = function (e) {
	            var rippleSpan = this.getWrapper().getElementsByClassName(RIPPLE)[0];
	            if (rippleSpan) {
	                var event_1 = document.createEvent('MouseEvents');
	                event_1.initEvent(e.type, true, true);
	                rippleSpan.dispatchEvent(event_1);
	            }
	        };
	        CheckBox.prototype.mouseDownHandler = function () {
	            this.isKeyPressed = false;
	        };
	        CheckBox.prototype.onPropertyChanged = function (newProp, oldProp) {
	            var wrapper = this.getWrapper();
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'checked':
	                        this.indeterminate = false;
	                        this.element.indeterminate = false;
	                        this.changeState(newProp.checked ? 'check' : 'uncheck');
	                        break;
	                    case 'indeterminate':
	                        if (newProp.indeterminate) {
	                            this.changeState();
	                        }
	                        else {
	                            this.element.indeterminate = false;
	                            this.changeState(this.checked ? 'check' : 'uncheck');
	                        }
	                        break;
	                    case 'disabled':
	                        if (newProp.disabled) {
	                            this.setDisabled();
	                            this.unWireEvents();
	                        }
	                        else {
	                            this.element.disabled = false;
	                            wrapper.classList.remove(DISABLED);
	                            wrapper.setAttribute('aria-disabled', 'false');
	                            this.wireEvents();
	                        }
	                        break;
	                    case 'cssClass':
	                        if (oldProp.cssClass) {
	                            wrapper.classList.remove(oldProp.cssClass);
	                        }
	                        wrapper.classList.add(newProp.cssClass);
	                        break;
	                    case 'enableRtl':
	                        if (newProp.enableRtl) {
	                            wrapper.classList.add(RTL);
	                        }
	                        else {
	                            wrapper.classList.remove(RTL);
	                        }
	                        break;
	                    case 'label':
	                        this.setText(newProp.label);
	                        break;
	                    case 'labelPosition':
	                        var label = wrapper.getElementsByClassName(LABEL)[0];
	                        var labelWrap = wrapper.getElementsByTagName('label')[0];
	                        ej2_base_3.detach(label);
	                        if (newProp.labelPosition === 'after') {
	                            labelWrap.appendChild(label);
	                        }
	                        else {
	                            labelWrap.insertBefore(label, wrapper.getElementsByClassName(FRAME)[0]);
	                        }
	                        break;
	                    case 'name':
	                        this.element.setAttribute('name', newProp.name);
	                        break;
	                    case 'value':
	                        this.element.setAttribute('value', newProp.value);
	                        break;
	                }
	            }
	        };
	        CheckBox.prototype.preRender = function () {
	            if (this.element.tagName === 'EJ-CHECKBOX') {
	                var ejInst = ej2_base_4.getValue('ej2_instances', this.element);
	                var input = ej2_base_3.createElement('input', { attrs: { 'type': 'checkbox' } });
	                var props = ['change', 'cssClass', 'indeterminate', 'label', 'labelPosition'];
	                var wrapper = ej2_base_3.createElement('EJ-CHECKBOX', {
	                    className: WRAPPER, attrs: { 'role': 'checkbox', 'aria-checked': 'false' }
	                });
	                for (var index = 0, len = this.element.attributes.length; index < len; index++) {
	                    if (props.indexOf(this.element.attributes[index].nodeName) === -1) {
	                        input.setAttribute(this.element.attributes[index].nodeName, this.element.attributes[index].nodeValue);
	                    }
	                }
	                this.element.parentNode.insertBefore(input, this.element);
	                ej2_base_3.detach(this.element);
	                this.element = input;
	                this.element.parentNode.insertBefore(wrapper, this.element);
	                wrapper.appendChild(this.element);
	                ej2_base_4.setValue('ej2_instances', ejInst, this.element);
	            }
	            if (this.element.getAttribute('type') !== 'checkbox') {
	                this.element.setAttribute('type', 'checkbox');
	            }
	            if (!this.element.id) {
	                this.element.id = ej2_base_4.getUniqueID('e-' + this.getModuleName());
	            }
	        };
	        CheckBox.prototype.render = function () {
	            this.initWrapper();
	            this.initialize();
	            if (!this.disabled) {
	                this.wireEvents();
	            }
	        };
	        CheckBox.prototype.setDisabled = function () {
	            var wrapper = this.getWrapper();
	            this.element.disabled = true;
	            wrapper.classList.add(DISABLED);
	            wrapper.setAttribute('aria-disabled', 'true');
	        };
	        CheckBox.prototype.setText = function (text) {
	            var label = this.getWrapper().getElementsByClassName(LABEL)[0];
	            if (label) {
	                label.textContent = text;
	            }
	            else {
	                label = ej2_base_3.createElement('span', { className: LABEL, innerHTML: text });
	                var labelWrap = this.getWrapper().getElementsByTagName('label')[0];
	                if (this.labelPosition === 'before') {
	                    labelWrap.insertBefore(label, this.getWrapper().getElementsByClassName(FRAME)[0]);
	                }
	                else {
	                    labelWrap.appendChild(label);
	                }
	            }
	        };
	        CheckBox.prototype.unWireEvents = function () {
	            var wrapper = this.getWrapper();
	            ej2_base_2.EventHandler.remove(this.element, 'click', this.clickHandler);
	            this.keyboardModule.destroy();
	            ej2_base_2.EventHandler.remove(document, 'keydown', this.keyDownHandler);
	            ej2_base_2.EventHandler.remove(wrapper, 'mousedown', this.mouseDownHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focus', this.focusHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
	            var label = wrapper.getElementsByClassName('e-label')[0];
	            if (label) {
	                ej2_base_2.EventHandler.remove(label, 'mousedown', this.labelMouseHandler);
	                ej2_base_2.EventHandler.remove(label, 'mouseup', this.labelMouseHandler);
	            }
	        };
	        CheckBox.prototype.wireEvents = function () {
	            var wrapper = this.getWrapper();
	            ej2_base_2.EventHandler.add(this.element, 'click', this.clickHandler, this);
	            this.keyboardModule = new ej2_base_2.KeyboardEvents(wrapper, {
	                eventName: 'keydown',
	                keyAction: this.keyActionHandler.bind(this),
	                keyConfigs: { space: 'space' }
	            });
	            ej2_base_2.EventHandler.add(document, 'keydown', this.keyDownHandler, this);
	            ej2_base_2.EventHandler.add(wrapper, 'mousedown', this.mouseDownHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focus', this.focusHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
	            var label = wrapper.getElementsByClassName('e-label')[0];
	            if (label) {
	                ej2_base_2.EventHandler.add(label, 'mousedown', this.labelMouseHandler, this);
	                ej2_base_2.EventHandler.add(label, 'mouseup', this.labelMouseHandler, this);
	            }
	        };
	        return CheckBox;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_2.Event()
	    ], CheckBox.prototype, "change", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], CheckBox.prototype, "checked", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], CheckBox.prototype, "disabled", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], CheckBox.prototype, "indeterminate", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "label", void 0);
	    __decorate([
	        ej2_base_1.Property('after')
	    ], CheckBox.prototype, "labelPosition", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "name", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], CheckBox.prototype, "value", void 0);
	    CheckBox = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], CheckBox);
	    exports.CheckBox = CheckBox;
	    exports.checkBoxBuilder = ej2_base_1.CreateBuilder(CheckBox);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, radio_button_1) {
	    "use strict";
	    function __export(m) {
	        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	    }
	    Object.defineProperty(exports, "__esModule", { value: true });
	    __export(radio_button_1);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(3), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, ej2_base_1, ej2_base_2, ej2_base_3, ej2_base_4, common_1) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", { value: true });
	    var LABEL = 'e-label';
	    var RIPPLE = 'e-ripple-container';
	    var RTL = 'e-rtl';
	    var WRAPPER = 'e-radio-wrapper';
	    var RadioButton = (function (_super) {
	        __extends(RadioButton, _super);
	        function RadioButton(options, element) {
	            var _this = _super.call(this, options, element) || this;
	            _this.isKeyPressed = false;
	            return _this;
	        }
	        RadioButton.prototype.changeHandler = function (event) {
	            this.checked = true;
	            var changeEventArgs = { checked: true, event: event };
	            this.trigger('change', changeEventArgs);
	        };
	        RadioButton.prototype.updateChange = function (state) {
	            var input;
	            var name = this.element.getAttribute('name');
	            var radioGrp = document.querySelectorAll('input.e-radio[name="' + name + '"]');
	            for (var i = 0; i < radioGrp.length; i++) {
	                input = radioGrp[i];
	                if (input !== this.element) {
	                    input.ej2_instances[0].checked = false;
	                }
	            }
	        };
	        RadioButton.prototype.destroy = function () {
	            var label = this.getLabel();
	            _super.prototype.destroy.call(this);
	            if (!this.disabled) {
	                this.unWireEvents();
	            }
	            ej2_base_3.detach(label);
	            this.element.checked = false;
	            if (this.name) {
	                this.element.removeAttribute('name');
	            }
	            if (this.value) {
	                this.element.removeAttribute('value');
	            }
	            if (this.disabled) {
	                this.element.removeAttribute('disabled');
	            }
	        };
	        RadioButton.prototype.focusHandler = function () {
	            if (this.isKeyPressed) {
	                this.getLabel().classList.add('e-focus');
	            }
	        };
	        RadioButton.prototype.focusOutHandler = function () {
	            this.getLabel().classList.remove('e-focus');
	        };
	        RadioButton.prototype.getModuleName = function () {
	            return 'radio';
	        };
	        RadioButton.prototype.getPersistData = function () {
	            return this.addOnPersist(['checked']);
	        };
	        RadioButton.prototype.getLabel = function () {
	            return this.element.nextElementSibling;
	        };
	        RadioButton.prototype.initialize = function () {
	            this.initWrapper();
	            if (this.name) {
	                this.element.setAttribute('name', this.name);
	            }
	            if (this.value) {
	                this.element.setAttribute('value', this.value);
	            }
	            if (this.checked) {
	                this.element.checked = true;
	            }
	            if (this.disabled) {
	                this.setDisabled();
	            }
	        };
	        RadioButton.prototype.initWrapper = function () {
	            var rippleSpan;
	            var wrapper = this.element.parentElement;
	            if (!wrapper.classList.contains(WRAPPER)) {
	                wrapper = ej2_base_3.createElement('div', { className: WRAPPER });
	                this.element.parentNode.insertBefore(wrapper, this.element);
	            }
	            var label = ej2_base_3.createElement('label', { attrs: { for: this.element.id } });
	            wrapper.appendChild(this.element);
	            wrapper.appendChild(label);
	            if (ej2_base_3.isRippleEnabled) {
	                rippleSpan = ej2_base_3.createElement('span', { className: (RIPPLE) });
	                label.appendChild(rippleSpan);
	                ej2_base_1.rippleEffect(rippleSpan, {
	                    duration: 400,
	                    isCenterRipple: true
	                });
	            }
	            if (this.enableRtl) {
	                label.classList.add(RTL);
	            }
	            if (this.cssClass) {
	                ej2_base_3.addClass([label], this.cssClass.split(' '));
	            }
	            if (this.label) {
	                this.setText(this.label);
	            }
	        };
	        RadioButton.prototype.keyDownHandler = function () {
	            this.isKeyPressed = true;
	        };
	        RadioButton.prototype.labelRippleHandler = function (e) {
	            var ripple = this.getLabel().getElementsByClassName(RIPPLE)[0];
	            if (ripple) {
	                var event_1 = document.createEvent('MouseEvents');
	                event_1.initEvent(e.type, true, true);
	                ripple.dispatchEvent(event_1);
	            }
	        };
	        RadioButton.prototype.mouseDownHandler = function () {
	            this.isKeyPressed = false;
	        };
	        RadioButton.prototype.onPropertyChanged = function (newProp, oldProp) {
	            var label = this.getLabel();
	            for (var _i = 0, _a = Object.keys(newProp); _i < _a.length; _i++) {
	                var prop = _a[_i];
	                switch (prop) {
	                    case 'checked':
	                        if (newProp.checked) {
	                            this.updateChange(newProp.checked);
	                        }
	                        this.element.checked = newProp.checked;
	                        break;
	                    case 'disabled':
	                        if (newProp.disabled) {
	                            this.setDisabled();
	                            this.unWireEvents();
	                        }
	                        else {
	                            this.element.disabled = false;
	                            this.wireEvents();
	                        }
	                        break;
	                    case 'cssClass':
	                        if (oldProp.cssClass) {
	                            label.classList.remove(oldProp.cssClass);
	                        }
	                        label.classList.add(newProp.cssClass);
	                        break;
	                    case 'enableRtl':
	                        if (newProp.enableRtl) {
	                            label.classList.add(RTL);
	                        }
	                        else {
	                            label.classList.remove(RTL);
	                        }
	                        break;
	                    case 'label':
	                        this.setText(newProp.label);
	                        break;
	                    case 'labelPosition':
	                        if (newProp.labelPosition === 'before') {
	                            label.classList.add('e-right');
	                        }
	                        else {
	                            label.classList.remove('e-right');
	                        }
	                        break;
	                    case 'name':
	                        this.element.setAttribute('name', newProp.name);
	                        break;
	                    case 'value':
	                        this.element.setAttribute('value', newProp.value);
	                        break;
	                }
	            }
	        };
	        RadioButton.prototype.preRender = function () {
	            var element = this.element;
	            element = common_1.wrapperInitialize('EJ-RADIOBUTTON', 'radio', element, WRAPPER);
	            this.element = element;
	            if (this.element.getAttribute('type') !== 'radio') {
	                this.element.setAttribute('type', 'radio');
	            }
	            if (!this.element.id) {
	                this.element.id = ej2_base_4.getUniqueID('e-' + this.getModuleName());
	            }
	        };
	        RadioButton.prototype.render = function () {
	            this.initialize();
	            if (!this.disabled) {
	                this.wireEvents();
	            }
	        };
	        RadioButton.prototype.setDisabled = function () {
	            this.element.disabled = true;
	        };
	        RadioButton.prototype.setText = function (text) {
	            var label = this.getLabel();
	            var textLabel = label.getElementsByClassName(LABEL)[0];
	            if (textLabel) {
	                textLabel.textContent = text;
	            }
	            else {
	                textLabel = ej2_base_3.createElement('span', { className: LABEL, innerHTML: text });
	                label.appendChild(textLabel);
	            }
	            if (this.labelPosition === 'before') {
	                this.getLabel().classList.add('e-right');
	            }
	            else {
	                this.getLabel().classList.remove('e-right');
	            }
	        };
	        RadioButton.prototype.unWireEvents = function () {
	            var label = this.getLabel();
	            ej2_base_2.EventHandler.remove(this.element, 'change', this.changeHandler);
	            ej2_base_2.EventHandler.remove(document, 'keydown', this.keyDownHandler);
	            ej2_base_2.EventHandler.remove(label, 'mousedown', this.mouseDownHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focus', this.focusHandler);
	            ej2_base_2.EventHandler.remove(this.element, 'focusout', this.focusOutHandler);
	            var rippleLabel = label.getElementsByClassName(LABEL)[0];
	            if (rippleLabel) {
	                ej2_base_2.EventHandler.remove(rippleLabel, 'mousedown', this.labelRippleHandler);
	                ej2_base_2.EventHandler.remove(rippleLabel, 'mouseup', this.labelRippleHandler);
	            }
	        };
	        RadioButton.prototype.wireEvents = function () {
	            var label = this.getLabel();
	            ej2_base_2.EventHandler.add(this.element, 'change', this.changeHandler, this);
	            ej2_base_2.EventHandler.add(document, 'keydown', this.keyDownHandler, this);
	            ej2_base_2.EventHandler.add(label, 'mousedown', this.mouseDownHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focus', this.focusHandler, this);
	            ej2_base_2.EventHandler.add(this.element, 'focusout', this.focusOutHandler, this);
	            var rippleLabel = label.getElementsByClassName(LABEL)[0];
	            if (rippleLabel) {
	                ej2_base_2.EventHandler.add(rippleLabel, 'mousedown', this.labelRippleHandler, this);
	                ej2_base_2.EventHandler.add(rippleLabel, 'mouseup', this.labelRippleHandler, this);
	            }
	        };
	        return RadioButton;
	    }(ej2_base_1.Component));
	    __decorate([
	        ej2_base_2.Event()
	    ], RadioButton.prototype, "change", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], RadioButton.prototype, "checked", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "cssClass", void 0);
	    __decorate([
	        ej2_base_1.Property(false)
	    ], RadioButton.prototype, "disabled", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "label", void 0);
	    __decorate([
	        ej2_base_1.Property('after')
	    ], RadioButton.prototype, "labelPosition", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "name", void 0);
	    __decorate([
	        ej2_base_1.Property('')
	    ], RadioButton.prototype, "value", void 0);
	    RadioButton = __decorate([
	        ej2_base_1.NotifyPropertyChanges
	    ], RadioButton);
	    exports.RadioButton = RadioButton;
	    exports.radioButtonBuilder = ej2_base_1.CreateBuilder(RadioButton);
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YjhkOTllOWFjYjQyY2FmYTZkNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiIiwid2VicGFjazovLy8uL3NyYy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoZWNrLWJveC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hlY2stYm94L2NoZWNrLWJveC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmFkaW8tYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yYWRpby1idXR0b24vcmFkaW8tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztpRUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQSxFQUFDOzs7Ozs7O2lFQ1BEO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQsU0FBUyxlQUFlLEVBQUU7QUFDckY7QUFDQTtBQUNBLDZDQUE0QztBQUM1QyxjQUFhO0FBQ2IsaUVBQWdFLGFBQWE7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLHNCQUFzQjtBQUM1RCxrQ0FBaUMsY0FBYztBQUMvQyx3REFBdUQsa0NBQWtDO0FBQ3pGLDJEQUEwRCwrQkFBK0I7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0Qsa0NBQWtDO0FBQ2pHLGtEQUFpRCxzQ0FBc0M7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQsaURBQWlEO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7O0FDM0RELGdEOzs7Ozs7aUVDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW1ELHNDQUFzQztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE2RCwwQ0FBMEM7QUFDdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXVELGdCQUFnQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7aUVDL05EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBa0QsY0FBYztBQUNoRTtBQUNBLEVBQUM7Ozs7Ozs7QUNQRDtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ25GLDBCQUF5Qix1REFBdUQ7QUFDaEY7QUFDQTtBQUNBLHdCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsUUFBUTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw0REFBMkQsU0FBUyx1QkFBdUIsRUFBRTtBQUM3RiwrREFBOEQsZ0NBQWdDO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW1FLG9CQUFvQjtBQUN2RjtBQUNBLHNEQUFxRCxzQ0FBc0M7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsZ0JBQWdCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBK0QsU0FBUyxxQkFBcUIsRUFBRTtBQUMvRjtBQUNBO0FBQ0EsaURBQWdEO0FBQ2hELGtCQUFpQjtBQUNqQiwwRUFBeUUsYUFBYTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEwRCxvQ0FBb0M7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QjtBQUM3QixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7Ozs7OztpRUNqWEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFrRCxjQUFjO0FBQ2hFO0FBQ0EsRUFBQzs7Ozs7OztBQ1BEO0FBQ0E7QUFDQSxXQUFVLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDbkYsMEJBQXlCLHVEQUF1RDtBQUNoRjtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLDZDQUE0QyxRQUFRO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWtELGNBQWM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQscUJBQXFCO0FBQ2hGO0FBQ0E7QUFDQSw0REFBMkQsU0FBUyx1QkFBdUIsRUFBRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQSxnRUFBK0Qsc0JBQXNCO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF1RCxnQkFBZ0I7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBOEQsb0NBQW9DO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyIsImZpbGUiOiJlajItYnV0dG9ucy51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIikpIDogZmFjdG9yeShyb290W1wiQHN5bmNmdXNpb24vZWoyLWJhc2VcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWI4ZDk5ZTlhY2I0MmNhZmE2ZDYiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NvbW1vbi9pbmRleFwiLCBcIi4vYnV0dG9uL2luZGV4XCIsIFwiLi9jaGVjay1ib3gvaW5kZXhcIiwgXCIuL3JhZGlvLWJ1dHRvbi9pbmRleFwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGluZGV4XzEsIGluZGV4XzIsIGluZGV4XzMsIGluZGV4XzQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGluZGV4XzEpO1xuICAgIF9fZXhwb3J0KGluZGV4XzIpO1xuICAgIF9fZXhwb3J0KGluZGV4XzMpO1xuICAgIF9fZXhwb3J0KGluZGV4XzQpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCIuL2NvbW1vblwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGNvbW1vbl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBfX2V4cG9ydChjb21tb25fMSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbW1vbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJkZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgZWoyX2Jhc2VfMSwgZWoyX2Jhc2VfMikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICBmdW5jdGlvbiB3cmFwcGVySW5pdGlhbGl6ZSh0YWcsIHR5cGUsIGVsZW1lbnQsIFdSQVBQRVIpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gdGFnKSB7XG4gICAgICAgICAgICB2YXIgZWpJbnN0YW5jZSA9IGVqMl9iYXNlXzIuZ2V0VmFsdWUoJ2VqMl9pbnN0YW5jZXMnLCBlbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBpbnB1dCA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IGF0dHJzOiB7ICd0eXBlJzogdHlwZSB9IH0pO1xuICAgICAgICAgICAgdmFyIHByb3BzID0gWydjaGFuZ2UnLCAnY3NzQ2xhc3MnLCAnbGFiZWwnLCAnbGFiZWxQb3NpdGlvbiddO1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQodGFnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBXUkFQUEVSLCBhdHRyczogeyAncm9sZSc6IHR5cGUsICdhcmlhLWNoZWNrZWQnOiAnZmFsc2UnIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW4gPSBlbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5pbmRleE9mKGVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZU5hbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoZWxlbWVudC5hdHRyaWJ1dGVzW2luZGV4XS5ub2RlTmFtZSwgZWxlbWVudC5hdHRyaWJ1dGVzW2luZGV4XS5ub2RlVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5wdXQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMS5kZXRhY2goZWxlbWVudCk7XG4gICAgICAgICAgICBlbGVtZW50ID0gaW5wdXQ7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIGVsZW1lbnQpO1xuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuc2V0VmFsdWUoJ2VqMl9pbnN0YW5jZXMnLCBlakluc3RhbmNlLCBlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgZXhwb3J0cy53cmFwcGVySW5pdGlhbGl6ZSA9IHdyYXBwZXJJbml0aWFsaXplO1xuICAgIGZ1bmN0aW9uIGdldFRleHROb2RlKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgIHZhciBjaGlsZG5vZGUgPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBub2RlID0gY2hpbGRub2RlW2ldO1xuICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZXhwb3J0cy5nZXRUZXh0Tm9kZSA9IGdldFRleHROb2RlO1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KGVuYWJsZVJpcHBsZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoZW5hYmxlUmlwcGxlID09PSB2b2lkIDApIHsgZW5hYmxlUmlwcGxlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdmFyIHdyYXBwZXIgPSBlajJfYmFzZV8xLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnZS1jaGVja2JveC13cmFwcGVyJyB9KTtcbiAgICAgICAgdmFyIGZyYW1lU3BhbiA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnZS1mcmFtZSBlLWljb25zJyB9KTtcbiAgICAgICAgaWYgKG9wdGlvbnMuY2hlY2tlZCkge1xuICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5hZGQoJ2UtY2hlY2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5hYmxlUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlU3BhbiA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnZS1yaXBwbGUtY29udGFpbmVyJyB9KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzEucmlwcGxlRWZmZWN0KHJpcHBsZVNwYW4sIHsgaXNDZW50ZXJSaXBwbGU6IHRydWUsIGR1cmF0aW9uOiA0MDAgfSk7XG4gICAgICAgICAgICBmcmFtZVNwYW4uYXBwZW5kQ2hpbGQocmlwcGxlU3Bhbik7XG4gICAgICAgIH1cbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChmcmFtZVNwYW4pO1xuICAgICAgICBpZiAob3B0aW9ucy5sYWJlbCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsU3BhbiA9IGVqMl9iYXNlXzEuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnZS1sYWJlbCcsIGlubmVySFRNTDogb3B0aW9ucy5sYWJlbCB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWxTcGFuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcbiAgICB9XG4gICAgZXhwb3J0cy5jcmVhdGVDaGVja0JveCA9IGNyZWF0ZUNoZWNrQm94O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21tb24vY29tbW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImRlZmluZShbXCJyZXF1aXJlXCIsIFwiZXhwb3J0c1wiLCBcIi4vYnV0dG9uXCJdLCBmdW5jdGlvbiAocmVxdWlyZSwgZXhwb3J0cywgYnV0dG9uXzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBmdW5jdGlvbiBfX2V4cG9ydChtKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIF9fZXhwb3J0KGJ1dHRvbl8xKTtcbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYnV0dG9uL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiLi4vY29tbW9uL2NvbW1vblwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGNvbW1vbl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBjc3NDbGFzc05hbWUgPSB7XG4gICAgICAgIFJUTDogJ2UtcnRsJyxcbiAgICAgICAgQlVUVE9OOiAnZS1idG4nLFxuICAgICAgICBQUklNQVJZOiAnZS1wcmltYXJ5JyxcbiAgICAgICAgSUNPTkJUTjogJ2UtaWNvbi1idG4nXG4gICAgfTtcbiAgICB2YXIgQnV0dG9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKEJ1dHRvbiwgX3N1cGVyKTtcbiAgICAgICAgZnVuY3Rpb24gQnV0dG9uKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUucHJlUmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgICBCdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBCdXR0b24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYWRkQ2xhc3MoW3RoaXMuZWxlbWVudF0sIHRoaXMuY3NzQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc1ByaW1hcnkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzc05hbWUuUFJJTUFSWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMuY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0SWNvbkNzcygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3NOYW1lLlJUTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFN0YXR1cyh0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzIucmlwcGxlRWZmZWN0KHRoaXMuZWxlbWVudCwgeyBzZWxlY3RvcjogJy4nICsgY3NzQ2xhc3NOYW1lLkJVVFRPTiB9KTtcbiAgICAgICAgICAgIHRoaXMud2lyZUV2ZW50cygpO1xuICAgICAgICB9O1xuICAgICAgICBCdXR0b24ucHJvdG90eXBlLmNvbnRyb2xTdGF0dXMgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgICB9O1xuICAgICAgICBCdXR0b24ucHJvdG90eXBlLnNldEljb25Dc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pY29uQ3NzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3NOYW1lLklDT05CVE4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgc3BhbiA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAnZS1idG4taWNvbiAnICsgdGhpcy5pY29uQ3NzIH0pO1xuICAgICAgICAgICAgICAgIHZhciBub2RlID0gdGhpcy5lbGVtZW50LmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgdGhpcy5pY29uUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHNwYW4sIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2UtaWNvbi1sZWZ0Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdlLWljb24tcmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQnV0dG9uLnByb3RvdHlwZS53aXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUb2dnbGUpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmJ0bkNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUudW5XaXJlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNUb2dnbGUpIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmJ0bkNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUuYnRuQ2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2UtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZS1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlLWFjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBCdXR0b24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3BhbjtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICBlajJfYmFzZV8zLnJlbW92ZUNsYXNzKFt0aGlzLmVsZW1lbnRdLCBbY3NzQ2xhc3NOYW1lLlBSSU1BUlksIGNzc0NsYXNzTmFtZS5SVEwsIGNzc0NsYXNzTmFtZS5JQ09OQlROLCAnZS1zdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAnZS1pbmZvJywgJ2UtZGFuZ2VyJywgJ2Utd2FybmluZycsICdlLWZsYXQnLCAnZS1vdXRsaW5lJywgJ2Utc21hbGwnLCAnZS1iaWdnZXInLCAnZS1hY3RpdmUnLCAnZS1yb3VuZCddKTtcbiAgICAgICAgICAgIFsnZS1yaXBwbGUnLCAnZGlzYWJsZWQnXS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gZWxlbWVudC5pbm5lckhUTUwucmVwbGFjZSh0aGlzLmNvbnRlbnQsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uZS1idG4taWNvbicpO1xuICAgICAgICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaChzcGFuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudW5XaXJlRXZlbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUuZ2V0TW9kdWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnYnRuJztcbiAgICAgICAgfTtcbiAgICAgICAgQnV0dG9uLnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChbXSk7XG4gICAgICAgIH07XG4gICAgICAgIEJ1dHRvbi5wcm90b3R5cGUub25Qcm9wZXJ0eUNoYW5nZWQgPSBmdW5jdGlvbiAobmV3UHJvcCwgb2xkUHJvcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG5ld1Byb3ApOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpc1ByaW1hcnknOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuaXNQcmltYXJ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3NOYW1lLlBSSU1BUlkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3NOYW1lLlBSSU1BUlkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Rpc2FibGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFN0YXR1cyh0aGlzLmRpc2FibGVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpY29uQ3NzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGFuID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uZS1idG4taWNvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuLmNsYXNzTmFtZSA9ICdlLWJ0bi1pY29uICcgKyB0aGlzLmljb25Dc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pY29uUG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdlLWljb24tbGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdlLWljb24tcmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SWNvbkNzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ljb25Qb3NpdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uZS1idG4taWNvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaChzcGFuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SWNvbkNzcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nzc0NsYXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRQcm9wLmNzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5yZW1vdmVDbGFzcyhbdGhpcy5lbGVtZW50XSwgb2xkUHJvcC5jc3NDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYWRkQ2xhc3MoW3RoaXMuZWxlbWVudF0sIG5ld1Byb3AuY3NzQ2xhc3Muc3BsaXQoJyAnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZW5hYmxlUnRsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLmVuYWJsZVJ0bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzTmFtZS5SVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3NOYW1lLlJUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29udGVudCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGNvbW1vbl8xLmdldFRleHROb2RlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBuZXdQcm9wLmNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gbmV3UHJvcC5jb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzTmFtZS5JQ09OQlROKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEljb25Dc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpc1RvZ2dsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5pc1RvZ2dsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuYnRuQ2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdjbGljaycsIHRoaXMuYnRuQ2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLnJlbW92ZUNsYXNzKFt0aGlzLmVsZW1lbnRdLCBbJ2UtYWN0aXZlJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQnV0dG9uO1xuICAgIH0oZWoyX2Jhc2VfMS5Db21wb25lbnQpKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnbGVmdCcpXG4gICAgXSwgQnV0dG9uLnByb3RvdHlwZSwgXCJpY29uUG9zaXRpb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBCdXR0b24ucHJvdG90eXBlLCBcImljb25Dc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBCdXR0b24ucHJvdG90eXBlLCBcImRpc2FibGVkXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgQnV0dG9uLnByb3RvdHlwZSwgXCJpc1ByaW1hcnlcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBCdXR0b24ucHJvdG90eXBlLCBcImNzc0NsYXNzXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoJycpXG4gICAgXSwgQnV0dG9uLnByb3RvdHlwZSwgXCJjb250ZW50XCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgQnV0dG9uLnByb3RvdHlwZSwgXCJpc1RvZ2dsZVwiLCB2b2lkIDApO1xuICAgIEJ1dHRvbiA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLk5vdGlmeVByb3BlcnR5Q2hhbmdlc1xuICAgIF0sIEJ1dHRvbik7XG4gICAgZXhwb3J0cy5CdXR0b24gPSBCdXR0b247XG4gICAgZXhwb3J0cy5idXR0b25CdWlsZGVyID0gZWoyX2Jhc2VfMi5DcmVhdGVCdWlsZGVyKEJ1dHRvbik7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2J1dHRvbi9idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9jaGVjay1ib3hcIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCBjaGVja19ib3hfMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQoY2hlY2tfYm94XzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jaGVjay1ib3gvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgdmFyIENIRUNLID0gJ2UtY2hlY2snO1xuICAgIHZhciBESVNBQkxFRCA9ICdlLWNoZWNrYm94LWRpc2FibGVkJztcbiAgICB2YXIgRlJBTUUgPSAnZS1mcmFtZSc7XG4gICAgdmFyIElOREVURVJNSU5BVEUgPSAnZS1zdG9wJztcbiAgICB2YXIgTEFCRUwgPSAnZS1sYWJlbCc7XG4gICAgdmFyIFJJUFBMRSA9ICdlLXJpcHBsZS1jb250YWluZXInO1xuICAgIHZhciBSVEwgPSAnZS1ydGwnO1xuICAgIHZhciBXUkFQUEVSID0gJ2UtY2hlY2tib3gtd3JhcHBlcic7XG4gICAgdmFyIENoZWNrQm94ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICAgICAgX19leHRlbmRzKENoZWNrQm94LCBfc3VwZXIpO1xuICAgICAgICBmdW5jdGlvbiBDaGVja0JveChvcHRpb25zLCBlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zLCBlbGVtZW50KSB8fCB0aGlzO1xuICAgICAgICAgICAgX3RoaXMuaXNLZXlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICAgIH1cbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLmNoYW5nZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgYXJpYVN0YXRlO1xuICAgICAgICAgICAgdmFyIGZyYW1lU3BhbiA9IHRoaXMuZ2V0V3JhcHBlcigpLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoRlJBTUUpWzBdO1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSAnY2hlY2snKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5yZW1vdmUoSU5ERVRFUk1JTkFURSk7XG4gICAgICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5hZGQoQ0hFQ0spO1xuICAgICAgICAgICAgICAgIGFyaWFTdGF0ZSA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0ZSA9PT0gJ3VuY2hlY2snKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5yZW1vdmVDbGFzcyhbZnJhbWVTcGFuXSwgW0NIRUNLLCBJTkRFVEVSTUlOQVRFXSk7XG4gICAgICAgICAgICAgICAgYXJpYVN0YXRlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJhbWVTcGFuLmNsYXNzTGlzdC5yZW1vdmUoQ0hFQ0spO1xuICAgICAgICAgICAgICAgIGZyYW1lU3Bhbi5jbGFzc0xpc3QuYWRkKElOREVURVJNSU5BVEUpO1xuICAgICAgICAgICAgICAgIGFyaWFTdGF0ZSA9ICdtaXhlZCc7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXRXcmFwcGVyKCkuc2V0QXR0cmlidXRlKCdhcmlhLWNoZWNrZWQnLCBhcmlhU3RhdGUpO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzT3V0SGFuZGxlcigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUodGhpcy5jaGVja2VkID8gJ2NoZWNrJyA6ICd1bmNoZWNrJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3VuY2hlY2snKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2NoZWNrJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGFuZ2VFdmVudEFyZ3MgPSB7IGNoZWNrZWQ6IHRoaXMuZWxlbWVudC5jaGVja2VkLCBldmVudDogZXZlbnQgfTtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywgY2hhbmdlRXZlbnRBcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZ2V0V3JhcHBlcigpO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kZXN0cm95LmNhbGwodGhpcyk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuV2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLmVsZW1lbnQsIHdyYXBwZXIpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2god3JhcHBlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNLZXlQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRXcmFwcGVyKCkuY2xhc3NMaXN0LmFkZCgnZS1mb2N1cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuZm9jdXNPdXRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRXcmFwcGVyKCkuY2xhc3NMaXN0LnJlbW92ZSgnZS1mb2N1cycpO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuZ2V0TW9kdWxlTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnY2hlY2tib3gnO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUuZ2V0UGVyc2lzdERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGRPblBlcnNpc3QoWydjaGVja2VkJywgJ2luZGV0ZXJtaW5hdGUnXSk7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5nZXRXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCB0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2NoZWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5pbml0V3JhcHBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoIXdyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFdSQVBQRVIpKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlciA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFdSQVBQRVIsIGF0dHJzOiB7ICdyb2xlJzogJ2NoZWNrYm94JywgJ2FyaWEtY2hlY2tlZCc6ICdmYWxzZScgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgYXR0cnM6IHsgZm9yOiB0aGlzLmVsZW1lbnQuaWQgfSB9KTtcbiAgICAgICAgICAgIHZhciBmcmFtZVNwYW4gPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2UtaWNvbnMgJyArIEZSQU1FIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFJUTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYWRkQ2xhc3MoW3dyYXBwZXJdLCB0aGlzLmNzc0NsYXNzLnNwbGl0KCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQoZnJhbWVTcGFuKTtcbiAgICAgICAgICAgIGlmIChlajJfYmFzZV8zLmlzUmlwcGxlRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHZhciByaXBwbGVTcGFuID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IFJJUFBMRSB9KTtcbiAgICAgICAgICAgICAgICBmcmFtZVNwYW4uYXBwZW5kQ2hpbGQocmlwcGxlU3Bhbik7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5yaXBwbGVFZmZlY3QocmlwcGxlU3BhbiwgeyBkdXJhdGlvbjogNDAwLCBpc0NlbnRlclJpcHBsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMubGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUua2V5QWN0aW9uSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5hY3Rpb24gPT09ICdzcGFjZScpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIoZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0hhbmRsZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLmtleURvd25IYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0tleVByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUubGFiZWxNb3VzZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZVNwYW4gPSB0aGlzLmdldFdyYXBwZXIoKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFJJUFBMRSlbMF07XG4gICAgICAgICAgICBpZiAocmlwcGxlU3Bhbikge1xuICAgICAgICAgICAgICAgIHZhciBldmVudF8xID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG4gICAgICAgICAgICAgICAgZXZlbnRfMS5pbml0RXZlbnQoZS50eXBlLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByaXBwbGVTcGFuLmRpc3BhdGNoRXZlbnQoZXZlbnRfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5tb3VzZURvd25IYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0tleVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLm9uUHJvcGVydHlDaGFuZ2VkID0gZnVuY3Rpb24gKG5ld1Byb3AsIG9sZFByb3ApIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShuZXdQcm9wLmNoZWNrZWQgPyAnY2hlY2snIDogJ3VuY2hlY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbmRldGVybWluYXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLmluZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUodGhpcy5jaGVja2VkID8gJ2NoZWNrJyA6ICd1bmNoZWNrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGlzYWJsZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERpc2FibGVkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShESVNBQkxFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndpcmVFdmVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjc3NDbGFzcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkUHJvcC5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShvbGRQcm9wLmNzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChuZXdQcm9wLmNzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFJUTCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoUlRMKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsYWJlbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRleHQobmV3UHJvcC5sYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbGFiZWxQb3NpdGlvbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFiZWwgPSB3cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTEFCRUwpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhYmVsV3JhcCA9IHdyYXBwZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xhYmVsJylbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBlajJfYmFzZV8zLmRldGFjaChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5sYWJlbFBvc2l0aW9uID09PSAnYWZ0ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxXcmFwLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsV3JhcC5pbnNlcnRCZWZvcmUobGFiZWwsIHdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShGUkFNRSlbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5ld1Byb3AubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdQcm9wLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0VKLUNIRUNLQk9YJykge1xuICAgICAgICAgICAgICAgIHZhciBlakluc3QgPSBlajJfYmFzZV80LmdldFZhbHVlKCdlajJfaW5zdGFuY2VzJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBhdHRyczogeyAndHlwZSc6ICdjaGVja2JveCcgfSB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcHMgPSBbJ2NoYW5nZScsICdjc3NDbGFzcycsICdpbmRldGVybWluYXRlJywgJ2xhYmVsJywgJ2xhYmVsUG9zaXRpb24nXTtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlciA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnRUotQ0hFQ0tCT1gnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogV1JBUFBFUiwgYXR0cnM6IHsgJ3JvbGUnOiAnY2hlY2tib3gnLCAnYXJpYS1jaGVja2VkJzogJ2ZhbHNlJyB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW4gPSB0aGlzLmVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wcy5pbmRleE9mKHRoaXMuZWxlbWVudC5hdHRyaWJ1dGVzW2luZGV4XS5ub2RlTmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50LmF0dHJpYnV0ZXNbaW5kZXhdLm5vZGVOYW1lLCB0aGlzLmVsZW1lbnQuYXR0cmlidXRlc1tpbmRleF0ubm9kZVZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaW5wdXQsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMy5kZXRhY2godGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBpbnB1dDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfNC5zZXRWYWx1ZSgnZWoyX2luc3RhbmNlcycsIGVqSW5zdCwgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgIT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGVqMl9iYXNlXzQuZ2V0VW5pcXVlSUQoJ2UtJyArIHRoaXMuZ2V0TW9kdWxlTmFtZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFdyYXBwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIENoZWNrQm94LnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKERJU0FCTEVEKTtcbiAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLnNldFRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5nZXRXcmFwcGVyKCkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShMQUJFTClbMF07XG4gICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYWJlbCA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBMQUJFTCwgaW5uZXJIVE1MOiB0ZXh0IH0pO1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbFdyYXAgPSB0aGlzLmdldFdyYXBwZXIoKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbGFiZWwnKVswXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFdyYXAuaW5zZXJ0QmVmb3JlKGxhYmVsLCB0aGlzLmdldFdyYXBwZXIoKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKEZSQU1FKVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbFdyYXAuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgQ2hlY2tCb3gucHJvdG90eXBlLnVuV2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkTW9kdWxlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZShkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh3cmFwcGVyLCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZSh0aGlzLmVsZW1lbnQsICdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRIYW5kbGVyKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZS1sYWJlbCcpWzBdO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKGxhYmVsLCAnbW91c2Vkb3duJywgdGhpcy5sYWJlbE1vdXNlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIucmVtb3ZlKGxhYmVsLCAnbW91c2V1cCcsIHRoaXMubGFiZWxNb3VzZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBDaGVja0JveC5wcm90b3R5cGUud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gdGhpcy5nZXRXcmFwcGVyKCk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5hZGQodGhpcy5lbGVtZW50LCAnY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkTW9kdWxlID0gbmV3IGVqMl9iYXNlXzIuS2V5Ym9hcmRFdmVudHMod3JhcHBlciwge1xuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2tleWRvd24nLFxuICAgICAgICAgICAgICAgIGtleUFjdGlvbjogdGhpcy5rZXlBY3Rpb25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAga2V5Q29uZmlnczogeyBzcGFjZTogJ3NwYWNlJyB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh3cmFwcGVyLCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHdyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZS1sYWJlbCcpWzBdO1xuICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGxhYmVsLCAnbW91c2Vkb3duJywgdGhpcy5sYWJlbE1vdXNlSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGxhYmVsLCAnbW91c2V1cCcsIHRoaXMubGFiZWxNb3VzZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gQ2hlY2tCb3g7XG4gICAgfShlajJfYmFzZV8xLkNvbXBvbmVudCkpO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8yLkV2ZW50KClcbiAgICBdLCBDaGVja0JveC5wcm90b3R5cGUsIFwiY2hhbmdlXCIsIHZvaWQgMCk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuUHJvcGVydHkoZmFsc2UpXG4gICAgXSwgQ2hlY2tCb3gucHJvdG90eXBlLCBcImNoZWNrZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBDaGVja0JveC5wcm90b3R5cGUsIFwiY3NzQ2xhc3NcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBDaGVja0JveC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBDaGVja0JveC5wcm90b3R5cGUsIFwiaW5kZXRlcm1pbmF0ZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIENoZWNrQm94LnByb3RvdHlwZSwgXCJsYWJlbFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhZnRlcicpXG4gICAgXSwgQ2hlY2tCb3gucHJvdG90eXBlLCBcImxhYmVsUG9zaXRpb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBDaGVja0JveC5wcm90b3R5cGUsIFwibmFtZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIENoZWNrQm94LnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgIENoZWNrQm94ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgQ2hlY2tCb3gpO1xuICAgIGV4cG9ydHMuQ2hlY2tCb3ggPSBDaGVja0JveDtcbiAgICBleHBvcnRzLmNoZWNrQm94QnVpbGRlciA9IGVqMl9iYXNlXzEuQ3JlYXRlQnVpbGRlcihDaGVja0JveCk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NoZWNrLWJveC9jaGVjay1ib3guanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZGVmaW5lKFtcInJlcXVpcmVcIiwgXCJleHBvcnRzXCIsIFwiLi9yYWRpby1idXR0b25cIl0sIGZ1bmN0aW9uIChyZXF1aXJlLCBleHBvcnRzLCByYWRpb19idXR0b25fMSkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4gICAgX19leHBvcnQocmFkaW9fYnV0dG9uXzEpO1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9yYWRpby1idXR0b24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5kZWZpbmUoW1wicmVxdWlyZVwiLCBcImV4cG9ydHNcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIkBzeW5jZnVzaW9uL2VqMi1iYXNlXCIsIFwiQHN5bmNmdXNpb24vZWoyLWJhc2VcIiwgXCJAc3luY2Z1c2lvbi9lajItYmFzZVwiLCBcIi4vLi4vY29tbW9uL2NvbW1vblwiXSwgZnVuY3Rpb24gKHJlcXVpcmUsIGV4cG9ydHMsIGVqMl9iYXNlXzEsIGVqMl9iYXNlXzIsIGVqMl9iYXNlXzMsIGVqMl9iYXNlXzQsIGNvbW1vbl8xKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHZhciBMQUJFTCA9ICdlLWxhYmVsJztcbiAgICB2YXIgUklQUExFID0gJ2UtcmlwcGxlLWNvbnRhaW5lcic7XG4gICAgdmFyIFJUTCA9ICdlLXJ0bCc7XG4gICAgdmFyIFdSQVBQRVIgPSAnZS1yYWRpby13cmFwcGVyJztcbiAgICB2YXIgUmFkaW9CdXR0b24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgICAgICBfX2V4dGVuZHMoUmFkaW9CdXR0b24sIF9zdXBlcik7XG4gICAgICAgIGZ1bmN0aW9uIFJhZGlvQnV0dG9uKG9wdGlvbnMsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMsIGVsZW1lbnQpIHx8IHRoaXM7XG4gICAgICAgICAgICBfdGhpcy5pc0tleVByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgICAgfVxuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUuY2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VFdmVudEFyZ3MgPSB7IGNoZWNrZWQ6IHRydWUsIGV2ZW50OiBldmVudCB9O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBjaGFuZ2VFdmVudEFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUudXBkYXRlQ2hhbmdlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgaW5wdXQ7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgICAgIHZhciByYWRpb0dycCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LmUtcmFkaW9bbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb0dycC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlucHV0ID0gcmFkaW9HcnBbaV07XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0ICE9PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuZWoyX2luc3RhbmNlc1swXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bldpcmVFdmVudHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVqMl9iYXNlXzMuZGV0YWNoKGxhYmVsKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNLZXlQcmVzc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRMYWJlbCgpLmNsYXNzTGlzdC5hZGQoJ2UtZm9jdXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLmZvY3VzT3V0SGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0TGFiZWwoKS5jbGFzc0xpc3QucmVtb3ZlKCdlLWZvY3VzJyk7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5nZXRNb2R1bGVOYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdyYWRpbyc7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5nZXRQZXJzaXN0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZE9uUGVyc2lzdChbJ2NoZWNrZWQnXSk7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5nZXRMYWJlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFdyYXBwZXIoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCduYW1lJywgdGhpcy5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLmluaXRXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZVNwYW47XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKCF3cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyhXUkFQUEVSKSkge1xuICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBlajJfYmFzZV8zLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBXUkFQUEVSIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCB0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxhYmVsID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdsYWJlbCcsIHsgYXR0cnM6IHsgZm9yOiB0aGlzLmVsZW1lbnQuaWQgfSB9KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICAgICAgaWYgKGVqMl9iYXNlXzMuaXNSaXBwbGVFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgcmlwcGxlU3BhbiA9IGVqMl9iYXNlXzMuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiAoUklQUExFKSB9KTtcbiAgICAgICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChyaXBwbGVTcGFuKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8xLnJpcHBsZUVmZmVjdChyaXBwbGVTcGFuLCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIGlzQ2VudGVyUmlwcGxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5lbmFibGVSdGwpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFJUTCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jc3NDbGFzcykge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzMuYWRkQ2xhc3MoW2xhYmVsXSwgdGhpcy5jc3NDbGFzcy5zcGxpdCgnICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUZXh0KHRoaXMubGFiZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUua2V5RG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzS2V5UHJlc3NlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5sYWJlbFJpcHBsZUhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IHRoaXMuZ2V0TGFiZWwoKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFJJUFBMRSlbMF07XG4gICAgICAgICAgICBpZiAocmlwcGxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50XzEgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICAgICAgICAgICAgICBldmVudF8xLmluaXRFdmVudChlLnR5cGUsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJpcHBsZS5kaXNwYXRjaEV2ZW50KGV2ZW50XzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUubW91c2VEb3duSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNLZXlQcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5vblByb3BlcnR5Q2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdQcm9wLCBvbGRQcm9wKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmdldExhYmVsKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXMobmV3UHJvcCk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hhbmdlKG5ld1Byb3AuY2hlY2tlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2hlY2tlZCA9IG5ld1Byb3AuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdkaXNhYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3UHJvcC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlzYWJsZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuV2lyZUV2ZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY3NzQ2xhc3MnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFByb3AuY3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QucmVtb3ZlKG9sZFByb3AuY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChuZXdQcm9wLmNzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdlbmFibGVSdGwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Byb3AuZW5hYmxlUnRsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChSVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZShSVEwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xhYmVsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VGV4dChuZXdQcm9wLmxhYmVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsYWJlbFBvc2l0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQcm9wLmxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnZS1yaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnZS1yaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbmFtZScsIG5ld1Byb3AubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndmFsdWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdQcm9wLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgZWxlbWVudCA9IGNvbW1vbl8xLndyYXBwZXJJbml0aWFsaXplKCdFSi1SQURJT0JVVFRPTicsICdyYWRpbycsIGVsZW1lbnQsIFdSQVBQRVIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgIT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhZGlvJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pZCA9IGVqMl9iYXNlXzQuZ2V0VW5pcXVlSUQoJ2UtJyArIHRoaXMuZ2V0TW9kdWxlTmFtZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgUmFkaW9CdXR0b24ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aXJlRXZlbnRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5zZXREaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS5zZXRUZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAgICAgICAgIHZhciB0ZXh0TGFiZWwgPSBsYWJlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKExBQkVMKVswXTtcbiAgICAgICAgICAgIGlmICh0ZXh0TGFiZWwpIHtcbiAgICAgICAgICAgICAgICB0ZXh0TGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGV4dExhYmVsID0gZWoyX2Jhc2VfMy5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IExBQkVMLCBpbm5lckhUTUw6IHRleHQgfSk7XG4gICAgICAgICAgICAgICAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dExhYmVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsUG9zaXRpb24gPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRMYWJlbCgpLmNsYXNzTGlzdC5hZGQoJ2UtcmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TGFiZWwoKS5jbGFzc0xpc3QucmVtb3ZlKCdlLXJpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIFJhZGlvQnV0dG9uLnByb3RvdHlwZS51bldpcmVFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLmdldExhYmVsKCk7XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnY2hhbmdlJywgdGhpcy5jaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZShkb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLmtleURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZShsYWJlbCwgJ21vdXNlZG93bicsIHRoaXMubW91c2VEb3duSGFuZGxlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcik7XG4gICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUodGhpcy5lbGVtZW50LCAnZm9jdXNvdXQnLCB0aGlzLmZvY3VzT3V0SGFuZGxlcik7XG4gICAgICAgICAgICB2YXIgcmlwcGxlTGFiZWwgPSBsYWJlbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKExBQkVMKVswXTtcbiAgICAgICAgICAgIGlmIChyaXBwbGVMYWJlbCkge1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLnJlbW92ZShyaXBwbGVMYWJlbCwgJ21vdXNlZG93bicsIHRoaXMubGFiZWxSaXBwbGVIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBlajJfYmFzZV8yLkV2ZW50SGFuZGxlci5yZW1vdmUocmlwcGxlTGFiZWwsICdtb3VzZXVwJywgdGhpcy5sYWJlbFJpcHBsZUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBSYWRpb0J1dHRvbi5wcm90b3R5cGUud2lyZUV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdjaGFuZ2UnLCB0aGlzLmNoYW5nZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGRvY3VtZW50LCAna2V5ZG93bicsIHRoaXMua2V5RG93bkhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKGxhYmVsLCAnbW91c2Vkb3duJywgdGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZCh0aGlzLmVsZW1lbnQsICdmb2N1c291dCcsIHRoaXMuZm9jdXNPdXRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgICAgIHZhciByaXBwbGVMYWJlbCA9IGxhYmVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoTEFCRUwpWzBdO1xuICAgICAgICAgICAgaWYgKHJpcHBsZUxhYmVsKSB7XG4gICAgICAgICAgICAgICAgZWoyX2Jhc2VfMi5FdmVudEhhbmRsZXIuYWRkKHJpcHBsZUxhYmVsLCAnbW91c2Vkb3duJywgdGhpcy5sYWJlbFJpcHBsZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICAgICAgICAgIGVqMl9iYXNlXzIuRXZlbnRIYW5kbGVyLmFkZChyaXBwbGVMYWJlbCwgJ21vdXNldXAnLCB0aGlzLmxhYmVsUmlwcGxlSGFuZGxlciwgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBSYWRpb0J1dHRvbjtcbiAgICB9KGVqMl9iYXNlXzEuQ29tcG9uZW50KSk7XG4gICAgX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzIuRXZlbnQoKVxuICAgIF0sIFJhZGlvQnV0dG9uLnByb3RvdHlwZSwgXCJjaGFuZ2VcIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eShmYWxzZSlcbiAgICBdLCBSYWRpb0J1dHRvbi5wcm90b3R5cGUsIFwiY2hlY2tlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIFJhZGlvQnV0dG9uLnByb3RvdHlwZSwgXCJjc3NDbGFzc1wiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KGZhbHNlKVxuICAgIF0sIFJhZGlvQnV0dG9uLnByb3RvdHlwZSwgXCJkaXNhYmxlZFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIFJhZGlvQnV0dG9uLnByb3RvdHlwZSwgXCJsYWJlbFwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCdhZnRlcicpXG4gICAgXSwgUmFkaW9CdXR0b24ucHJvdG90eXBlLCBcImxhYmVsUG9zaXRpb25cIiwgdm9pZCAwKTtcbiAgICBfX2RlY29yYXRlKFtcbiAgICAgICAgZWoyX2Jhc2VfMS5Qcm9wZXJ0eSgnJylcbiAgICBdLCBSYWRpb0J1dHRvbi5wcm90b3R5cGUsIFwibmFtZVwiLCB2b2lkIDApO1xuICAgIF9fZGVjb3JhdGUoW1xuICAgICAgICBlajJfYmFzZV8xLlByb3BlcnR5KCcnKVxuICAgIF0sIFJhZGlvQnV0dG9uLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgIFJhZGlvQnV0dG9uID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGVqMl9iYXNlXzEuTm90aWZ5UHJvcGVydHlDaGFuZ2VzXG4gICAgXSwgUmFkaW9CdXR0b24pO1xuICAgIGV4cG9ydHMuUmFkaW9CdXR0b24gPSBSYWRpb0J1dHRvbjtcbiAgICBleHBvcnRzLnJhZGlvQnV0dG9uQnVpbGRlciA9IGVqMl9iYXNlXzEuQ3JlYXRlQnVpbGRlcihSYWRpb0J1dHRvbik7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==