import { Property, NotifyPropertyChanges, INotifyPropertyChanged, Component } from '@syncfusion/ej2-base';import { CreateBuilder, ripple, EventHandler } from '@syncfusion/ej2-base';import { createElement, addClass, removeClass, attributes } from '@syncfusion/ej2-base/dom';import { ButtonHelper } from './button-builder';
import {IconPosition} from "./button";
import {ComponentModel} from '@syncfusion/ej2-base';

/**
 * Interface for a class Button
 */
export interface ButtonModel extends ComponentModel{

    /**
     * Positions icon before / after text content in button.     * When set to `right` the icon will be positioned right to text content.     * @default "IconPosition.left"     */    iconPosition?: IconPosition;

    /**
     * Defines class / multiple classes separated by space for button which is used to include icon in button.     * Button can include sprite image, font icon.     * @default ""     */    iconCss?: string;

    /**
     * Indicates button is in `disabled` state. When set to `true` button will be in `disabled` state.     * @default false     */    disabled?: boolean;

    /**
     * Makes button visually prioritized. When set to `true`, button will look as more prioritized visually.     * @default false     */    isPrimary?: boolean;

    /**
     * Adds class / multiple classes separated by space in button element. Types and styles of button can be defined with this.     * @default ""     */    cssClass?: string;

    /**
     * Defines the inner content of the button element.     * @default ""     */    content?: string;

    /**
     * Makes the button as toggle button, When you set to `true`. When you click it, the state changes from normal to active state.     * @default false     */    isToggle?: boolean;

}