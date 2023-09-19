export default class Window {
  title: string;

  windowId: string;

  startBarButtonId: string;

  isInternetExplorerWindow: boolean;

  heightPercentage: number;

  widthPercentage: number;

  addressBarUrl?: string;

  constructor(
    title: string,
    windowId: string,
    startBarButtonId: string,
    isInternetExplorerWindow: boolean,
    heightPercentage: number,
    widthPercentage: number,
    addressBarUrl?: string
  ) {
    this.title = title;
    this.windowId = windowId;
    this.startBarButtonId = startBarButtonId;
    this.isInternetExplorerWindow = isInternetExplorerWindow;
    this.heightPercentage = heightPercentage;
    this.widthPercentage = widthPercentage;
    this.addressBarUrl = addressBarUrl;
  }
}
