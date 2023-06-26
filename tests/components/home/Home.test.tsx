import { render } from '@testing-library/react';
import Home, { altText } from '../../../src/components/home/Home';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Home component', () => {
  const subtitle = 'Subtitle';
  const description = 'This is the description';

  beforeEach(() => {
    render(<Home subtitle={subtitle} description={description} />);
  });

  it('renders logo', () => {
    const element = document.getElementById('logo') as HTMLImageElement;

    expect(element.alt).toEqual(altText);
  });

  it('renders subtitle', () => {
    const element = document.getElementById('home-subtitle') as HTMLDivElement;

    expect(element).toHaveTextContent(subtitle.toUpperCase());
  });

  it('renders description', () => {
    const element = document.getElementById('home-description') as HTMLDivElement;

    expect(element).toHaveTextContent(description);
  });
});
