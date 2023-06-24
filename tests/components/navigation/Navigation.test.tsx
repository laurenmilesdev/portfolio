import { render } from '@testing-library/react';
import Navigation from '../../../src/components/navigation/Navigation';

describe('Navigation component', () => {
  const pagesLabels: string[] = ['Tab 1', 'Tab 2', 'Tab 3'];
  const handleChange = (event: React.SyntheticEvent, newValue: number) => undefined;
  const value = 0;

  it('renders tabs', () => {
    const { getByTestId } = render(
      <Navigation pageLabels={pagesLabels} handleChange={handleChange} pageValue={value} />
    );

    expect(getByTestId('tab-0')).toHaveTextContent('Tab 1');
    expect(getByTestId('tab-1')).toHaveTextContent('Tab 2');
    expect(getByTestId('tab-2')).toHaveTextContent('Tab 3');
  });
});
