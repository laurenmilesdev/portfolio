import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import {
  useStateMock,
  setBoolStateMock,
  setStringStateMock,
} from '../../../../mocks/use-state-mock';
import StartMenuItem, {
  shutdownLabelText,
  shutdownMenuItemLabelId,
} from '../../../../../src/components/windows-theme/start-bar/start-menu-item/StartMenuItem';
import { startMenuDivId } from '../../../../../src/components/windows-theme/start-bar/StartBar';
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

describe('StartMenuItem component', () => {
  const showStartMenu = true;
  const setShowStartMenu = setBoolStateMock;
  const useDarkTheme = true;
  const setTheme = setStringStateMock;

  it('renders menu item', () => {
    const index = 1;
    const menuItem = menuItems[index];

    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(
      <StartMenuItem
        startMenuDivId={startMenuDivId}
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
        useLineStyle={true}
        menuItem={menuItem}
      />
    );

    const element = document.getElementById(menuItem.menuItemButtonId) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(menuItem.title);
  });

  it('renders shutdown menu item if page and index are undefined', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(
      <StartMenuItem
        startMenuDivId={startMenuDivId}
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
      />
    );

    const element = document.getElementById(shutdownMenuItemLabelId) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(shutdownLabelText);
  });
});
