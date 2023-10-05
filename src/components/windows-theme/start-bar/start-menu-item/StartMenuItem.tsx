import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import MenuItemModel from '../../../../models/component-helpers/menu-item';
import ThemeConstants from '../../../../constants/theme';
import { openCloseWindow, updateWindowThemeBgColor } from '../../../../utils/window';

import img from '../../../../../public/img/windows/ie.png';
import styles from './StartMenuItem.module.css';

type Props = {
  showStartMenu: boolean;
  setShowStartMenu: Dispatch<SetStateAction<boolean>>;
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
  useLineStyle?: boolean;
  menuItem?: MenuItemModel;
};

export const shutdownMenuItemLabelId = 'shutdown-menu-item';
export const shutdownLabelText = 'Shutdown';

export default function StartMenuItem({
  showStartMenu,
  setShowStartMenu,
  useDarkTheme,
  setTheme,
  useLineStyle = false,
  menuItem = undefined,
}: Props): JSX.Element {
  const internetExplorerImage = (
    <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
  );
  const shutdownImage = (
    <Image
      width={30}
      height={30}
      className={styles['shutdown-icon']}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEUAAACGhobAwMB3d3eysrLMzMz4+PjX19eZmZnq6urn59ZNTU2WlpZCQkIzAGYAAIAAAAAzAMwAAP8A/////wBVVVX///99stlUAAAAAXRSTlMAQObYZgAAAAFiS0dEFnzRqBkAAAAHdElNRQfiBhoANBn4/QlFAAAAzUlEQVQ4y83S0Q6DIAwFUGmhYudEdP7/r+6CZEEnvm438emetBDpun+KQW5rQpibtXWOHJHlPedeRHqHQHhm+zXKyKCqMmRhfV53IEb0YUh1EBCIMRH7PIAphEREipgJX71iijER16tAGJ79EShAJrZ3gu4KLMuaCDtqgHVZkwnXAGdYVskzqD3hhRE3IKYV7QkhxHyKBvCDUiKxnsAV2NhrIR9Q9cgGgv8QkAKOfU0KOPeFpGe1g8uHVUgb7MTjAk2QyTjO7T6T2/oHeQPSrw8Qg6bkoQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo1MjoyNS0wNDowMOXPqxAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NTI6MjUtMDQ6MDCUkhOsAAAAAElFTkSuQmCC"
      alt=""
    />
  );

  function handleWindowOpen(windowId: string, startBarButtonId: string) {
    openCloseWindow(windowId, startBarButtonId);
    setShowStartMenu(!showStartMenu);
  }

  function handleShutdown() {
    const theme = useDarkTheme ? ThemeConstants.DARK : ThemeConstants.LIGHT;

    setTheme(theme);
    setShowStartMenu(!showStartMenu);
  }

  return (
    <li className={useLineStyle ? styles.line : ''}>
      <label
        className={menuItem ? styles['menu-item'] : styles['menu-item-shutdown']}
        id={menuItem ? menuItem.menuItemButtonId : shutdownMenuItemLabelId}
        onClick={() => {
          if (menuItem && menuItem.window)
            handleWindowOpen(menuItem.window.windowId, menuItem.window.startBarButtonId);
          else handleShutdown();
        }}
      >
        {menuItem ? internetExplorerImage : shutdownImage}
        {menuItem ? menuItem.title : shutdownLabelText}
      </label>
    </li>
  );
}
