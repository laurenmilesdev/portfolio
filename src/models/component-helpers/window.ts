import Page from './page';

export default class Window extends Page {
  windowId: string;

  startBarButtonId: string;

  isInternetExplorerWindow: boolean;

  heightPercentage: number;

  widthPercentage: number;

  addressBarUrl?: string;

  constructor(
    title: string,
    component: JSX.Element,
    windowId: string,
    startBarButtonId: string,
    isInternetExplorerWindow: boolean,
    heightPercentage: number,
    widthPercentage: number,
    addressBarUrl?: string
  ) {
    super(title, component);
    this.windowId = windowId;
    this.startBarButtonId = startBarButtonId;
    this.isInternetExplorerWindow = isInternetExplorerWindow;
    this.heightPercentage = heightPercentage;
    this.widthPercentage = widthPercentage;
    this.addressBarUrl = addressBarUrl;
  }
}
