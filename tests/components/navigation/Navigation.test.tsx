import { fireEvent, render, screen } from '@testing-library/react';
import Navigation from '../../../src/components/navigation/Navigation';
import TabType from '../../../src/types/component-helpers/tab';

describe('Navigation component', () => {
  const pages: TabType[] = [
    new TabType('Tab 1', <div data-testid="tab-0-content">Tab 1 content</div>),
    new TabType('Tab 2', <div data-testid="tab-1-content">Tab 2 content</div>),
    new TabType('Tab 3', <div data-testid="tab-2-content">Tab 3 content</div>),
  ];

  it('renders tabs', () => {
    render(<Navigation pages={pages} />);

    expect(screen.getByTestId('tab-0')).toHaveTextContent('Tab 1');
    expect(screen.getByTestId('tab-1')).toHaveTextContent('Tab 2');
    expect(screen.getByTestId('tab-2')).toHaveTextContent('Tab 3');
  });

  it('renders content in Tab 1', () => {
    render(<Navigation pages={pages} />);

    expect(screen.getByTestId('tab-0-content')).toHaveTextContent('Tab 1 content');
  });

  it('renders content in Tab 2', () => {
    render(<Navigation pages={pages} />);

    const tab2 = screen.getByTestId('tab-1');

    fireEvent.click(tab2);

    expect(screen.getByTestId('tab-1-content')).toHaveTextContent('Tab 2 content');
  });

  it('renders content in Tab 3', () => {
    render(<Navigation pages={pages} />);

    const tab3 = screen.getByTestId('tab-2');

    fireEvent.click(tab3);

    expect(screen.getByTestId('tab-2-content')).toHaveTextContent('Tab 3 content');
  });
});
