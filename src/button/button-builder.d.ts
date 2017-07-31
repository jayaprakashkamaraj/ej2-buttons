import{Button} from "./button";

import{ IconPosition} from "./button";

export interface ButtonHelper {
	new(id: string | HTMLElement): BuilderProperties
 }


export interface  BuilderProperties {
	create(): Button
	/**
	* Defines the `content` of the button element which can be text or HTML elements.
	*/
	content(value:string): BuilderProperties;
	/**
	* Defines class / multiple classes separated by a space, in button element. Button types, styles and size can be defined using this.
	*/
	cssClass(value:string): BuilderProperties;
	/**
	* Specifies a value that indicates whether the button control is `disabled` or not.
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
	* Defines class / multiple classes separated by a space for button which is used to include an icon.
Button can include a font icon, sprite image.
	*/
	iconCss(value:string): BuilderProperties;
	/**
	* Positions icon before / after text content in button.
The iconPosition support two values "left" and "right".
When set to `right` the icon will be positioned right to text content.
	*/
	iconPosition(value:IconPosition): BuilderProperties;
	isDestroyed(value:boolean): BuilderProperties;
	/**
	* Makes button visually prioritized. When set to `true`, button will look more prioritized visually.
	*/
	isPrimary(value:boolean): BuilderProperties;
	/**
	* Makes the button as a toggle button, when set to `true`. When you click it, the state changes from normal to active state.
	*/
	isToggle(value:boolean): BuilderProperties;
	/**
	* Overrides the global culture and localization value for this component. Default Global culture is 'en-US'
	*/
	locale(value:string): BuilderProperties;
}