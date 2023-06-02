import Tab from '../../../../src/types/component-helpers/tab';

describe('Tab', () => {
  it('returns Tab type object', () => {
    const label = 'label';
    const component: JSX.Element = <div>Test</div>;
    const response = new Tab(label, component);
    const expectedResponse: Tab = {
      label,
      component,
    };

    expect(response).toEqual(expectedResponse);
  });
});
