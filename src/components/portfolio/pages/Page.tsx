import Fade from '@mui/material/Fade';
import PageModel from '../../../models/component-helpers/page';
import styles from './Page.module.css';

type Props = {
  pageTabValue: number;
  page: PageModel;
};

export const titleDivId = 'title';
export const contentDivId = 'content';

export default function Page({ pageTabValue, page }: Props) {
  return (
    <Fade in={true}>
      <div className={styles.container}>
        {/* Does not render title if Home page */}
        {pageTabValue !== 0 && (
          <div className={`${styles.title} col-md-12 pb-3`} id={titleDivId}>
            <h1>{page.title}</h1>
          </div>
        )}

        <div className="col-md-12" id={contentDivId}>
          {page.component}
        </div>
      </div>
    </Fade>
  );
}
