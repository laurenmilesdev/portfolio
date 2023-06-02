import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import ContactType from '@/types/contact/contact';
import * as ContactTypeConstant from '@/constants/contact-type';

import styles from './Contact.module.css';

type Props = {
  contact: ContactType;
};

export default function Contact(props: Props) {
  return (
    <li key={props.contact.name} className={styles.list}>
      <div className={`${styles['list-content']} col-md-12`}>
        <div className={styles['list-icon']}>{getIcon(props.contact.name)}</div>
        <div>
          {props.contact.url ? (
            <Link href={props.contact.url} target="_blank">
              {props.contact.value}
            </Link>
          ) : props.contact.name === ContactTypeConstant.resume ? (
            <Link href={'/files/Lauren_Miles_Resume.pdf'} target="_blank">
              {props.contact.value}
            </Link>
          ) : (
            props.contact.value
          )}
        </div>
      </div>
    </li>
  );
}

function getIcon(name: string) {
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
