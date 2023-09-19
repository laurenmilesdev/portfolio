import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import Layout from '../../../../src/components/windows-theme/layout/Layout';
import { desktopDivId } from '../../../../src/components/windows-theme/desktop/Desktop';
import { startBarDivId } from '../../../../src/components/windows-theme/start-bar/StartBar';
import { desktopItems, menuItems } from '../../../mocks/data-mock';
import { useStateMock, setStringStateMock } from '../../../mocks/use-state-mock';

describe('Layout component', () => {
  const useDarkTheme = true;
  const setTheme = setStringStateMock;

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
      />
    );
  });

  describe('Desktop', () => {
    it('renders Desktop', () => {
      const element = document.getElementById(desktopDivId);

      expect(element).toBeInTheDocument();
    });

    it('renders Desktop items', () => {
      desktopItems.forEach(({ label }) => {
        const element = document.getElementById(
          `${label.toLocaleLowerCase()}-desktop-item`
        ) as HTMLAnchorElement;

        expect(element).toHaveTextContent(label);
      });
    });
  });

  describe('StartBar', () => {
    it('renders StartBar', () => {
      const element = document.getElementById(startBarDivId);

      expect(element).toBeInTheDocument();
    });
  });
});
