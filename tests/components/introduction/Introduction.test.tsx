import { render } from '@testing-library/react';
import Introduction, { altText } from '../../../src/components/introduction/Introduction';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Introduction component', () => {
  const subtitle = 'This is a subtitle';

  beforeEach(() => {
    render(<Introduction subtitle={subtitle} />);
  });

  it('renders logo', () => {
    const logo = document.getElementById('logo') as HTMLImageElement;

    expect(logo.alt).toEqual(altText);
  });

  it('renders subtitle', () => {
    const intro = document.getElementById('intro-subtitle') as HTMLDivElement;

    expect(intro).toHaveTextContent(subtitle);
  });
});
