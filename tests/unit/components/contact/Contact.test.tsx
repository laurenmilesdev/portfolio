import GitHubIcon from '@mui/icons-material/GitHub';
import { getIcon } from '../../../../src/components/contact/Contact';
import ContactTypeConstants from '../../../../src/constants/contact-type';

describe('getIcon', () => {
  it('renders returns github icon', () => {
    const response = getIcon(ContactTypeConstants.GITHUB);
    const expectedResponse = <GitHubIcon />;

    expect(response).toEqual(expectedResponse);
  });
});
