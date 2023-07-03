import { Button, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ContactType from '../../types/contact/contact';
import ContactTypeConstants from '../../constants/contact-type';

type Props = {
  contacts: ContactType[];
};

const icon = (name: string): JSX.Element =>
  name === ContactTypeConstants.GITHUB ? (
    <GitHubIcon />
  ) : name === ContactTypeConstants.LINKEDIN ? (
    <LinkedInIcon />
  ) : name === ContactTypeConstants.RESUME ? (
    <PictureAsPdfIcon />
  ) : (
    <></>
  );

export default function Contacts({ contacts }: Props): JSX.Element {
  return (
    <>
      {contacts.map((contact: ContactType, index: number) => (
        <Tooltip title={contact.name} key={contact.name}>
          <Button
            href={contact.url ?? ''}
            target="_blank"
            className="btn-primary"
            id={`btn-${index}`}
          >
            {icon(contact.name)}
          </Button>
        </Tooltip>
      ))}
    </>
  );
}
