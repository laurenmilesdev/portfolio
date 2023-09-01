import { render } from '@testing-library/react';
import Layout, { titleDivId, contentDivId } from '../../../src/components/layout/Layout';

describe('Layout component', () => {
  const pageValue = 1;
  const pageNavLabels = ['Title 1', 'Title 2'];
  const pageTitles = ['', 'Title2'];
  const componentText = 'This is the component';
  const component = <div>{componentText}</div>;

  beforeEach(() => {
    render(
      <Layout
        pageValue={pageValue}
        pageNavLabels={pageNavLabels}
        pageTitles={pageTitles}
        handlePageChange={() => undefined}
      >
        {component}
      </Layout>
    );
  });

  describe('title is not empty string', () => {
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
