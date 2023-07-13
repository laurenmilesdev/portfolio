import Page from '../../../../src/models/component-helpers/page';

describe('Page', () => {
  const label = 'label';
  const component: JSX.Element = <div>Test</div>;
  const windowId = 'window-id';
  const startBarButtonId = 'start-bar-btn-id';
  const menuItemButtonId = 'menu-item-btn-id';

  it('returns Page object without IDs', () => {
    const response = new Page(label, component);
    const expectedResponse: Page = {
      label,
      component,
    };

    expect(response).toEqual(expectedResponse);
  });

  it('returns Page object with IDs', () => {
    const response = new Page(label, component, windowId, startBarButtonId, menuItemButtonId);
    const expectedResponse: Page = {
      label,
      component,
    };

    expect(response).toEqual(expectedResponse);
  });
});
