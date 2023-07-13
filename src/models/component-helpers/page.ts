export default class Page {
  label: string;

  component: JSX.Element;

  windowId?: string;

  buttonId?: string;

  constructor(label: string, component: JSX.Element, windowId?: string, buttonId?: string) {
    this.label = label;
    this.component = component;
    this.windowId = windowId;
    this.buttonId = buttonId;
  }
}
