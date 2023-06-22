import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EmailIcon from '@mui/icons-material/Email';
import ContactType from '@/types/contact/contact';
import ContactTypeConstants from '../../constants/contact-type';

import styles from './Contact.module.css';

type Props = {
  contact: ContactType;
};

export default function Contact(props: Props): JSX.Element {
  const icon = getIcon(props.contact.name);

  return (
    props.contact && (
      <li key={props.contact.name} className={styles.list}>
        <div className={`${styles['list-content']} col-md-12`}>
          <div>
            <Button
              href={props.contact.url ?? ''}
              target="_blank"
              className="btn-primary"
              aria-label={`Link to ${props.contact.name} in new tab.`}
              id={`${props.contact.name}-btn`}
            >
              <div className={styles['list-icon']}>{icon}</div>
              {props.contact.name}
            </Button>
          </div>
        </div>
      </li>
    )
  );
}

export function getIcon(name: string) {
  return name === ContactTypeConstants.GITHUB ? (
    <GitHubIcon />
  ) : name === ContactTypeConstants.LINKEDIN ? (
    <LinkedInIcon />
  ) : name === ContactTypeConstants.RESUME ? (
    <PictureAsPdfIcon />
  ) : (
    <EmailIcon />
  );
}
