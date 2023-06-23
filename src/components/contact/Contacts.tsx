import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import EmailIcon from '@mui/icons-material/Email';
import ContactType from '@/types/contact/contact';
import ContactTypeConstants from '../../constants/contact-type';

import styles from './Contacts.module.css';

type Props = {
  contacts: ContactType[];
};

const content = (contact: ContactType): JSX.Element => {
  const icon = getIcon(contact.name);

  return (
    <Button
      href={contact.url ?? ''}
      target="_blank"
      className="btn-primary"
      aria-label={`Link to ${contact.name} in new tab.`}
      id={`${contact.name}-btn`}
      key={contact.name}
    >
      {icon}
    </Button>
  );
};

export default function Contacts(props: Props): JSX.Element {
  return (
    <div className={`${styles.contacts} col-md-12`}>
      {props.contacts.map((contact: ContactType) => content(contact))}
    </div>
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
