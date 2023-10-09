import { Dispatch, SetStateAction, useEffect } from 'react';
import WindowHeader from './window-header/WindowHeader';
import InternetExplorerBar from './internet-explorer-bar/InternetExplorerBar';
import WindowModel from '../../../models/component-helpers/window';
import WindowConstants from '../../../constants/window';

import styles from './Window.module.css';

type Props = {
  window: WindowModel;
  children: JSX.Element;
  widthPercentage: number;
  heightPercentage: number;
  setTabValue?: Dispatch<SetStateAction<number>>;
};

export default function Window({
  window,
  children,
  widthPercentage,
  heightPercentage,
  setTabValue,
}: Props): JSX.Element {
  const headerId = `${window.windowId}-header`;
  const contentId = `${window.windowId}-content`;

  useEffect(() => {
    const windowElement = document.getElementById(window.windowId) as HTMLDivElement;
    const content = document.getElementById(contentId) as HTMLDivElement;

    if (windowElement) {
      windowElement.style.width = `${widthPercentage}%`;
      windowElement.style.height = `${heightPercentage}%`;
    }

    if (content)
      content.style.top = `${
        window.isInternetExplorerWindow
          ? WindowConstants.IE_WINDOW_HEADER_HEIGHT
          : WindowConstants.WINDOW_HEADER_HEIGHT
      }px`;
  }, []);

  return (
    <div className={`${styles.window} windows-box-shadow`} id={window.windowId}>
      <div className={styles.header} id={headerId}>
        <WindowHeader window={window} setTabValue={setTabValue} />

        {window.isInternetExplorerWindow && (
          <InternetExplorerBar addressBarUrl={window.addressBarUrl} />
        )}
      </div>

      <div className={styles.content} id={contentId}>
        {children}
      </div>
    </div>
  );
}
