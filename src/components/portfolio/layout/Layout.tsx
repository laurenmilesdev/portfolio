import { Dispatch, SetStateAction } from 'react';
import { Container } from '@mui/material';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ContactModel from '../../../models/contact/contact';

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
      <Navigation
        pageTitles={pageTitles}
        pageTabValue={pageTabValue}
        setPageTabValue={setPageTabValue}
        useWindowsTheme={useWindowsTheme}
      />

      <Container id={childrenContainerId}>{children}</Container>

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
