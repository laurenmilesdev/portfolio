import { render } from '@testing-library/react';
import Contact from '../../../../src/components/pages/contact/Contact';

describe('Contact component', () => {
  const description = 'This is a description';

  beforeEach(() => {
    render(<Contact description={description} />);
  });

  it('renders description', () => {
    const element = document.getElementById('contact-description') as HTMLDivElement;

    expect(element).toHaveTextContent(description);
  });
});
