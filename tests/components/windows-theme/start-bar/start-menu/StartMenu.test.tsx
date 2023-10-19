import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import {
  useStateMock,
  setBoolStateMock,
  setNumberStateMock,
  setStringStateMock,
} from '../../../../mocks/use-state-mock';
import StartMenu from '../../../../../src/components/windows-theme/start-bar/start-menu/StartMenu';
import { startMenuDivId } from '../../../../../src/components/windows-theme/start-bar/StartBar';
import {
  shutdownLabelText,
  shutdownMenuItemLabelId,
} from '../../../../../src/components/windows-theme/start-bar/start-menu-item/StartMenuItem';
import { menuItems } from '../../../../mocks/data-mock';

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
  const showStartMenu = true;
  const setShowStartMenu = setBoolStateMock;
  const useDarkTheme = true;
  const setTheme = setStringStateMock;
  const setPageTabValue = setNumberStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(
      <StartMenu
        startMenuDivId={startMenuDivId}
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
        menuItems={menuItems}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
        setPageTabValue={setPageTabValue}
      />
    );
  });

  it('renders "Windows98" sidebar', () => {
    const element = document.getElementById(startMenuDivId) as HTMLDivElement;

    expect(element).toHaveTextContent('Windows98');
  });

  it('renders correct menu items', () => {
    menuItems.forEach((menuItem) => {
      const element = document.getElementById(menuItem.menuItemButtonId) as HTMLLabelElement;
      const shutdownElement = document.getElementById(shutdownMenuItemLabelId) as HTMLLabelElement;

      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(menuItem.title);

      expect(shutdownElement).toBeInTheDocument();
      expect(shutdownElement).toHaveTextContent(shutdownLabelText);
    });
  });
});
