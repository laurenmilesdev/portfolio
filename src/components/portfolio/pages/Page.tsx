import Fade from '@mui/material/Fade';
import styles from './Page.module.css';

type Props = { pageValue: number; pageTitle: string; pageComponent: JSX.Element };

export const titleDivId = 'title';
export const contentDivId = 'content';

export default function Page({ pageValue, pageTitle, pageComponent }: Props) {
  return (
    <Fade in={true}>
      <div className={styles.container}>
        {pageValue !== 0 && (
          <div className={`${styles.title} col-md-12 pb-3`} id={titleDivId}>
            <h1>{pageTitle}</h1>
          </div>
        )}

        <div className="col-md-12" id={contentDivId}>
          {pageComponent}
        </div>
      </div>
    </Fade>
  );
}
