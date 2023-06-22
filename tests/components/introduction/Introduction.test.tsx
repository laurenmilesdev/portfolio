import { render } from '@testing-library/react';
import Introduction from '../../../src/components/introduction/Introduction';

describe('Introduction component', () => {
  const subtitle = 'This is a subtitle';

  it('renders subtitle', () => {
    const { getByTestId } = render(<Introduction subtitle={subtitle} />);
    const intro = getByTestId('intro');

    expect(intro).toHaveTextContent(subtitle);
  });

  it('has logo', () => {
    render(<Introduction subtitle={subtitle} />);
    const imageAltText = 'Image of Lauren within text that says Lauren Miles';
    const logo = document.querySelector('img') as HTMLImageElement;

    expect(logo.alt).toEqual(imageAltText);
  });
});
