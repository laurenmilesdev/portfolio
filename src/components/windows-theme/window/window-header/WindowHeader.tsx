import WindowModel from '../../../../models/component-helpers/window';

import styles from './WindowHeader.module.css';

type Props = {
  window: WindowModel;
};

export const headerLabelId = 'window-header-label';
export const minimizeButtonId = 'window-header-minimize-btn';
export const closeButtonId = 'window-header-close-btn';

export default function WindowHeader({ window }: Props): JSX.Element {
  return (
    <div className={styles.header}>
      <label id={headerLabelId}>{window.title}</label>
      <div className={styles['header-buttons']}>
        <label className={`${styles.minimize} windows-box-shadow`} id={minimizeButtonId}></label>
        <label className={`windows-box-shadow`} id={closeButtonId}>
          X
        </label>
      </div>
    </div>
  );
}
