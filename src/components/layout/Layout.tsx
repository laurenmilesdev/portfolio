import { Container } from '@mui/material';
import Fade from '@mui/material/Fade';
import Navigation from '../navigation/Navigation';

import styles from './Layout.module.css';

type Props = {
  pageValue: number;
  pageNavLabels: string[];
  pageTitles: string[];
  handlePageChange: (event: React.SyntheticEvent, newValue: number) => void;
  children: React.ReactNode;
};

export const titleDivId = 'title';
export const contentDivId = 'content';

export default function Layout({
  pageValue,
  pageNavLabels,
  pageTitles,
  handlePageChange,
  children,
}: Props): JSX.Element {
  const title = pageTitles[pageValue];

  return (
    <>
      <Navigation
        pageValue={pageValue}
        pageNavLabels={pageNavLabels}
        handleChange={handlePageChange}
      />

      <Fade in={true}>
        <Container>
          <div className={styles.container}>
            {title !== '' && (
              <div className={`${styles.title} col-md-12 pb-3`} id={titleDivId}>
                <h1>{title}</h1>
              </div>
            )}

            <div className="col-md-12" id={contentDivId}>
              {children}
            </div>
          </div>
        </Container>
      </Fade>
    </>
  );
}
