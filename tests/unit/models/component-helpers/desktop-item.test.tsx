import DesktopItem from '../../../../src/models/component-helpers/desktop-item';

describe('DesktopItem', () => {
  const label = 'label';
  const image: JSX.Element = <>Test</>;
  const url = 'url';

  it('returns DesktopItem object', () => {
    const response = new DesktopItem(label, image, url);
    const expectedResponse: DesktopItem = {
      label,
      image,
      url,
    };

    expect(response).toEqual(expectedResponse);
  });
});
