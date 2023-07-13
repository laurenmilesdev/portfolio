import Page from '../../../../src/models/component-helpers/page';

describe('Page', () => {
  it('returns Page object', () => {
    const label = 'label';
    const component: JSX.Element = <div>Test</div>;
    const response = new Page(label, component);
    const expectedResponse: Page = {
      label,
      component,
    };

    expect(response).toEqual(expectedResponse);
  });
});
