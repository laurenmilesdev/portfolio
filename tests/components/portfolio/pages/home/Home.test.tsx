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

  describe('useWindowsTheme is true', () => {
    const useWindowsTheme = true;

    beforeEach(() => {
      render(
        <Home subtitle={subtitle} description={description} useWindowsTheme={useWindowsTheme} />
      );
    });

    it('renders subtitle', () => {
      const element = document.getElementById(subtitleDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(subtitle);
      expect(element).toHaveClass('windows-theme-subtitle');
    });

    it('renders description', () => {
      const element = document.getElementById(descriptionDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(description);
    });

    it('renders logo with alt text', () => {
      const element = document.getElementById(imageId) as HTMLImageElement;

      expect(element).toBeInTheDocument();
      expect(element.alt).toEqual(altText);
      expect(element).toHaveClass('windows-theme-logo');
    });
  });

  describe('useWindowsTheme is false', () => {
    const useWindowsTheme = false;

    beforeEach(() => {
      render(
        <Home subtitle={subtitle} description={description} useWindowsTheme={useWindowsTheme} />
      );
    });

    it('renders subtitle', () => {
      const element = document.getElementById(subtitleDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(subtitle);
      expect(element).toHaveClass('subtitle');
    });

    it('renders description', () => {
      const element = document.getElementById(descriptionDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(description);
    });

    it('renders logo with alt text', () => {
      const element = document.getElementById(imageId) as HTMLImageElement;

      expect(element).toBeInTheDocument();
      expect(element.alt).toEqual(altText);
      expect(element).toHaveClass('logo');
    });
  });
});
