import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import { useStateMock, setStringStateMock } from '../../../../mocks/use-state-mock';
import StartMenuItem, {
  shutdownLabelText,
  shutdownMenuItemLabelId,
} from '../../../../../src/components/windows-theme/start-bar/start-menu-item/StartMenuItem';
import { startMenuDivId } from '../../../../../src/components/windows-theme/start-bar/StartBar';
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

describe('StartMenuItem component', () => {
  const useDarkTheme = true;
  const setTheme = setStringStateMock;

  it('renders menu item', () => {
    const index = 1;
    const window = windows[index];

    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);
    render(
      <StartMenuItem
        startMenuDivId={startMenuDivId}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
        useLineStyle={true}
        window={window}
      />
    );

    const element = document.getElementById(window.menuItemButtonId ?? '') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(window.title);
  });

  it('renders shutdown menu item if page and index are undefined', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);
    render(
      <StartMenuItem
        startMenuDivId={startMenuDivId}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
      />
    );

    const element = document.getElementById(shutdownMenuItemLabelId) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(shutdownLabelText);
  });
});
