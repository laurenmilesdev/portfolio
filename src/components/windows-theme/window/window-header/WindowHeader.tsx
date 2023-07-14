import PageModel from '../../../../models/component-helpers/page';

import styles from './WindowHeader.module.css';

type Props = {
  page: PageModel;
};

export default function WindowHeader({ page }: Props): JSX.Element {
  return (
    <div className={styles.header}>
      <label id="window-header-label">{page.label}</label>
      <div className={styles['header-buttons']}>
        <label
          className={`${styles.minimize} windows-box-shadow`}
          id="window-header-minimize-btn"
        ></label>
        <label className={`windows-box-shadow`} id="window-header-close-btn">
          X
        </label>
      </div>
    </div>
  );
}
