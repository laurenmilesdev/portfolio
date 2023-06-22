import { render } from '@testing-library/react';
import About from '../../../src/components/about/About';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('About component', () => {
  it('renders string[] of paragraphs', () => {
    const dataTestId = 'about-paragraph';
    const paragraphs = ['This description paragraph 1', 'This is description paragraph 2'];
    const { getByTestId } = render(<About paragraphs={paragraphs} />);

    expect(getByTestId(`${dataTestId}-0`)).toHaveTextContent(paragraphs[0]);
    expect(getByTestId(`${dataTestId}-1`)).toHaveTextContent(paragraphs[1]);
  });

  it('renders photo', () => {
    const paragraphs = ['This description paragraph 1', 'This is description paragraph 2'];

    render(<About paragraphs={paragraphs} />);

    const imageAltText = 'Image of Lauren as a child washing a truck with dad';
    const image = document.querySelector('img') as HTMLImageElement;

    expect(image.alt).toEqual(imageAltText);
  });
});
