export default class Page {
  navLabel: string;

  component: JSX.Element;

  title?: string;

  constructor(navLabel: string, component: JSX.Element, title?: string) {
    this.navLabel = navLabel;
    this.component = component;
    this.title = title;
  }
}
