import PageModel from '../../../../models/component-helpers/page';

import styles from './WindowHeader.module.css';

type Props = {
  page: PageModel;
};

export default function WindowHeader({ page }: Props) {
  return (
    <div className={styles.header}>
      <label>{page.label}</label>
      <div className={styles['header-buttons']}>
        <label className={`${styles.minimize} windows-box-shadow`}></label>
        <label className={`windows-box-shadow`}>X</label>
      </div>
    </div>
  );
}
