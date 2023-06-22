import { render } from '@testing-library/react';
import Contact from '../../../src/components/contact/Contact';
import ContactType from '../../../src/types/contact/contact';

describe('Contact component', () => {
  const contact = new ContactType('Contact Name', 'Contact description.', 'Contact value');

  it('renders contact button', () => {
    render(<Contact contact={contact} />);

    const button = document.getElementById(`${contact.name}-btn`) as HTMLButtonElement;

    expect(button).toHaveTextContent(contact.name);
  });
});
