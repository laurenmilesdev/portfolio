import MenuItem from '../../../src/models/component-helpers/menu-item';
import Window from '../../../src/models/component-helpers/window';

describe('MenuItem', () => {
  const title = 'title';
  const menuItemButtonId = 'button-id';
  const externalUrl = 'url.com';
  const windowId = 'portfolio-window';
  const startBarButtonId = 'portfolio-start-bar-btn';
  const isInternetExplorerWindow = true;
  const addressBarUrl = 'https://portfolio.laurenmilesdev.com/';
  const heightPercentage = 89;
  const widthPercentage = 90;
  const window = new Window(
    title,
    windowId,
    startBarButtonId,
    isInternetExplorerWindow,
    heightPercentage,
    widthPercentage,
    addressBarUrl
  );

  it('returns MenuItem object', () => {
    const response = new MenuItem(title, menuItemButtonId, externalUrl, window);
    const expectedResponse: MenuItem = {
      title,
      menuItemButtonId,
      externalUrl,
      window,
    };

    expect(response).toEqual(expectedResponse);
  });
});
