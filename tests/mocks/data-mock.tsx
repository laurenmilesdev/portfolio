import ContactModel from '../../src/models/contact/contact';
import PageModel from '../../src/models/component-helpers/page';

export const contacts = [
  new ContactModel('GitHub', 'Contact description.', 'Contact value', 'github.com'),
  new ContactModel('LinkedIn', 'Contact description 2.', 'Contact value 2', 'linkedin.com'),
  new ContactModel('Resume', 'Contact description 3.', 'Contact value 3'),
  new ContactModel('None', 'Contact description 4.', 'Contact value 4'),
];

export const pages = [
  new PageModel('Page', <>Page</>),
  new PageModel('Page 2', <>Page</>, 'window-id', 'start-bar-button-id', 'menu-item-button-id'),
];
