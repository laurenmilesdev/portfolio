import Fade from '@mui/material/Fade';
import PageModel from '../../../models/component-helpers/page';

import styles from './Page.module.css';

type Props = {
  pageTabValue: number;
  page: PageModel;
};

export const titleDivId = 'page-title';
export const contentDivId = 'page-content';

export default function Page({ pageTabValue, page }: Props) {
  const homePage = pageTabValue === 0;
  const title = homePage ? <h1>{page.subtitle}</h1> : <h3>{page.subtitle}</h3>;

  return (
    <Fade in={true}>
      <div className={`${styles.container}`}>
        <div className={`${homePage ? styles['home-title'] : styles.title}`} id={titleDivId}>
          {title}
        </div>

        <div
          className={`${homePage ? styles['home-description'] : styles.description}`}
          id={contentDivId}
        >
          {page.component}
        </div>
      </div>
    </Fade>
  );
}
