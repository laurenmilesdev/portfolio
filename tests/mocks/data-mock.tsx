import ContactModel from '../../src/models/contact/contact';
import PageModel from '../../src/models/component-helpers/page';
import MenuItemModel from '../../src/models/component-helpers/menu-item';
import WindowModel from '../../src/models/component-helpers/window';
import DesktopItemModel from '../../src/models/component-helpers/desktop-item';

export const contacts = [
  new ContactModel('GitHub', 'Contact description.', 'Contact value', 'github.com'),
  new ContactModel('LinkedIn', 'Contact description 2.', 'Contact value 2', 'linkedin.com'),
  new ContactModel('Resume', 'Contact description 3.', 'Contact value 3'),
  new ContactModel('None', 'Contact description 4.', 'Contact value 4'),
];

export const pages = [new PageModel('Page', <>Page</>), new PageModel('Page 2', <>Page</>)];

const menuItemsRawData = [
  {
    title: 'Test 1',
    menuItemButtonId: 'test1-menu-item-btn',
    externalUrl: null,
    window: {
      windowId: 'test1-window',
      startBarButtonId: 'test1-start-bar-btn',
      isInternetExplorerWindow: true,
      addressBarUrl: 'https://test1.com/',
      heightPercentage: 50,
      widthPercentage: 50,
    },
  },
  {
    title: 'Test 2',
    menuItemButtonId: 'test2-menu-item-btn',
    externalUrl: null,
    window: {
      windowId: 'test2-window',
      startBarButtonId: 'test2-start-bar-btn',
      isInternetExplorerWindow: true,
      addressBarUrl: 'https://test2.com/',
      heightPercentage: 50,
      widthPercentage: 50,
    },
  },
  {
    title: 'Test 3',
    menuItemButtonId: 'test3-menu-item-btn',
    externalUrl: 'https://test3.com/',
    window: null,
  },
];

export const menuItems = menuItemsRawData.map(
  (menuItem) =>
    new MenuItemModel(
      menuItem.title,
      menuItem.menuItemButtonId,
      menuItem.externalUrl ?? '',
      menuItem.window
        ? new WindowModel(
            menuItem.title,
            menuItem.window.windowId,
            menuItem.window.startBarButtonId,
            menuItem.window.isInternetExplorerWindow,
            menuItem.window.heightPercentage,
            menuItem.window.widthPercentage,
            menuItem.window.addressBarUrl
          )
        : undefined
    )
);

export const windows = menuItems.map((menuItem) => {
  if (menuItem.window) {
    return new WindowModel(
      menuItem.title,
      menuItem.window.windowId,
      menuItem.window.startBarButtonId,
      menuItem.window.isInternetExplorerWindow,
      menuItem.window.heightPercentage,
      menuItem.window.widthPercentage,
      menuItem.window.addressBarUrl
    );
  }
});

export const desktopItems = [
  new DesktopItemModel('label', <></>, 'url.com'),
  new DesktopItemModel('label2', <></>, 'url.com/2'),
  new DesktopItemModel('label3', <></>, 'url.com/3'),
];
