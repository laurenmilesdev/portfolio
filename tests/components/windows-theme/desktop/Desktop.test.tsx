import { render } from '@testing-library/react';
import Desktop from '../../../../src/components/windows-theme/desktop/Desktop';
import { desktopItems } from '../../../mocks/data-mock';

describe('Desktop component', () => {
  beforeEach(() => {
    render(<Desktop desktopItems={desktopItems} />);
  });

  it('renders desktop items', () => {
    desktopItems.forEach((item) => {
      const element = document.getElementById(
        `${item.label.toLocaleLowerCase()}-desktop-item`
      ) as HTMLAnchorElement;

      expect(element).toHaveTextContent(item.label);
    });
  });
});
