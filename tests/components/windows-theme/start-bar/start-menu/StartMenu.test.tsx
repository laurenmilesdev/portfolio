import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import { useStateMock, setStringStateMock } from '../../../../mocks/use-state-mock';
import StartMenu, {
  startMenuDivId,
} from '../../../../../src/components/windows-theme/start-bar/start-menu/StartMenu';
import {
  shutdownLabelText,
  shutdownMenuItemLabelId,
} from '../../../../../src/components/windows-theme/start-bar/start-menu-item/StartMenuItem';
import { windows } from '../../../../mocks/data-mock';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('StartMenu component', () => {
  const useDarkTheme = true;
  const setTheme = setStringStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);
    render(<StartMenu windows={windows} useDarkTheme={useDarkTheme} setTheme={setTheme} />);
  });

  it('renders "Windows98" sidebar', () => {
    const element = document.getElementById(startMenuDivId) as HTMLDivElement;

    expect(element).toHaveTextContent('Windows98');
  });

  it('renders correct menu items', () => {
    const window = windows[1];
    const element = document.getElementById(window.menuItemButtonId ?? '') as HTMLLabelElement;
    const shutdownElement = document.getElementById(shutdownMenuItemLabelId) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(window.title);

    expect(shutdownElement).toBeInTheDocument();
    expect(shutdownElement).toHaveTextContent(shutdownLabelText);
  });
});
