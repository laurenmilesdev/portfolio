import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import Layout from '../../../../src/components/windows-theme/layout/Layout';
import { desktopDivId } from '../../../../src/components/windows-theme/desktop/Desktop';
import { startBarDivId } from '../../../../src/components/windows-theme/start-bar/StartBar';
import { desktopItems, menuItems } from '../../../mocks/data-mock';
import {
  useStateMock,
  setNumberStateMock,
  setStringStateMock,
} from '../../../mocks/use-state-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Layout component', () => {
  const useDarkTheme = true;
  const setTheme = setStringStateMock;
  const setPageTabValue = setNumberStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(
      <Layout
        desktopItems={desktopItems}
        menuItems={menuItems}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
        setPageTabValue={setPageTabValue}
      />
    );
  });

  it('renders Desktop', () => {
    const element = document.getElementById(desktopDivId);

    expect(element).toBeInTheDocument();
  });

  it('renders StartBar', () => {
    const element = document.getElementById(startBarDivId);

    expect(element).toBeInTheDocument();
  });
});
