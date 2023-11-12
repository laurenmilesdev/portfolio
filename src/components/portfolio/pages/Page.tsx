import Fade from '@mui/material/Fade';
import PageModel from '../../../models/component-helpers/page';

import styles from './Page.module.css';

type Props = {
  pageTabValue: number;
  page: PageModel;
};

export const titleDivId = 'page-title';
export const contentDivId = 'page-content';

export default function Page({ page }: Props) {
  return (
    <Fade in={true}>
      <div className={styles['page-container']}>
        <div className={`${styles.title} col-md-12`} id={titleDivId}>
          <h3>{page.subtitle}</h3>
        </div>

        <div className={`col-md-12`} id={contentDivId}>
          {page.component}
        </div>
      </div>
    </Fade>
  );
}
