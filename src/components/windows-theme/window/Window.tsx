import WindowHeader from './window-header/WindowHeader';
import InternetExplorerBar from './internet-explorer-bar/InternetExplorerBar';
import WindowModel from '../../../models/component-helpers/window';

import styles from './Window.module.css';

type Props = {
  window: WindowModel;
  children: JSX.Element;
};

export default function Window({ window, children }: Props): JSX.Element {
  return (
    <div className={`${styles.window} windows-box-shadow`} id={window.windowId}>
      <WindowHeader window={window} />

      {window.isInternetExplorerWindow && (
        <InternetExplorerBar addressBarUrl={window.addressBarUrl} />
      )}

      <div className={styles.content}>{children}</div>
    </div>
  );
}
