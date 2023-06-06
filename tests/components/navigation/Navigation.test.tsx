import { fireEvent, render } from '@testing-library/react';
import Navigation from '../../../src/components/navigation/Navigation';
import TabType from '../../../src/types/component-helpers/tab';

describe('Navigation component', () => {
  const pages: TabType[] = [
    new TabType('Tab 1', <div data-testid="tab-0-content">Tab 1 content</div>),
    new TabType('Tab 2', <div data-testid="tab-1-content">Tab 2 content</div>),
    new TabType('Tab 3', <div data-testid="tab-2-content">Tab 3 content</div>),
  ];

  it('renders tabs', () => {
    const { getByTestId } = render(<Navigation pages={pages} />);

    expect(getByTestId('tab-0')).toHaveTextContent('Tab 1');
    expect(getByTestId('tab-1')).toHaveTextContent('Tab 2');
    expect(getByTestId('tab-2')).toHaveTextContent('Tab 3');
  });

  it('renders content in Tab 1', () => {
    const { getByTestId } = render(<Navigation pages={pages} />);

    expect(getByTestId('tab-0-content')).toHaveTextContent('Tab 1 content');
  });

  it('renders content in Tab 2', () => {
    const { getByTestId } = render(<Navigation pages={pages} />);

    const tab2 = getByTestId('tab-1');

    fireEvent.click(tab2);

    expect(getByTestId('tab-1-content')).toHaveTextContent('Tab 2 content');
  });

  it('renders content in Tab 3', () => {
    const { getByTestId } = render(<Navigation pages={pages} />);

    const tab3 = getByTestId('tab-2');

    fireEvent.click(tab3);

    expect(getByTestId('tab-2-content')).toHaveTextContent('Tab 3 content');
  });
});
