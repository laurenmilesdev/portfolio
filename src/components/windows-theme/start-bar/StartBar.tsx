import { Dispatch, SetStateAction } from 'react';
import StartButton from './start-button/StartButton';
import StartBarButton from './start-bar-button/StartBarButton';
import StartMenu from './start-menu/StartMenu';
import Clock from './clock/Clock';
import WindowModel from '../../../models/component-helpers/window';

import styles from './StartBar.module.css';

type Props = {
  windows: WindowModel[];
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const startMenuDivId = 'start-menu';

export default function StartBar({ windows, useDarkTheme, setTheme }: Props): JSX.Element {
  return (
    <div className={styles['start-bar']}>
      <StartButton startMenuDivId={startMenuDivId} />

      <div className={styles.items}>
        {windows.map((window: WindowModel, index: number) => (
          <StartBarButton window={window} key={index} />
        ))}
      </div>

      <StartMenu
        startMenuDivId={startMenuDivId}
        windows={windows}
        useDarkTheme={useDarkTheme}
        setTheme={setTheme}
      />

      <Clock currentTime={new Date()} />
    </div>
  );
}
