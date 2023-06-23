import { render } from '@testing-library/react';
import Contact from '../../../src/components/contact/Contact';

describe('Contact component', () => {
  const description = 'This is a description';

  it('renders page description', () => {
    const { getByTestId } = render(<Contact description={description} />);

    expect(getByTestId('description')).toHaveTextContent(description);
  });
});
