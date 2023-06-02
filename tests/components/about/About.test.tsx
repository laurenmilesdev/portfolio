import { render, screen } from '@testing-library/react';
import About from '../../../src/components/about/About';

describe('About component', () => {
  it('renders string[] of paragraphs', () => {
    const descriptions = ['This description paragraph 1', 'This is description paragraph 2'];

    render(<About description={descriptions} />);

    expect(screen.getByTestId('paragraph-0')).toHaveTextContent(descriptions[0]);
    expect(screen.getByTestId('paragraph-1')).toHaveTextContent(descriptions[1]);
  });
});
