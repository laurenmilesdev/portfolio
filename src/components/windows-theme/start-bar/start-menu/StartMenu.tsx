import { Dispatch, SetStateAction, useEffect } from 'react';
import PageModel from '../../../../models/component-helpers/page';

import styles from './StartMenu.module.css';
import StartMenuItem from '../start-menu-item/StartMenuItem';

type Props = {
  pages: PageModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const startMenuDivId = 'start-menu';

export default function StartMenu({ pages, useDarkTheme, setTheme }: Props): JSX.Element {
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
        {pages.map((page: PageModel, index: number) => (
          <StartMenuItem
            pages={pages}
            useDarkTheme={useDarkTheme}
            setTheme={setTheme}
            page={page}
            index={index}
            key={index}
          />
        ))}

        <StartMenuItem pages={pages} useDarkTheme={useDarkTheme} setTheme={setTheme} />
      </ul>
    </div>
  );
}
