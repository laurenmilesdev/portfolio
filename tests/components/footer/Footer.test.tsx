import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import Footer from '../../../src/components/footer/Footer';
import { contacts, pages } from '../../mocks/data-mock';
import { useStateMock, setStateMock } from '../../mocks/use-state-mock';

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
  const setUseWindowsTheme = setStateMock;

  describe('Windows Theme disabled', () => {
    const useWindowsTheme = false;

    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

      ({ getByTestId } = render(
        <Footer
          pages={pages}
          contacts={contacts}
          useWindowsTheme={useWindowsTheme}
          setUseWindowsTheme={setUseWindowsTheme}
        />
      ));
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

    it('renders Windows Theme button', () => {
      const element = document.getElementById('windows-theme-btn') as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });
  });

  describe('Windows Theme enabled', () => {
    const useWindowsTheme = true;

    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

      ({ getByTestId } = render(
        <Footer
          pages={pages}
          contacts={contacts}
          useWindowsTheme={useWindowsTheme}
          setUseWindowsTheme={setUseWindowsTheme}
        />
      ));
    });

    it('renders StartButton', () => {
      const element = document.getElementById('windows-start-btn') as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });
  });
});
