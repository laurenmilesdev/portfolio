import { render } from '@testing-library/react';
import Layout, { titleDivId, contentDivId } from '../../../src/components/layout/Layout';

describe('Layout component', () => {
  const pageTitles = ['Title', 'Title2'];
  const componentText = 'This is the component';
  const component = <div>{componentText}</div>;

  describe('title is undefined', () => {
    const pageValue = 0;

    beforeEach(() => {
      render(
        <Layout pageValue={pageValue} pageTitles={pageTitles} handlePageChange={() => undefined}>
          {component}
        </Layout>
      );
    });

    it('does not render title', () => {
      const element = document.getElementById(titleDivId) as HTMLDivElement;

      expect(element).toBeNull();
    });

    it('renders content', () => {
      const element = document.getElementById(contentDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(componentText);
    });
  });

  describe('title is not undefined', () => {
    const pageValue = 1;

    beforeEach(() => {
      render(
        <Layout pageValue={pageValue} pageTitles={pageTitles} handlePageChange={() => undefined}>
          {component}
        </Layout>
      );
    });

    it('renders title', () => {
      const element = document.getElementById(titleDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(pageTitles[pageValue]);
    });

    it('renders content', () => {
      const element = document.getElementById(contentDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(componentText);
    });
  });
});
