import Page from './page';

export default class Window extends Page {
  windowId: string;

  startBarButtonId: string;

  isInternetExplorerWindow: boolean;

  addressBarUrl?: string;

  constructor(
    title: string,
    component: JSX.Element,
    windowId: string,
    startBarButtonId: string,
    isInternetExplorerWindow: boolean,
    addressBarUrl?: string
  ) {
    super(title, component);
    this.windowId = windowId;
    this.startBarButtonId = startBarButtonId;
    this.isInternetExplorerWindow = isInternetExplorerWindow;
    this.addressBarUrl = addressBarUrl;
  }
}
