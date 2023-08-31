import { Dispatch, SetStateAction } from 'react';
import WindowsStartBar from '../windows-theme/start-bar/StartBar';
import WindowsThemeButton from '../windows-theme/windows-theme-button/WindowsThemeButton';
import Contacts from '../contacts/Contacts';
import ThemeSwitch from '../theme-switch/ThemeSwitch';
import ContactModel from '../../models/contact/contact';
import PageModel from '../../models/component-helpers/page';

import styles from './Footer.module.css';

type Props = {
  pages: PageModel[];
  contacts: ContactModel[];
  useDarkTheme: boolean;
  setUseDarkTheme: Dispatch<SetStateAction<boolean>>;
  useWindowsTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export default function Footer({
  pages,
  contacts,
  useDarkTheme,
  setUseDarkTheme,
  useWindowsTheme,
  setTheme,
}: Props): JSX.Element {
  return useWindowsTheme ? (
    <WindowsStartBar pages={pages} useDarkTheme={useDarkTheme} setTheme={setTheme} />
  ) : (
    <div className={`${styles.container} col-md-12`}>
      <WindowsThemeButton setTheme={setTheme} useDarkTheme={useDarkTheme} />

      <Contacts contacts={contacts} />

      <ThemeSwitch
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        setTheme={setTheme}
      />
    </div>
  );
}
