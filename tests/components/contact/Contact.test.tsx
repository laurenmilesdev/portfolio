import { render } from '@testing-library/react';
import Contact from '../../../src/components/contact/Contact';

describe('Contact component', () => {
  const description = 'This is a description';

  beforeEach(() => {
    render(<Contact description={description} />);
  });

  it('renders description', () => {
    const element = document.getElementById('contact-description');

    expect(element).toHaveTextContent(description);
  });
});
