import Page from '../../../../src/models/component-helpers/page';

describe('Page', () => {
  const navLabel = 'label';
  const title = 'title';
  const component: JSX.Element = <div>Test</div>;

  it('returns Page object', () => {
    const response = new Page(navLabel, component, title);
    const expectedResponse: Page = {
      navLabel,
      component,
      title,
    };

    expect(response).toEqual(expectedResponse);
  });
});
