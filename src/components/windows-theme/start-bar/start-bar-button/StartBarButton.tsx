import Image from 'next/image';
import { Button } from '@mui/material';
import WindowModel from '../../../../models/component-helpers/window';
import { minimizeMaximizeWindow } from '../../../../utils/window';

import img from '../../../../../public/img/windows/ie.png';
import styles from './StartBarButton.module.css';

type Props = { menuItemTitle: string; menuItemWindow: WindowModel };

export default function StartBarButton({ menuItemTitle, menuItemWindow }: Props): JSX.Element {
  const title = menuItemTitle.length > 7 ? `${menuItemTitle.substring(0, 7)}...` : menuItemTitle;

  return (
    <Button
      className={`${styles.btn} inverse-windows-box-shadow`}
      id={menuItemWindow.startBarButtonId}
      title={menuItemTitle}
      onClick={() =>
        minimizeMaximizeWindow(menuItemWindow.windowId, menuItemWindow.startBarButtonId)
      }
    >
      <div className={styles['btn-label']}>
        <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
        {title}
      </div>
    </Button>
  );
}
