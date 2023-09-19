import { render } from '@testing-library/react';
import Contacts from '../../../src/components/portfolio/footer/contacts/Contacts';
import ContactModel from '../../../src/models/contact/contact';

import { contacts } from '../../mocks/data-mock';

describe('Contacts component', () => {
  let getByTestId: any;

  beforeEach(() => {
    ({ getByTestId } = render(<Contacts contacts={contacts} />));
  });

  it('renders contact buttons with correct icons', () => {
    expect(getByTestId('GitHubIcon')).toBeVisible();
    expect(getByTestId('LinkedInIcon')).toBeVisible();
    expect(getByTestId('PictureAsPdfIcon')).toBeVisible();
  });

  it('renders contact buttons with correct URLs', () => {
    contacts.forEach((contact: ContactModel, index: number) => {
      const element = document.getElementById(`btn-${index}`) as HTMLButtonElement;

      expect(element).toHaveAttribute('href', contact.url);
    });
  });
});
