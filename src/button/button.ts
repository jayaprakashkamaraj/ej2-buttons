import { Property, NotifyPropertyChanges, INotifyPropertyChanged, Component } from '@syncfusion/ej2-base';
import { CreateBuilder, ripple, EventHandler } from '@syncfusion/ej2-base';
import { createElement, addClass, removeClass, detach } from '@syncfusion/ej2-base/dom';
import { ButtonModel } from './button-model';
import { ButtonHelper } from './button-builder';
export type IconPosition = 'left' | 'right';

const cssClassName: CssClassNameT = {
    RTL: 'e-rtl',
    BUTTON: 'e-btn',
    PRIMARY: 'e-primary'
};

/**
 * Button is a graphical user interface element which triggers an event on its click action. It can have text, image or both.
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
     * Positions icon before / after text content in button. 
     * The iconPosition support two values "left" and "right".
     * When set to `right` the icon will be positioned right to text content.
     * @default "left"
     */
    @Property('left')
    public iconPosition: IconPosition;

    /**
     * Defines class / multiple classes separated by a space for button which is used to include an icon.
     * Button can include a font icon, sprite image.
     * @default ""
     */
    @Property('')
    public iconCss: string;

    /**
     * Specifies a value that indicates whether the button control is `disabled` or not.
     * @default false
     */
    @Property(false)
    public disabled: boolean;

    /**
     * Makes button visually prioritized. When set to `true`, button will look more prioritized visually.
     * @default false
     */
    @Property(false)
    public isPrimary: boolean;

    /**
     * Defines class / multiple classes separated by a space, in button element. Button types, styles and size can be defined using this.
     * @default ""
     */
    @Property('')
    public cssClass: string;

    /**
     * Defines the `content` of the button element which can be text or HTML elements.
     * @default ""
     */
    @Property('')
    public content: string;

    /**
     * Makes the button as a toggle button, when set to `true`. When you click it, the state changes from normal to active state.
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
        }
        ripple(this.element, '.' + cssClassName.BUTTON);
        this.wireEvents();
    }

    private controlStatus(disabled: boolean): void {
        this.element.disabled = disabled;
    }

    private setIconCss(): void {
        if (this.iconCss) {
            let span: HTMLElement = createElement('span', { className: 'e-btn-icon ' + this.iconCss });
            let node: Node = this.element.childNodes[0];
            if (node && this.iconPosition === 'left') {
                this.element.insertBefore(span, node);
                span.classList.add('e-icon-left');
            } else {
                this.element.appendChild(span);
                if (this.iconPosition === 'right') {
                    span.classList.add('e-icon-right');
                }
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
     * To destroy the widget.
     * @returns void
     */
    public destroy(): void {
        let span: Element;
        let element: Element = this.element;
        super.destroy();
        removeClass([this.element], [cssClassName.PRIMARY, cssClassName.RTL, 'e-success',
            'e-info', 'e-danger', 'e-warning', 'e-flat', 'e-outline', 'e-small', 'e-bigger', 'e-active', 'e-round' ]);
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
                    this.controlStatus(this.disabled);
                    break;
                case 'iconCss':
                    let span: Element = this.element.querySelector('span.e-btn-icon');
                    if (span) {
                        span.className = 'e-btn-icon ' + this.iconCss;
                        if (this.element.textContent) {
                            if (this.iconPosition === 'left') {
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
}

/**
 * builder for button
 */
export let buttonBuilder: ButtonHelper = <ButtonHelper>CreateBuilder(Button);