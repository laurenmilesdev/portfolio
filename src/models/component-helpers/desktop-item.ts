export default class DesktopItem {
  label: string;

  image: JSX.Element;

  url: string;

  constructor(label: string, image: JSX.Element, url: string) {
    this.label = label;
    this.image = image;
    this.url = url;
  }
}
