import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import StartButton from './start-button/StartButton';
import StartBarButton from './start-bar-button/StartBarButton';
import StartMenu from './start-menu/StartMenu';
import Clock from './clock/Clock';
import MenuItemModel from '../../../models/component-helpers/menu-item';
import { openCloseMenu } from '../../../utils/window';

import styles from './StartBar.module.css';

type Props = {
  menuItems: MenuItemModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const startMenuDivId = 'start-menu';
export const startBarDivId = 'start-bar';

export default function StartBar({ menuItems, useDarkTheme, setTheme }: Props): JSX.Element {
  const [showStartMenu, setShowStartMenu] = useState<boolean>(true);

  useEffect(() => {
    document.addEventListener('mouseup', (e) => {
      const element = document.getElementById(startMenuDivId);

      if (element && !element?.contains(e.target as Node)) {
        element.style.display = 'none';
      }
    });
  }, []);

  useEffect(() => {
    openCloseMenu(startMenuDivId, showStartMenu);
  }, [showStartMenu]);

  return (
    <div className={styles['start-bar']} id={startBarDivId}>
      <StartButton showStartMenu={showStartMenu} setShowStartMenu={setShowStartMenu} />

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
