import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../../src/components/portfolio/footer/Footer';
import { contacts } from '../../../mocks/data-mock';
import { useStateMock, setBoolStateMock, setStringStateMock } from '../../../mocks/use-state-mock';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Footer component', () => {
  let getByTestId: any;
  const useDarkTheme = true;
  const setUseDarkTheme = setBoolStateMock;
  const setTheme = setStringStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    ({ getByTestId } = render(
      <Footer
        contacts={contacts}
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        setTheme={setTheme}
      />
    ));
  });

  it('renders Windows Theme button', () => {
    const element = document.getElementById('windows-theme-btn') as HTMLButtonElement;

    expect(element).toBeInTheDocument();
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
