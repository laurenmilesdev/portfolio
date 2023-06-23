import { render } from '@testing-library/react';
import Contact from '../../../src/components/contact/Contact';
import ContactType from '../../../src/types/contact/contact';

describe('Contact component', () => {
  const description = 'This is a description';
  const contacts = [
    new ContactType('GitHub', 'Contact description.', 'Contact value'),
    new ContactType('LinkedIn', 'Contact description 2.', 'Contact value 2', 'url.com'),
  ];

  it('renders page description', () => {
    const { getByTestId } = render(<Contact description={description} contacts={contacts} />);

    expect(getByTestId('description')).toHaveTextContent(description);
  });
});
