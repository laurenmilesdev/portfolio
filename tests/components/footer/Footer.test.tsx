import { render } from '@testing-library/react';
import Footer from '../../../src/components/footer/Footer';
import { contacts } from '../../mocks/data-mock';

describe('Footer component', () => {
  let getByTestId: any;

  beforeEach(() => {
    ({ getByTestId } = render(<Footer contacts={contacts} />));
  });

  it('renders Contacts', () => {
    expect(getByTestId('GitHubIcon')).toBeVisible();
    expect(getByTestId('LinkedInIcon')).toBeVisible();
    expect(getByTestId('PictureAsPdfIcon')).toBeVisible();
  });

  it('renders ThemeSwitch', () => {
    const element = document.getElementById('theme-switch') as HTMLSpanElement;

    expect(element).toBeInTheDocument();
  });
});
