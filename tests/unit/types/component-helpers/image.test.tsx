import Image from '../../../../src/types/component-helpers/image';
import img from '../../../../public/img/about/IMG_1465.jpg';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('Image', () => {
  it('returns Image type object', () => {
    const altText = 'Alt text';
    const response = new Image(img, altText);
    const expectedResponse: Image = {
      src: img,
      altText,
    };

    expect(response).toEqual(expectedResponse);
  });
});
