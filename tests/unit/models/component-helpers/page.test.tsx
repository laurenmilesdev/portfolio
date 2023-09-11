import Page from '../../../../src/models/component-helpers/page';

describe('Page', () => {
  const title = 'title';
  const component: JSX.Element = <div>Test</div>;

  it('returns Page object', () => {
    const response = new Page(title, component);
    const expectedResponse: Page = {
      title,
      component,
    };

    expect(response).toEqual(expectedResponse);
  });
});
