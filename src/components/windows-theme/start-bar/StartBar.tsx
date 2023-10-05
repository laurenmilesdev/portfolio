import { Dispatch, SetStateAction, useState } from 'react';
import StartButton from './start-button/StartButton';
import StartBarButton from './start-bar-button/StartBarButton';
import StartMenu from './start-menu/StartMenu';
import Clock from './clock/Clock';
import MenuItemModel from '../../../models/component-helpers/menu-item';

import styles from './StartBar.module.css';

type Props = {
  menuItems: MenuItemModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const startMenuDivId = 'start-menu';
export const startBarDivId = 'start-bar';

export default function StartBar({ menuItems, useDarkTheme, setTheme }: Props): JSX.Element {
  const [showStartMenu, setShowStartMenu] = useState<boolean>(false);

  return (
    <div className={styles['start-bar']} id={startBarDivId}>
      <StartButton
        startMenuDivId={startMenuDivId}
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
      />

      <div className={styles.items}>
        {menuItems.map((menuItem: MenuItemModel, index: number) => {
          if (menuItem.window)
            return (
              <StartBarButton
                menuItemTitle={menuItem.title}
                menuItemWindow={menuItem.window}
                key={index}
              />
            );
        })}
      </div>

      <StartMenu
        startMenuDivId={startMenuDivId}
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
        menuItems={menuItems}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
      />

      <Clock currentTime={new Date()} />
    </div>
  );
}
