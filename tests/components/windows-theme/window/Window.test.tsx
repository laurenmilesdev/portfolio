import { render } from '@testing-library/react';
import Window from '../../../../src/components/windows-theme/window/Window';
import { internetExplorerBarDivId } from '../../../../src/components/windows-theme/window/internet-explorer-bar/InternetExplorerBar';
import { windows } from '../../../mocks/data-mock';

describe('Window component', () => {
  const childrenContent = 'This is child component';
  const children = <>{childrenContent}</>;
  const widthPercentage = 50;
  const heightPercentage = 50;

  describe('isInternetExplorerWindow is true', () => {
    const window = windows[0];

    if (window) {
      beforeEach(() => {
        render(
          <Window
            window={window}
            widthPercentage={widthPercentage}
            heightPercentage={heightPercentage}
            scroll={true}
          >
            {children}
          </Window>
        );
      });

      it('renders WindowHeader', () => {
        const element = document.getElementById(`${window.windowId}-header`) as HTMLLabelElement;

        expect(element).toHaveTextContent(window.title);
      });

      it('renders InternetExplorerBar', () => {
        const element = document.getElementById(internetExplorerBarDivId);

        expect(element).toBeInTheDocument();
      });

      it('renders content', () => {
        const element = document.getElementById(`${window.windowId}-content`) as HTMLLabelElement;

        expect(element).toHaveTextContent(childrenContent);
      });
    }
  });

  describe('isInternetExplorerWindow is false', () => {
    const window = windows[2];

    if (window) {
      beforeEach(() => {
        render(
          <Window
            window={window}
            widthPercentage={widthPercentage}
            heightPercentage={heightPercentage}
            scroll={true}
          >
            {children}
          </Window>
        );
      });

      it('renders WindowHeader', () => {
        const element = document.getElementById(`${window.windowId}-header`) as HTMLLabelElement;

        expect(element).toHaveTextContent(window.title);
      });

      it('does not render InternetExplorerBar', () => {
        const element = document.getElementById(internetExplorerBarDivId);

        expect(element).toBeNull();
      });

      it('renders content', () => {
        const element = document.getElementById(`${window.windowId}-content`) as HTMLLabelElement;

        expect(element).toHaveTextContent(childrenContent);
      });
    }
  });
});
