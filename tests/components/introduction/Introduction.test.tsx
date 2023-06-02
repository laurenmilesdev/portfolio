import { render, screen } from '@testing-library/react';
import Introduction from '../../../src/components/introduction/Introduction';

describe('Introduction component', () => {
  it('renders subtitle', () => {
    const subtitle = 'This is a subtitle';

    render(<Introduction subtitle={subtitle} />);

    expect(screen.getByTestId('intro')).toHaveTextContent(subtitle);
  });

  it('has class assigned to div', () => {
    const subtitle = 'This is a subtitle';
    const { container } = render(<Introduction subtitle={subtitle} />);

    expect(container.firstChild).toHaveClass('content-animated');
  });
});
