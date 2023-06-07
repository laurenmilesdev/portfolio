import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import ContactType from '@/types/contact/contact';
import * as ContactTypeConstant from '@/constants/contact-type';

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
            {props.contact.url ? (
              <Button href={props.contact.url} target="_blank" className="btn-primary-light">
                {icon}
                {props.contact.value}
              </Button>
            ) : props.contact.name === ContactTypeConstant.resume ? (
              <Button
                href={'/files/Lauren_Miles_Resume.pdf'}
                target="_blank"
                className="btn-primary-light"
              >
                {icon}
                {props.contact.value}
              </Button>
            ) : (
              props.contact.value
            )}
          </div>
        </div>
      </li>
    )
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
