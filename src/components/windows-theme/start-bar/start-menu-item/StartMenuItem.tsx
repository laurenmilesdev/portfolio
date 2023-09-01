import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import WindowModel from '../../../../models/component-helpers/window';
import ThemeConstants from '../../../../constants/theme';
import { openCloseMenu, openCloseWindow, updateWindowThemeBgColor } from '../../../../utils/window';

import img from '../../../../../public/img/windows/ie.png';
import styles from './StartMenuItem.module.css';

type Props = {
  startMenuDivId: string;
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
  useLineStyle?: boolean;
  window?: WindowModel;
};

export const shutdownMenuItemLabelId = 'shutdown-menu-item';
export const shutdownLabelText = 'Shutdown';

export default function StartMenuItem({
  startMenuDivId,
  useDarkTheme,
  setTheme,
  useLineStyle = false,
  window = undefined,
}: Props): JSX.Element {
  if (window) {
    const className = useLineStyle ? styles.line : '';

    return (
      <li className={className}>
        <label
          className={styles['menu-item']}
          id={window.menuItemButtonId}
          onClick={() => openCloseWindow(window.windowId)}
        >
          <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
          {window.title}
        </label>
      </li>
    );
  }

  return (
    <li>
      <label
        className={styles['menu-item-shutdown']}
        id={shutdownMenuItemLabelId}
        onClick={() => {
          const theme = useDarkTheme ? ThemeConstants.DARK : ThemeConstants.LIGHT;

          setTheme(theme);
          updateWindowThemeBgColor(theme);
          openCloseMenu(startMenuDivId);
        }}
      >
        <Image
          width={30}
          height={30}
          className={styles['shutdown-icon']}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEUAAACGhobAwMB3d3eysrLMzMz4+PjX19eZmZnq6urn59ZNTU2WlpZCQkIzAGYAAIAAAAAzAMwAAP8A/////wBVVVX///99stlUAAAAAXRSTlMAQObYZgAAAAFiS0dEFnzRqBkAAAAHdElNRQfiBhoANBn4/QlFAAAAzUlEQVQ4y83S0Q6DIAwFUGmhYudEdP7/r+6CZEEnvm438emetBDpun+KQW5rQpibtXWOHJHlPedeRHqHQHhm+zXKyKCqMmRhfV53IEb0YUh1EBCIMRH7PIAphEREipgJX71iijER16tAGJ79EShAJrZ3gu4KLMuaCDtqgHVZkwnXAGdYVskzqD3hhRE3IKYV7QkhxHyKBvCDUiKxnsAV2NhrIR9Q9cgGgv8QkAKOfU0KOPeFpGe1g8uHVUgb7MTjAk2QyTjO7T6T2/oHeQPSrw8Qg6bkoQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo1MjoyNS0wNDowMOXPqxAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NTI6MjUtMDQ6MDCUkhOsAAAAAElFTkSuQmCC"
          alt=""
        />
        {shutdownLabelText}
      </label>
    </li>
  );
}
