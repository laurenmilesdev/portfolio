import { render } from '@testing-library/react';
import Navigation from '../../../src/components/navigation/Navigation';

describe('Navigation component', () => {
  const pagesLabels: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
  const handleChange = () => undefined;
  const value = 0;

  beforeEach(() => {
    render(<Navigation pageLabels={pagesLabels} handleChange={handleChange} pageValue={value} />);
  });

  it('renders tabs', () => {
    pagesLabels.forEach((label: string, index: number) => {
      const element = document.getElementById(`tab-${index}`) as HTMLButtonElement;

      expect(element).toHaveTextContent(label);
    });
  });
});
