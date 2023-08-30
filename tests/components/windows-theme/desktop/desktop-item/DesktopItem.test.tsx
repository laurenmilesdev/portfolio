import { render } from '@testing-library/react';
import DesktopItem from '../../../../../src/components/windows-theme/desktop/desktop-item/DesktopItem';
import { desktopItems } from '../../../../mocks/data-mock';

describe('DesktopItem component', () => {
  const desktopItem = desktopItems[0];

  beforeEach(() => {
    render(
      <DesktopItem label={desktopItem.label} image={desktopItem.image} url={desktopItem.url} />
    );
  });

  it('renders desktop item', () => {
    const element = document.getElementById(
      `${desktopItem.label.toLocaleLowerCase()}-desktop-item`
    ) as HTMLAnchorElement;

    expect(element).toHaveTextContent(desktopItem.label);
  });
});
