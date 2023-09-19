import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import { useStateMock, setStringStateMock } from '../../../mocks/use-state-mock';
import WindowsThemeButton, {
  buttonId,
} from '../../../../src/components/portfolio/footer/windows-theme-button/WindowsThemeButton';

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
  const useDarkTheme = true;
  const setTheme = setStringStateMock;

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
});
