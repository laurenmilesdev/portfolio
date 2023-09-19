import { render } from '@testing-library/react';
import Contacts from '../../../../../src/components/portfolio/footer/contacts/Contacts';
import { contacts } from '../../../../mocks/data-mock';

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
    contacts.forEach(({ name, url }) => {
      const element = document.getElementById(name.toLocaleLowerCase()) as HTMLButtonElement;

      expect(element).toHaveAttribute('href', url);
    });
  });
});
