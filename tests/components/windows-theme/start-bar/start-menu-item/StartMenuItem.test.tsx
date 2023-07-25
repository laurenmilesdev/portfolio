import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import { useStateMock, setStateMock } from '../../../../mocks/use-state-mock';
import StartMenuItem, {
  shutdownLabelText,
} from '../../../../../src/components/windows-theme/start-bar/start-menu-item/StartMenuItem';
import { pages } from '../../../../mocks/data-mock';

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
  const useWindowsTheme = true;
  const setUseWindowsTheme = setStateMock;

  it('renders null if index is 0', () => {
    const index = 0;
    const page = pages[index];

    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);
    render(
      <StartMenuItem
        pages={pages}
        useWindowsTheme={useWindowsTheme}
        setUseWindowsTheme={setUseWindowsTheme}
        page={page}
        index={index}
      />
    );

    const element = document.getElementById(page.menuItemButtonId ?? '') as HTMLLabelElement;

    expect(element).toEqual(null);
  });

  it('renders menu item if index is not 0', () => {
    const index = 1;
    const page = pages[index];

    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);
    render(
      <StartMenuItem
        pages={pages}
        useWindowsTheme={useWindowsTheme}
        setUseWindowsTheme={setUseWindowsTheme}
        page={page}
        index={index}
      />
    );

    const element = document.getElementById(page.menuItemButtonId ?? '') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(page.label);
  });

  it('renders shutdown menu item if page and index are undefined', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);
    render(
      <StartMenuItem
        pages={pages}
        useWindowsTheme={useWindowsTheme}
        setUseWindowsTheme={setUseWindowsTheme}
      />
    );

    const element = document.getElementById('shutdown-menu-item') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(shutdownLabelText);
  });
});
