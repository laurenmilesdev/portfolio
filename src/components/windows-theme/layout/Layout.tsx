import { Dispatch, SetStateAction } from 'react';
import Desktop from '../desktop/Desktop';
import StartBar from '../start-bar/StartBar';
import DesktopItemModel from '../../../models/component-helpers/desktop-item';
import MenuItemModel from '../../../models/component-helpers/menu-item';
import ShutdownScreen from '../shutdown-screen/ShutdownScreen';

type Props = {
  desktopItems: DesktopItemModel[];
  menuItems: MenuItemModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export default function Layout({
  desktopItems,
  menuItems,
  useDarkTheme,
  setTheme,
}: Props): JSX.Element {
  return (
    <>
      <ShutdownScreen />
      <Desktop desktopItems={desktopItems} />
      <StartBar menuItems={menuItems} useDarkTheme={useDarkTheme} setTheme={setTheme} />
    </>
  );
}
