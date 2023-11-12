import { render } from '@testing-library/react';
import Home from '../../src/pages/index';
import { titleDivId, contentDivId } from '../../src/components/portfolio/pages/Page';
import { pages, pageContents } from '../mocks/data-mock';

describe('index.tsx', () => {
  const pageValue = 1;

  it('renders title', () => {
    render(<Home pages={pages} pageTabValue={pageValue} />);

    const element = document.getElementById(titleDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(pageContents[pageValue]);
  });

  it('renders content', () => {
    render(<Home pages={pages} pageTabValue={pageValue} />);

    const element = document.getElementById(contentDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(pageContents[pageValue]);
  });
});
