import Image from 'next/image';
import styles from './StartBarButton.module.css';
// eslint-disable-next-line import/order
import { Button } from '@mui/material';
import WindowModel from '../../../../models/component-helpers/window';
import { minimizeMaximizeWindow } from '../../../../utils/window';

import img from '../../../../../public/img/windows/ie.png';

type Props = { window: WindowModel };

export default function StartBarButton({ window }: Props): JSX.Element {
  const title = window.title.length > 7 ? `${window.title.substring(0, 7)}...` : window.title;

  return (
    <Button
      className={`${styles.btn} inverse-windows-box-shadow`}
      id={window.startBarButtonId}
      title={window.title}
      onClick={() => minimizeMaximizeWindow(window.windowId, window.startBarButtonId)}
    >
      <div className={styles['btn-label']}>
        <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
        {title}
      </div>
    </Button>
  );
}
