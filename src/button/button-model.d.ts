import { Property, NotifyPropertyChanges, INotifyPropertyChanged, Component } from '@syncfusion/ej2-base';import { CreateBuilder, ripple, EventHandler } from '@syncfusion/ej2-base';import { createElement, addClass, removeClass, detach } from '@syncfusion/ej2-base/dom';import { ButtonHelper } from './button-builder';
import {IconPosition} from "./button";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Button
 */
export interface ButtonModel extends ComponentModel{

    /**
     * Positions icon before / after text content in button.      * The iconPosition support two values "left" and "right".     * When set to `right` the icon will be positioned right to text content.     * @default "left"     */    iconPosition?: IconPosition;

    /**
     * Defines class / multiple classes separated by a space for button which is used to include an icon.     * Button can include a font icon, sprite image.     * @default ""     */    iconCss?: string;

    /**
     * Specifies a value that indicates whether the button control is `disabled` or not.     * @default false     */    disabled?: boolean;

    /**
     * Makes button visually prioritized. When set to `true`, button will look more prioritized visually.     * @default false     */    isPrimary?: boolean;

    /**
     * Defines class / multiple classes separated by a space, in button element. Button types, styles and size can be defined using this.     * @default ""     */    cssClass?: string;

    /**
     * Defines the `content` of the button element which can be text or HTML elements.     * @default ""     */    content?: string;

    /**
     * Makes the button as a toggle button, when set to `true`. When you click it, the state changes from normal to active state.     * @default false     */    isToggle?: boolean;

}