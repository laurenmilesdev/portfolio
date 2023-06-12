import { render } from '@testing-library/react';
import About from '../../../src/components/about/About';

describe('About component', () => {
  it('renders string[] of paragraphs', () => {
    const dataTestId = 'about-paragraph';
    const paragraphs = ['This description paragraph 1', 'This is description paragraph 2'];

    const { getByTestId } = render(<About paragraphs={paragraphs} />);

    expect(getByTestId(`${dataTestId}-0`)).toHaveTextContent(paragraphs[0]);
    expect(getByTestId(`${dataTestId}-1`)).toHaveTextContent(paragraphs[1]);
  });
});
