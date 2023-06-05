import { render, screen } from '@testing-library/react';
import About from '../../../src/components/about/About';

describe('About component', () => {
  it('renders string[] of paragraphs', () => {
    const paragraphs = ['This description paragraph 1', 'This is description paragraph 2'];

    render(<About paragraphs={paragraphs} />);

    expect(screen.getByTestId('paragraph-0')).toHaveTextContent(paragraphs[0]);
    expect(screen.getByTestId('paragraph-1')).toHaveTextContent(paragraphs[1]);
  });
});
