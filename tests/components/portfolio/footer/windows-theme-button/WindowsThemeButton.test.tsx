import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import {
  useStateMock,
  setNumberStateMock,
  setStringStateMock,
} from '../../../../mocks/use-state-mock';
import WindowsThemeButton, {
  windowsThemeButtonId,
  windowsThemeWhiteImageId,
  windowsThemeBlackImageId,
} from '../../../../../src/components/portfolio/footer/windows-theme-button/WindowsThemeButton';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('WindowsThemeButton component', () => {
  const setTheme = setStringStateMock;
  const setPageTabValue = setNumberStateMock;

  describe('useDarkTheme is true', () => {
    const useDarkTheme = true;

    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

      render(
        <WindowsThemeButton
          useDarkTheme={useDarkTheme}
          setTheme={setTheme}
          setPageTabValue={setPageTabValue}
        />
      );
    });

    it('renders button', () => {
      const element = document.getElementById(windowsThemeButtonId) as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });

    it('renders correct image', () => {
      const element = document.getElementById(windowsThemeWhiteImageId) as HTMLImageElement;
      const wrongElement = document.getElementById(windowsThemeBlackImageId) as HTMLImageElement;

      expect(element).toBeInTheDocument();
      expect(wrongElement).toBeNull();
    });
  });

  describe('useDarkTheme is false', () => {
    const useDarkTheme = false;

    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

      render(
        <WindowsThemeButton
          useDarkTheme={useDarkTheme}
          setTheme={setTheme}
          setPageTabValue={setPageTabValue}
        />
      );
    });

    it('renders button', () => {
      const element = document.getElementById(windowsThemeButtonId) as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });

    it('renders correct image', () => {
      const element = document.getElementById(windowsThemeBlackImageId) as HTMLImageElement;
      const wrongElement = document.getElementById(windowsThemeWhiteImageId) as HTMLImageElement;

      expect(element).toBeInTheDocument();
      expect(wrongElement).toBeNull();
    });
  });
});
