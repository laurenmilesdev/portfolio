import WindowHeader from './window-header/WindowHeader';
import WindowOptions from './window-options/WindowOptions';
import WindowAddressBar from './window-address-bar/WindowAddressBar';
import WindowModel from '../../../models/component-helpers/window';

import styles from './Window.module.css';

type Props = {
  window: WindowModel;
  children: JSX.Element;
};

export default function Window({ window, children }: Props): JSX.Element {
  const options = ['File', 'Edit', 'Views', 'Favorites', 'Tools', 'Help'];

  return (
    <div className={`${styles.window} windows-box-shadow`} id={window.windowId}>
      <WindowHeader window={window} />

      <WindowOptions options={options} />

      <WindowAddressBar />

      <div className={styles.content}>{children}</div>
    </div>
  );
}
