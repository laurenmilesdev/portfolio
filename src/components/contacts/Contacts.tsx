import { Button, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ContactModel from '../../models/contact/contact';
import ContactConstants from '../../constants/contact';

type Props = {
  contacts: ContactModel[];
};

const icon = (name: string): JSX.Element =>
  name === ContactConstants.GITHUB ? (
    <GitHubIcon />
  ) : name === ContactConstants.LINKEDIN ? (
    <LinkedInIcon />
  ) : name === ContactConstants.RESUME ? (
    <PictureAsPdfIcon />
  ) : (
    <></>
  );

export default function Contacts({ contacts }: Props): JSX.Element {
  return (
    <>
      {contacts.map((contact: ContactModel, index: number) => (
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
