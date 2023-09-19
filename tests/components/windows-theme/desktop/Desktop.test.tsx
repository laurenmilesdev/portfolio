import { render } from '@testing-library/react';
import Desktop, { desktopDivId } from '../../../../src/components/windows-theme/desktop/Desktop';
import { desktopItems } from '../../../mocks/data-mock';

describe('Desktop component', () => {
  beforeEach(() => {
    render(<Desktop desktopItems={desktopItems} />);
  });

  describe('DesktopItems', () => {
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
});
