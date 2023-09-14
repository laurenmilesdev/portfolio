import Window from './window';

export default class MenuItem {
  title: string;

  menuItemButtonId: string;

  // Optional external URL link
  externalUrl?: string;

  // Optional window to open on click
  window?: Window;

  constructor(title: string, menuItemButtonId: string, externalUrl?: string, window?: Window) {
    this.title = title;
    this.menuItemButtonId = menuItemButtonId;
    this.externalUrl = externalUrl;
    this.window = window;
  }
}
