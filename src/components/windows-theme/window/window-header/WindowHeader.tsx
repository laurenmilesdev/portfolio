import PageModel from '../../../../models/component-helpers/page';

import styles from './WindowHeader.module.css';

type Props = {
  page: PageModel;
};

export const headerLabelId = 'window-header-label';
export const minimizeButtonId = 'window-header-minimize-btn';
export const closeButtonId = 'window-header-close-btn';

export default function WindowHeader({ page }: Props): JSX.Element {
  return (
    <div className={styles.header}>
      <label id={headerLabelId}>{page.title}</label>
      <div className={styles['header-buttons']}>
        <label className={`${styles.minimize} windows-box-shadow`} id={minimizeButtonId}></label>
        <label className={`windows-box-shadow`} id={closeButtonId}>
          X
        </label>
      </div>
    </div>
  );
}
