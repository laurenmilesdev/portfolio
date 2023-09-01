import { Container } from '@mui/material';
import Fade from '@mui/material/Fade';
import Navigation from '../navigation/Navigation';

import styles from './Layout.module.css';

type Props = {
  pageValue: number;
  pageTitles: string[];
  handlePageChange: (event: React.SyntheticEvent, newValue: number) => void;
  useWindowsTheme: boolean;
  children: React.ReactNode;
};

export const titleDivId = 'title';
export const contentDivId = 'content';

export default function Layout({
  pageValue,
  pageTitles,
  handlePageChange,
  useWindowsTheme,
  children,
}: Props): JSX.Element {
  // Hides Home page title
  const title = pageValue !== 0 ? pageTitles[pageValue] : undefined;

  return (
    <>
      <Navigation
        pageValue={pageValue}
        pageTitles={pageTitles}
        handleChange={handlePageChange}
        useWindowsTheme={useWindowsTheme}
      />

      <Fade in={true}>
        <Container>
          <div className={styles.container}>
            {title && (
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
