import Window from './window';

export default class MenuItem {
  title: string;

  menuItemButtonId: string;

  // Optional external URL link
  url?: string;

  // Optional window to open on click
  window?: Window;

  constructor(title: string, menuItemButtonId: string, url?: string, window?: Window) {
    this.title = title;
    this.menuItemButtonId = menuItemButtonId;
    this.url = url;
    this.window = window;
  }
}
