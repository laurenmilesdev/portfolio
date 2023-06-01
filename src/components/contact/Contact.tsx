import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import ContactType from '@/types/contact';
import * as ContactTypeConstant from '@/constants/contact-type';

import styles from './Contact.module.css';

type Props = {
  description: string;

  contacts: ContactType[];
};

const contactItem = (contact: ContactType) => (
  <li key={contact.name} className={styles.list}>
    <div className={`${styles['list-content']} col-md-12`}>
      <div className={styles['list-icon']}>{getIcon(contact.name)}</div>
      <div>{contact.url ? <Link href={contact.url}>{contact.value}</Link> : contact.value}</div>
    </div>
  </li>
);

export default function Contact(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <div className="col-md-12 mb-3">{props.description}</div>
      <div className="col-md-12">
        <ul>
          {props.description && props.contacts.map((contact: ContactType) => contactItem(contact))}
        </ul>
      </div>
    </div>
  );
}

function getIcon(name: string) {
  if (name === ContactTypeConstant.email) {
    return <EmailIcon />;
  }

  if (name === ContactTypeConstant.gitHub) {
    return <GitHubIcon />;
  }

  if (name === ContactTypeConstant.linkedIn) {
    return <LinkedInIcon />;
  }

  if (name === ContactTypeConstant.resume) {
    return <PictureAsPdfIcon />;
  }
}
