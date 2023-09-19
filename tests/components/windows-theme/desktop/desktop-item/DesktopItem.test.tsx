import { render } from '@testing-library/react';
import DesktopItem from '../../../../../src/components/windows-theme/desktop/desktop-item/DesktopItem';
import { desktopItems } from '../../../../mocks/data-mock';

describe('DesktopItem component', () => {
  it('renders desktop item', () => {
    desktopItems.forEach((desktopItem) => {
      render(
        <DesktopItem label={desktopItem.label} image={desktopItem.image} url={desktopItem.url} />
      );

      const element = document.getElementById(
        `${desktopItem.label.toLocaleLowerCase()}-desktop-item`
      ) as HTMLAnchorElement;

      expect(element).toHaveTextContent(desktopItem.label);
    });
  });
});
