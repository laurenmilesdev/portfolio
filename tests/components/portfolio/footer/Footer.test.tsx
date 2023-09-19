import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../../src/components/portfolio/footer/Footer';
import { windowsThemeButtonId } from '../../../../src/components/portfolio/footer/windows-theme-button/WindowsThemeButton';
import { switchId } from '../../../../src/components/portfolio/footer/theme-switch/ThemeSwitch';
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

  describe('WindowsThemeButton', () => {
    it('renders Windows Theme button', () => {
      const element = document.getElementById(windowsThemeButtonId) as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });
  });

  describe('Contacts', () => {
    it('renders Contacts', () => {
      expect(getByTestId('GitHubIcon')).toBeVisible();
      expect(getByTestId('LinkedInIcon')).toBeVisible();
      expect(getByTestId('PictureAsPdfIcon')).toBeVisible();
    });
  });

  describe('ThemeSwitch', () => {
    it('renders ThemeSwitch', () => {
      const element = document.getElementById(switchId) as HTMLSpanElement;

      expect(element).toBeInTheDocument();
    });
  });
});
