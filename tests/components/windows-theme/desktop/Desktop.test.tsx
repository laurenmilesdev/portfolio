import { render } from '@testing-library/react';
import Desktop from '../../../../src/components/windows-theme/desktop/Desktop';
import { desktopItems } from '../../../mocks/data-mock';

describe('Desktop component', () => {
  beforeEach(() => {
    render(<Desktop desktopItems={desktopItems} />);
  });

  describe('DesktopItems', () => {
    it('renders desktop items', () => {
      desktopItems.forEach(({ label }) => {
        const element = document.getElementById(
          `${label.toLocaleLowerCase()}-desktop-item`
        ) as HTMLAnchorElement;

        expect(element).toHaveTextContent(label);
      });
    });
  });
});
