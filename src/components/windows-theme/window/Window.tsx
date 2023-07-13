import WindowHeader from './window-header/WindowHeader';
import WindowOptions from './window-options/WindowOptions';
import WindowAddressBar from './window-address-bar/WindowAddressBar';
import PageModel from '../../../models/component-helpers/page';

import styles from './Window.module.css';

type Props = {
  page: PageModel;
  content: JSX.Element;
};

export default function Window({ page, content }: Props): JSX.Element {
  const options = ['File', 'Edit', 'Views', 'Favorites', 'Tools', 'Help'];

  return (
    <div className={`${styles.window} windows-box-shadow`} id={page.windowId}>
      <WindowHeader page={page} />

      <WindowOptions options={options} />

      <WindowAddressBar />

      <div className={styles.content}>{content}</div>
    </div>
  );
}
