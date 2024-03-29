import { render } from '@testing-library/react';
import Navigation, { getTabId } from '../../../../src/components/portfolio/navigation/Navigation';

describe('Navigation component', () => {
  const pageTitles: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
  const setPageTabValue = () => undefined;
  const value = 0;

  beforeEach(() => {
    render(
      <Navigation pageTitles={pageTitles} pageTabValue={value} setPageTabValue={setPageTabValue} />
    );
  });

  it('renders tabs', () => {
    pageTitles.forEach((title: string, index: number) => {
      const element = document.getElementById(getTabId(index)) as HTMLButtonElement;

      expect(element).toHaveTextContent(title);
    });
  });
});
