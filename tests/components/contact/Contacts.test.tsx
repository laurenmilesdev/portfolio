import { render } from '@testing-library/react';
import Contacts from '../../../src/components/contact/Contacts';
import ContactType from '../../../src/types/contact/contact';

describe('Contacts component', () => {
  let getByTestId: any;
  const contacts = [
    new ContactType('GitHub', 'Contact description.', 'Contact value', 'github.com'),
    new ContactType('LinkedIn', 'Contact description 2.', 'Contact value 2', 'linkedin.com'),
    new ContactType('Resume', 'Contact description 3.', 'Contact value 3'),
    new ContactType('None', 'Contact description 4.', 'Contact value 4'),
  ];

  beforeEach(() => {
    ({ getByTestId } = render(<Contacts contacts={contacts} />));
  });

  it('renders contact buttons with correct icons', () => {
    expect(getByTestId('GitHubIcon')).toBeVisible();
    expect(getByTestId('LinkedInIcon')).toBeVisible();
    expect(getByTestId('PictureAsPdfIcon')).toBeVisible();
  });

  it('renders contact buttons with correct URLs', () => {
    contacts.forEach((contact: ContactType, index: number) => {
      const element = document.getElementById(`btn-${index}`);

      expect(element).toHaveAttribute('href', contact.url);
    });
  });
});
