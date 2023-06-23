import { render } from '@testing-library/react';
import About from '../../../src/components/about/About';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('About component', () => {
  const description = 'This is a description';

  it('renders string[] of paragraphs', () => {
    const { getByTestId } = render(<About description={description} />);

    expect(getByTestId('description')).toHaveTextContent(description);
  });

  it('renders photo', () => {
    render(<About description={description} />);

    const imageAltText = 'Image of Lauren as a child washing a truck with dad';
    const image = document.querySelector('img') as HTMLImageElement;

    expect(image.alt).toEqual(imageAltText);
  });
});
