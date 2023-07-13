export default class Page {
  label: string;

  component: JSX.Element;

  windowId?: string;

  startBarButtonId?: string;

  menuItemButtonId?: string;

  constructor(
    label: string,
    component: JSX.Element,
    windowId?: string,
    startBarButtonId?: string,
    menuItemButtonId?: string
  ) {
    this.label = label;
    this.component = component;
    this.windowId = windowId;
    this.startBarButtonId = startBarButtonId;
    this.menuItemButtonId = menuItemButtonId;
  }
}
