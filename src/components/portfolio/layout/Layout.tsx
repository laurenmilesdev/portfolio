import { Dispatch, SetStateAction } from 'react';
import { Container } from '@mui/material';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ContactModel from '../../../models/contact/contact';

import styles from './Layout.module.css';

type Props = {
  pageValue: number;
  pageTitles: string[];
  handlePageChange: (event: React.SyntheticEvent, newValue: number) => void;
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<string>>;
  useWindowsTheme: boolean;
  children: React.ReactNode;
};

export const titleDivId = 'title';
export const contentDivId = 'content';

export default function Layout({
  pageValue,
  pageTitles,
  handlePageChange,
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  setTheme,
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

      {!useWindowsTheme && (
        <Footer
          contacts={contacts}
          useDarkTheme={useDarkTheme}
          setUseDarkTheme={setUseDarkTheme}
          setTheme={setTheme}
        />
      )}
    </>
  );
}
