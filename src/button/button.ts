import { Property, NotifyPropertyChanges, INotifyPropertyChanged, Component } from '@syncfusion/ej2-base';
import { addClass, createElement, detach, removeClass, rippleEffect, EventHandler } from '@syncfusion/ej2-base';
import { ButtonModel } from './button-model';
import { getTextNode } from '../common/common';
export type IconPosition = 'Left' | 'Right';

const cssClassName: CssClassNameT = {
    RTL: 'e-rtl',
    BUTTON: 'e-btn',
    PRIMARY: 'e-primary',
    ICONBTN: 'e-icon-btn'
};

/**
 * The Button is a graphical user interface element that triggers an event on its click action. It can contain a text, an image, or both.
 * ```html
 * <button id="button">Button</button>
 * ```
 * ```typescript
 * <script>
 * var btnObj = new Button();
 * btnObj.appendTo("#button");
 * </script>
 * ```
 */
@NotifyPropertyChanges
export class Button extends Component<HTMLButtonElement> implements INotifyPropertyChanged {
    /**
     * Positions the icon before/after the text content in the Button.
     * The possible values are:
     * * Left: The icon will be positioned to the left of the text content.
     * * Right: The icon will be positioned to the right of the text content.
     * @default "left"
     */
    @Property('Left')
    public iconPosition: IconPosition;

    /**
     * Defines class/multiple classes separated by a space for the Button that is used to include an icon.
     * Buttons can also include font icon and sprite image.
     * @default ""
     */
    @Property('')
    public iconCss: string;

    /**
     * Specifies a value that indicates whether the Button is `disabled` or not.
     * @default false.
     */
    @Property(false)
    public disabled: boolean;

    /**
     * Allows the appearance of the Button to be enhanced and visually appealing when set to `true`.
     * @default false
     */
    @Property(false)
    public isPrimary: boolean;

    /**
     * Defines class/multiple classes separated by a space in the Button element. The Button types, styles, and
     * size can be defined by using
     * [`this`](http://ej2.syncfusion.com/documentation/button/howto.html?lang=typescript#create-a-block-button).
     * @default ""
     */
    @Property('')
    public cssClass: string;

    /**
     * Defines the `content` of the Button element that can either be a text or HTML elements.
     * @default ""
     */
    @Property('')
    public content: string;

    /**
     * Makes the Button toggle, when set to `true`. When you click it, the state changes from normal to active.
     * @default false
     */
    @Property(false)
    public isToggle: boolean;

    /**
     * Constructor for creating the widget
     * @param  {ButtonModel} options?
     * @param  {string|HTMLButtonElement} element?
     */
    constructor(options?: ButtonModel, element?: string | HTMLButtonElement) {
        super(options, <string | HTMLButtonElement>element);
    }

    protected preRender(): void {
        // pre render code snippets
    }

    /**
     * Initialize the control rendering
     * @returns void
     * @private
     */
    public render(): void {
        this.initialize();
    }

    private initialize(): void {
        if (this.cssClass) {
            addClass([this.element], this.cssClass.split(' '));
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
        } else {
            this.wireEvents();
        }
        rippleEffect(this.element, { selector: '.' + cssClassName.BUTTON });
    }

    private controlStatus(disabled: boolean): void {
        this.element.disabled = disabled;
    }

    private setIconCss(): void {
        if (this.iconCss) {
            let span: HTMLElement = createElement('span', { className: 'e-btn-icon ' + this.iconCss });
            if (!this.element.textContent.trim()) {
                this.element.classList.add(cssClassName.ICONBTN);
            } else {
                span.classList.add('e-icon-' + this.iconPosition.toLowerCase());
            }
            let node: Node = this.element.childNodes[0];
            if (node && (this.iconPosition === 'Left')) {
                this.element.insertBefore(span, node);
            } else {
                this.element.appendChild(span);
            }
        }
    }

    protected wireEvents(): void {
        if (this.isToggle) {
            EventHandler.add(this.element, 'click', this.btnClickHandler, this);
        }
    }

    protected unWireEvents(): void {
        if (this.isToggle) {
            EventHandler.remove(this.element, 'click', this.btnClickHandler);
        }
    }

    private btnClickHandler(): void {
        if (this.element.classList.contains('e-active')) {
            this.element.classList.remove('e-active');
        } else {
            this.element.classList.add('e-active');
        }
    }


    /**
     * Destroys the widget.
     * @returns void
     */
    public destroy(): void {
        let span: Element;
        let element: Element = this.element;
        super.destroy();
        removeClass([this.element], [cssClassName.PRIMARY, cssClassName.RTL, cssClassName.ICONBTN, 'e-success',
            'e-info', 'e-danger', 'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round']);
        ['e-ripple', 'disabled'].forEach((value: string): void => {
            element.removeAttribute(value);
        });
        if (this.content) {
            element.innerHTML = element.innerHTML.replace(this.content, '');
        }
        span = element.querySelector('span.e-btn-icon');
        if (span) {
            detach(span);
        }
        this.unWireEvents();
    }

    /**
     * Get component name.
     * @returns string
     * @private
     */
    public getModuleName(): string {
        return 'btn';
    }

    /**
     * Get the properties to be maintained in the persisted state.
     * @returns string
     */
    public getPersistData(): string {
        return this.addOnPersist([]);
    }

    /**
     * Called internally if any of the property value changed.
     * @param  {Button} newProp
     * @param  {Button} oldProp
     * @returns void
     * @private
     */
    public onPropertyChanged(newProp: Button, oldProp: Button): void {
        for (let prop of Object.keys(newProp)) {
            switch (prop) {
                case 'isPrimary':
                    if (newProp.isPrimary) {
                        this.element.classList.add(cssClassName.PRIMARY);
                    } else {
                        this.element.classList.remove(cssClassName.PRIMARY);
                    }
                    break;
                case 'disabled':
                    this.controlStatus(newProp.disabled);
                    this.unWireEvents();
                    break;
                case 'iconCss':
                    let span: Element = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        span.className = 'e-btn-icon ' + newProp.iconCss;
                        if (this.element.textContent.trim()) {
                            if (this.iconPosition === 'Left') {
                                span.classList.add('e-icon-left');
                            } else {
                                span.classList.add('e-icon-right');
                            }
                        }
                    } else {
                        this.setIconCss();
                    }
                    break;
                case 'iconPosition':
                    span = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        detach(span);
                    }
                    this.setIconCss();
                    break;
                case 'cssClass':
                    if (oldProp.cssClass) {
                        removeClass([this.element], oldProp.cssClass.split(' '));
                    }
                    addClass([this.element], newProp.cssClass.split(' '));
                    break;
                case 'enableRtl':
                    if (newProp.enableRtl) {
                        this.element.classList.add(cssClassName.RTL);
                    } else {
                        this.element.classList.remove(cssClassName.RTL);
                    }
                    break;
                case 'content':
                    let node: Node = getTextNode(this.element);
                    if (!node) {
                        this.element.classList.remove(cssClassName.ICONBTN);
                    }
                    this.element.innerHTML = newProp.content;
                    this.setIconCss();
                    break;
                case 'isToggle':
                    if (newProp.isToggle) {
                        EventHandler.add(this.element, 'click', this.btnClickHandler, this);
                    } else {
                        EventHandler.remove(this.element, 'click', this.btnClickHandler);
                        removeClass([this.element], ['e-active']);
                    }
                    break;
            }
        }
    }
}

interface CssClassNameT {
    /** Defines the type of the classname. */
    RTL: string;
    BUTTON: string;
    PRIMARY: string;
    ICONBTN: string;
}