import { render } from '@testing-library/react';
import Contacts from '../../../src/components/contact/Contacts';
import ContactType from '../../../src/types/contact/contact';

describe('Contact component', () => {
  const description = 'This is a description.';
  const contacts = [
    new ContactType('Contact Name', 'Contact description.', 'Contact value'),
    new ContactType('Contact Name 2', 'Contact description 2.', 'Contact value 2', 'url.com'),
  ];

  it('renders page decription', () => {
    const { getByTestId } = render(<Contacts description={description} contacts={contacts} />);
    const pageDescription = getByTestId('description');

    expect(pageDescription).toHaveTextContent(description);
  });

  it('renders a list of contact buttons', () => {
    contacts.forEach((contact) => {
      render(<Contacts description={description} contacts={contacts} />);
      const button = document.getElementById(`${contact.name}-btn`) as HTMLButtonElement;

      expect(button).toHaveTextContent(contact.name);
    });
  });
});
