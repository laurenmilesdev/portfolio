import Page from './page';

export default class Window extends Page {
  windowId: string;

  startBarButtonId: string;

  menuItemButtonId: string;

  constructor(
    title: string,
    component: JSX.Element,
    windowId: string,
    startBarButtonId: string,
    menuItemButtonId: string
  ) {
    super(title, component);
    this.windowId = windowId;
    this.startBarButtonId = startBarButtonId;
    this.menuItemButtonId = menuItemButtonId;
  }
}
