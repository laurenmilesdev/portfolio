import { Dispatch, SetStateAction } from 'react';
import { Container } from '@mui/material';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ContactModel from '../../../models/contact/contact';

type Props = {
  pageValue: number;
  pageTitles: string[];
  setPageValue: Dispatch<SetStateAction<number>>;
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  setTheme: Dispatch<SetStateAction<string>>;
  useWindowsTheme: boolean;
  children: React.ReactNode;
};

export const childrenContainerId = 'children-container';

export default function Layout({
  pageValue,
  pageTitles,
  setPageValue,
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
        pageValue={pageValue}
        pageTitles={pageTitles}
        setPageValue={setPageValue}
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
