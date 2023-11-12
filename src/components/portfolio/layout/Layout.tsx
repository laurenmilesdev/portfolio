import { Dispatch, SetStateAction } from 'react';
import TickerTape from '../ticker-tape/TickerTape';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ContactModel from '../../../models/contact/contact';
import TickerTapeConstants from '../../../constants/ticker-tape';

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
  openToWork: boolean;
  children: React.ReactNode;
};

export const navigationDivId = 'navigation';
export const childrenContainerId = 'children-container';
export const footerDivId = 'footer';

export default function Layout({
  pageTitles,
  pageTabValue,
  setPageTabValue,
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  setTheme,
  useWindowsTheme,
  openToWork,
  children,
}: Props): JSX.Element {
  return (
    <>
      {openToWork && <TickerTape text={TickerTapeConstants.OPEN_TO_WORK} />}

      <div className="d-flex flex-row">
        <div className={`${styles['nav-container']}`} id={navigationDivId}>
          <Navigation
            pageTitles={pageTitles}
            pageTabValue={pageTabValue}
            setPageTabValue={setPageTabValue}
          />
        </div>

        <div className={`${styles['children-container']}`} id={childrenContainerId}>
          {children}
        </div>
      </div>

      {!useWindowsTheme && (
        <div className={`col-md-12`} id={footerDivId}>
          <Footer
            contacts={contacts}
            useDarkTheme={useDarkTheme}
            setUseDarkTheme={setUseDarkTheme}
            setTheme={setTheme}
            setPageTabValue={setPageTabValue}
          />
        </div>
      )}
    </>
  );
}
