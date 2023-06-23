import { render } from '@testing-library/react';
import Contacts from '../../../src/components/contact/Contacts';
import ContactType from '../../../src/types/contact/contact';

describe('Contacts component', () => {
  const contacts = [
    new ContactType('GitHub', 'Contact description.', 'Contact value'),
    new ContactType('LinkedIn', 'Contact description 2.', 'Contact value 2', 'url.com'),
  ];

  it('renders contact buttons', () => {
    const { getByTestId } = render(<Contacts contacts={contacts} />);

    expect(getByTestId('GitHubIcon')).toBeVisible();
    expect(getByTestId('LinkedInIcon')).toBeVisible();
  });
});
