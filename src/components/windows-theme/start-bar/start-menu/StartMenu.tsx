import { Dispatch, SetStateAction, useEffect } from 'react';
import MenuItemModel from '../../../../models/component-helpers/menu-item';

import styles from './StartMenu.module.css';
import StartMenuItem from '../start-menu-item/StartMenuItem';

type Props = {
  startMenuDivId: string;
  showStartMenu: boolean;
  setShowStartMenu: Dispatch<SetStateAction<boolean>>;
  menuItems: MenuItemModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export default function StartMenu({
  startMenuDivId,
  showStartMenu,
  setShowStartMenu,
  menuItems,
  useDarkTheme,
  setTheme,
}: Props): JSX.Element {
  useEffect(() => {
    document.addEventListener('mouseup', (e) => {
      const element = document.getElementById(startMenuDivId);

      if (element && !element?.contains(e.target as Node)) {
        element.style.display = 'none';
      }
    });
  });

  return (
    <div className={`${styles['start-menu']} windows-box-shadow`} id={startMenuDivId}>
      <div className={styles['start-menu-blue']}>
        Windows<span>98</span>
      </div>

      <ul>
        {menuItems.map((menuItem: MenuItemModel, index: number) => (
          <StartMenuItem
            showStartMenu={showStartMenu}
            setShowStartMenu={setShowStartMenu}
            useDarkTheme={useDarkTheme}
            setTheme={setTheme}
            useLineStyle={index === menuItems.length - 1}
            menuItem={menuItem}
            key={index}
          />
        ))}

        <StartMenuItem
          showStartMenu={showStartMenu}
          setShowStartMenu={setShowStartMenu}
          useDarkTheme={useDarkTheme}
          setTheme={setTheme}
        />
      </ul>
    </div>
  );
}
