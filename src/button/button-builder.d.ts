import{Button} from "./button";

import{ IconPosition} from "./button";

export interface ButtonHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Button
	/**
	* Defines the inner content of the button element.
	*/
	content(value:string): BuilderProperties;
	/**
	* Adds class / multiple classes separated by space in button element. Types and styles of button can be defined with this.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Indicates button is in `disabled` state. When set to `true` button will be in `disabled` state.
	*/
	disabled(value:boolean): BuilderProperties;
	/**
	* Enable or disable persisting component's state between page reloads.
	*/
	enablePersistence(value:boolean): BuilderProperties;
	/**
	* Enable or disable rendering component in right to left direction.
	*/
	enableRtl(value:boolean): BuilderProperties;
	/**
	* Defines class / multiple classes separated by space for button which is used to include icon in button.
Button can include sprite image, font icon.
	*/
	iconCss(value:string): BuilderProperties;
	/**
	* Positions icon before / after text content in button.
When set to `right` the icon will be positioned right to text content.
	*/
	iconPosition(value:IconPosition): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Makes button visually prioritized. When set to `true`, button will look as more prioritized visually.
	*/
	isPrimary(value:boolean): BuilderProperties;
	/**
	* Makes the button as toggle button, When you set to `true`. When you click it, the state changes from normal to active state.
	*/
	isToggle(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default Global culture is 'en-US'
	*/
	locale(value:string): BuilderProperties;
}