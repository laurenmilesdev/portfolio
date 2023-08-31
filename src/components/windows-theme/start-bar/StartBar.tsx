import { Dispatch, SetStateAction } from 'react';
import StartButton from './start-button/StartButton';
import StartBarButton from './start-bar-button/StartBarButton';
import StartMenu from './start-menu/StartMenu';
import Clock from './clock/Clock';
import PageModel from '../../../models/component-helpers/page';

import styles from './StartBar.module.css';

type Props = {
  pages: PageModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export default function StartBar({ pages, useDarkTheme, setTheme }: Props): JSX.Element {
  return (
    <div className={styles['start-bar']}>
      <StartButton />

      <div className={styles.items}>
        {pages.map((page: PageModel, index: number) => (
          <StartBarButton page={page} index={index} key={index} />
        ))}
      </div>

      <StartMenu pages={pages} useDarkTheme={useDarkTheme} setTheme={setTheme} />

      <Clock currentTime={new Date()} />
    </div>
  );
}
