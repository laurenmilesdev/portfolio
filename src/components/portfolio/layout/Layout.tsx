import { Dispatch, SetStateAction } from 'react';
import { Container } from '@mui/material';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';
import ContactModel from '../../../models/contact/contact';

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
  return (
    <>
      <Navigation
        pageValue={pageValue}
        pageTitles={pageTitles}
        handleChange={handlePageChange}
        useWindowsTheme={useWindowsTheme}
      />

      <Container>{children}</Container>

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
