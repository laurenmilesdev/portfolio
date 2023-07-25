import { Dispatch, SetStateAction, useState } from 'react';
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
  useWindowsTheme: boolean;
  setUseWindowsTheme: Dispatch<SetStateAction<boolean>>;
};

export default function Footer({
  pages,
  contacts,
  useWindowsTheme,
  setUseWindowsTheme,
}: Props): JSX.Element {
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(true);

  return useWindowsTheme ? (
    <WindowsStartBar
      pages={pages}
      useWindowsTheme={useWindowsTheme}
      setUseWindowsTheme={setUseWindowsTheme}
    />
  ) : (
    <div className={`${styles.container} col-md-12`}>
      {/* Hiding button until functionality is complete so new changes can be deployed */}

      {/* <WindowsThemeButton
        useWindowsTheme={useWindowsTheme}
        setUseWindowsTheme={setUseWindowsTheme}
        useDarkTheme={useDarkTheme}
      /> */}
      <Contacts contacts={contacts} />
      <ThemeSwitch useDarkTheme={useDarkTheme} setUseDarkTheme={setUseDarkTheme} />
    </div>
  );
}
