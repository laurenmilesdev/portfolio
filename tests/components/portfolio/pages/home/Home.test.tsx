import { render } from '@testing-library/react';
import Home, {
  altText,
  subtitleDivId,
  descriptionDivId,
  imageId,
} from '../../../../../src/components/portfolio/pages/home/Home';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Home component', () => {
  const subtitle = 'Subtitle';
  const description = 'This is the description';

  beforeEach(() => {
    render(<Home subtitle={subtitle} description={description} useWindowsTheme={false} />);
  });

  it('renders logo', () => {
    const element = document.getElementById(imageId) as HTMLImageElement;

    expect(element.alt).toEqual(altText);
  });

  it('renders subtitle', () => {
    const element = document.getElementById(subtitleDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(subtitle);
  });

  it('renders description', () => {
    const element = document.getElementById(descriptionDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(description);
  });
});
