import { Dispatch, SetStateAction } from 'react';
import StartButton from './start-button/StartButton';
import StartBarButton from './start-bar-button/StartBarButton';
import StartMenu from './start-menu/StartMenu';
import Clock from './clock/Clock';
import PageModel from '../../../models/component-helpers/page';

import styles from './StartBar.module.css';

type Props = {
  pages: PageModel[];
  useWindowsTheme: boolean;
  setUseWindowsTheme: Dispatch<SetStateAction<boolean>>;
};

export default function StartBar({
  pages,
  useWindowsTheme,
  setUseWindowsTheme,
}: Props): JSX.Element {
  return (
    <div className={styles['start-bar']}>
      <StartButton />

      <div className={styles.items}>
        {pages.map((page: PageModel, index: number) => (
          <StartBarButton page={page} index={index} key={index} />
        ))}
      </div>

      <StartMenu
        pages={pages}
        useWindowsTheme={useWindowsTheme}
        setUseWindowsTheme={setUseWindowsTheme}
      />

      <Clock />
    </div>
  );
}
