import { Dispatch, SetStateAction } from 'react';
import PageModel from '../../../../models/component-helpers/page';

import styles from './StartMenu.module.css';
import StartMenuItem from '../start-menu-item/StartMenuItem';

type Props = {
  pages: PageModel[];
  useWindowsTheme: boolean;
  setUseWindowsTheme: Dispatch<SetStateAction<boolean>>;
};

export default function StartMenu({
  pages,
  useWindowsTheme,
  setUseWindowsTheme,
}: Props): JSX.Element {
  return (
    <div className={`${styles['start-menu']} windows-box-shadow`} id="start-menu">
      <div className={styles['start-menu-blue']}>
        Windows<span>98</span>
      </div>

      <ul>
        {pages.map((page: PageModel, index: number) => (
          <StartMenuItem
            pages={pages}
            useWindowsTheme={useWindowsTheme}
            setUseWindowsTheme={setUseWindowsTheme}
            page={page}
            index={index}
          />
        ))}

        <StartMenuItem
          pages={pages}
          useWindowsTheme={useWindowsTheme}
          setUseWindowsTheme={setUseWindowsTheme}
        />
      </ul>
    </div>
  );
}
