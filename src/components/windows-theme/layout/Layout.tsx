import { Dispatch, SetStateAction } from 'react';
import Desktop from '../desktop/Desktop';
import StartBar from '../start-bar/StartBar';
import DesktopItemModel from '../../../models/component-helpers/desktop-item';
import MenuItemModel from '../../../models/component-helpers/menu-item';

type Props = {
  desktopItems: DesktopItemModel[];
  menuItems: MenuItemModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
  setPageTabValue: Dispatch<SetStateAction<number>>;
};

export default function Layout({
  desktopItems,
  menuItems,
  useDarkTheme,
  setTheme,
  setPageTabValue,
}: Props): JSX.Element {
  return (
    <>
      <Desktop desktopItems={desktopItems} />
      <StartBar
        menuItems={menuItems}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
        setPageTabValue={setPageTabValue}
      />
    </>
  );
}
