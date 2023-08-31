export default class Window {
  title: string;

  component: JSX.Element;

  windowId?: string;

  startBarButtonId?: string;

  menuItemButtonId?: string;

  constructor(
    title: string,
    component: JSX.Element,
    windowId?: string,
    startBarButtonId?: string,
    menuItemButtonId?: string
  ) {
    this.title = title;
    this.component = component;
    this.windowId = windowId;
    this.startBarButtonId = startBarButtonId;
    this.menuItemButtonId = menuItemButtonId;
  }
}
