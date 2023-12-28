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
        <div className={`${styles.title} ${homePage ? 'col-md-6' : 'col-md-4'}`} id={titleDivId}>
          {title}
        </div>

        <div
          className={`${homePage ? styles['home-description'] : styles.description} ${
            homePage ? 'col-md-6' : 'col-md-8'
          }`}
          id={contentDivId}
        >
          {page.component}
        </div>
      </div>
    </Fade>
  );
}
