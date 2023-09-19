import { render } from '@testing-library/react';
import Page, { titleDivId, contentDivId } from '../../../../src/components/portfolio/pages/Page';
import { pages, pageContents } from '../../../mocks/data-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Page component', () => {
  describe('Home page', () => {
    const pageValue = 0;
    const page = pages[pageValue];

    beforeEach(() => {
      render(<Page pageValue={pageValue} page={page} />);
    });

    it('does not render title', () => {
      const element = document.getElementById(titleDivId) as HTMLDivElement;

      expect(element).toBeNull();
    });

    it('renders page content', () => {
      const element = document.getElementById(contentDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(pageContents[pageValue]);
    });
  });

  describe('not Home page', () => {
    const pageValue = 1;
    const page = pages[pageValue];

    beforeEach(() => {
      render(<Page pageValue={pageValue} page={page} />);
    });

    it('renders title', () => {
      const element = document.getElementById(titleDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(page.title);
    });

    it('renders page content', () => {
      const element = document.getElementById(contentDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(pageContents[pageValue]);
    });
  });
});
