import { render } from '@testing-library/react';
import Navigation from '../../../../src/components/portfolio/navigation/Navigation';

describe('Navigation component', () => {
  const pageTitles: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
  const handleChange = () => undefined;
  const value = 0;

  beforeEach(() => {
    render(
      <Navigation
        pageTitles={pageTitles}
        handleChange={handleChange}
        pageValue={value}
        useWindowsTheme={false}
      />
    );
  });

  it('renders tabs', () => {
    pageTitles.forEach((title: string, index: number) => {
      const element = document.getElementById(`tab-${index}`) as HTMLButtonElement;

      expect(element).toHaveTextContent(title);
    });
  });
});
