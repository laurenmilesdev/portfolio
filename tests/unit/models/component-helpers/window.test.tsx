import Window from '../../../../src/models/component-helpers/window';

describe('Window', () => {
  const title = 'title';
  const component = <>Test</>;
  const windowId = 'portfolio-window';
  const startBarButtonId = 'portfolio-start-bar-btn';
  const isInternetExplorerWindow = true;
  const addressBarUrl = 'https://portfolio.laurenmilesdev.com/';
  const heightPercentage = 89;
  const widthPercentage = 90;

  it('returns Window object', () => {
    const response = new Window(
      title,
      component,
      windowId,
      startBarButtonId,
      isInternetExplorerWindow,
      heightPercentage,
      widthPercentage,
      addressBarUrl
    );
    const expectedResponse: Window = {
      title,
      component,
      windowId,
      startBarButtonId,
      isInternetExplorerWindow,
      heightPercentage,
      widthPercentage,
      addressBarUrl,
    };

    expect(response).toEqual(expectedResponse);
  });
});
