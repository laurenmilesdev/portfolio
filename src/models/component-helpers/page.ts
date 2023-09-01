export default class Page {
  title: string;

  component: JSX.Element;

  constructor(title: string, component: JSX.Element) {
    this.title = title;
    this.component = component;
  }
}
