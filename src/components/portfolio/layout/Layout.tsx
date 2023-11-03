import { Dispatch, SetStateAction } from 'react';
import { Container } from '@mui/material';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ContactModel from '../../../models/contact/contact';

import styles from './Layout.module.css';

type Props = {
  pageTitles: string[];
  pageTabValue: number;
  setPageTabValue: Dispatch<SetStateAction<number>>;
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<string>>;
  useWindowsTheme: boolean;
  children: React.ReactNode;
};

export const childrenContainerId = 'children-container';

export default function Layout({
  pageTitles,
  pageTabValue,
  setPageTabValue,
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  setTheme,
  useWindowsTheme,
  children,
}: Props): JSX.Element {
  return (
    <>
      <div className={styles.content}>
        <div className="col-md-2">
          <Navigation
            pageTitles={pageTitles}
            pageTabValue={pageTabValue}
            setPageTabValue={setPageTabValue}
          />
        </div>

        <div className="col-md-10">
          <Container id={childrenContainerId}>{children}</Container>
        </div>
      </div>

      {!useWindowsTheme && (
        <Footer
          contacts={contacts}
          useDarkTheme={useDarkTheme}
          setUseDarkTheme={setUseDarkTheme}
          setTheme={setTheme}
          setPageTabValue={setPageTabValue}
        />
      )}
    </>
  );
}
