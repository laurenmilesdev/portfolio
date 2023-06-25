import Contacts from '../contact/Contacts';
import ThemeSwitch from '../theme-switch/ThemeSwitch';
import ContactType from '../../types/contact/contact';

import styles from './Footer.module.css';

type Props = {
  contacts: ContactType[];
};

export default function Footer({ contacts }: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <Contacts contacts={contacts} />
      <ThemeSwitch />
    </div>
  );
}
