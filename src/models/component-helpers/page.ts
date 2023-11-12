export default class Page {
  title: string;

  component: JSX.Element;

  subtitle?: string;

  constructor(title: string, component: JSX.Element, subtitle?: string) {
    this.title = title;
    this.component = component;
    this.subtitle = subtitle;
  }
}
