import { Dispatch, SetStateAction, useEffect } from 'react';
import WindowModel from '../../../../models/component-helpers/window';

import styles from './StartMenu.module.css';
import StartMenuItem from '../start-menu-item/StartMenuItem';

type Props = {
  windows: WindowModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const startMenuDivId = 'start-menu';

export default function StartMenu({ windows, useDarkTheme, setTheme }: Props): JSX.Element {
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
        {windows.map((window: WindowModel, index: number) => (
          <StartMenuItem
            windows={windows}
            useDarkTheme={useDarkTheme}
            setTheme={setTheme}
            window={window}
            index={index}
            key={index}
          />
        ))}

        <StartMenuItem windows={windows} useDarkTheme={useDarkTheme} setTheme={setTheme} />
      </ul>
    </div>
  );
}
