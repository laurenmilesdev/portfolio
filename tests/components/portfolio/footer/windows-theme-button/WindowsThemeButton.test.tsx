import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import { useStateMock, setStringStateMock } from '../../../../mocks/use-state-mock';
import WindowsThemeButton, {
  buttonId,
  whiteWindowsImageId,
  blackWindowsImageId,
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

  describe('useDarkTheme is true', () => {
    const useDarkTheme = true;

    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

      render(<WindowsThemeButton useDarkTheme={useDarkTheme} setTheme={setTheme} />);
    });

    it('renders button', () => {
      const element = document.getElementById(buttonId) as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });

    it('renders correct image', () => {
      const element = document.getElementById(whiteWindowsImageId) as HTMLImageElement;
      const wrongElement = document.getElementById(blackWindowsImageId) as HTMLImageElement;

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

      render(<WindowsThemeButton useDarkTheme={useDarkTheme} setTheme={setTheme} />);
    });

    it('renders button', () => {
      const element = document.getElementById(buttonId) as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });

    it('renders correct image', () => {
      const element = document.getElementById(blackWindowsImageId) as HTMLImageElement;
      const wrongElement = document.getElementById(whiteWindowsImageId) as HTMLImageElement;

      expect(element).toBeInTheDocument();
      expect(wrongElement).toBeNull();
    });
  });
});
