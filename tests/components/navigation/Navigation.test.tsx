import { fireEvent, render } from '@testing-library/react';
import Navigation from '../../../src/components/navigation/Navigation';
import TabType from '../../../src/types/component-helpers/tab';

describe('Navigation component', () => {
  const pageContent = ['Tab 1 content', 'Tab 2 content', 'Tab 3 content'];
  const pages: TabType[] = [
    new TabType('Tab 1', <div data-testid="tab-0-content">{pageContent[0]}</div>),
    new TabType('Tab 2', <div data-testid="tab-1-content">{pageContent[1]}</div>),
    new TabType('Tab 3', <div data-testid="tab-2-content">{pageContent[2]}</div>),
  ];

  it('renders tabs', () => {
    const { getByTestId } = render(<Navigation pages={pages} />);

    expect(getByTestId('tab-0')).toHaveTextContent('Tab 1');
    expect(getByTestId('tab-1')).toHaveTextContent('Tab 2');
    expect(getByTestId('tab-2')).toHaveTextContent('Tab 3');
  });

  it('renders content in tabs', () => {
    const { getByTestId } = render(<Navigation pages={pages} />);

    pages.forEach((page: TabType, index: number) => {
      const tab = getByTestId(`tab-${index}`);

      fireEvent.click(tab);

      expect(getByTestId(`tab-${index}-content`)).toHaveTextContent(pageContent[index]);
    });
  });
});
