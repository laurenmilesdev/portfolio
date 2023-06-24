import Contacts from '../contact/Contacts';
import ThemeSwitch from '../theme-switch/ThemeSwitch';
import ContactType from '../../types/contact/contact';

import styles from './Footer.module.css';

type Props = {
  contacts: ContactType[];
  useDarkTheme: boolean;
  handleChange: (event: React.SyntheticEvent, theme: boolean) => void;
};

export default function Footer(props: Props) {
  return (
    <div className={`${styles.container} col-md-12`}>
      <Contacts contacts={props.contacts} />
      <ThemeSwitch useDarkTheme={props.useDarkTheme} handleThemeChange={props.handleChange} />
    </div>
  );
}
