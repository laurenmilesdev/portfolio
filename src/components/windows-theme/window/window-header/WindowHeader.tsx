import { Dispatch, SetStateAction } from 'react';
import WindowModel from '../../../../models/component-helpers/window';
import { openCloseWindow, minimizeMaximizeWindow } from '../../../../utils/window';

import styles from './WindowHeader.module.css';

type Props = {
  window: WindowModel;
  setTabValue?: Dispatch<SetStateAction<number>>;
};

export const headerLabelId = 'window-header-label';
export const minimizeButtonId = 'window-header-minimize-btn';
export const closeButtonId = 'window-header-close-btn';

export default function WindowHeader({ window, setTabValue }: Props): JSX.Element {
  return (
    <div className={styles.header}>
      <label id={headerLabelId}>{window.title}</label>
      <div className={styles['header-buttons']}>
        <label
          className={`${styles.minimize} windows-box-shadow`}
          id={minimizeButtonId}
          onClick={() => {
            minimizeMaximizeWindow(window.windowId, window.startBarButtonId);
          }}
        ></label>
        <label
          className={`windows-box-shadow`}
          id={closeButtonId}
          onClick={() => {
            // Sets tab value back to first tab if window is closed
            if (setTabValue) setTabValue(0);
            openCloseWindow(window.windowId, window.startBarButtonId);
          }}
        >
          X
        </label>
      </div>
    </div>
  );
}
