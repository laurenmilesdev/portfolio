import { Button, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ContactModel from '../../../../models/contact/contact';
import ContactConstants from '../../../../constants/contact';

type Props = {
  contacts: ContactModel[];
};

const icons = {
  [ContactConstants.GITHUB]: <GitHubIcon />,
  [ContactConstants.LINKEDIN]: <LinkedInIcon />,
  [ContactConstants.RESUME]: <PictureAsPdfIcon />,
};

export default function Contacts({ contacts }: Props): JSX.Element {
  return (
    <>
      {contacts.map((contact: ContactModel) => (
        <Tooltip title={contact.name} key={contact.name}>
          <Button
            href={contact.url ?? ''}
            target="_blank"
            className="btn-primary"
            id={contact.name.toLocaleLowerCase()}
          >
            {icons[contact.name]}
          </Button>
        </Tooltip>
      ))}
    </>
  );
}
