export default class Page {
  label: string;

  component: JSX.Element;

  constructor(label: string, component: JSX.Element) {
    this.label = label;
    this.component = component;
  }
}
