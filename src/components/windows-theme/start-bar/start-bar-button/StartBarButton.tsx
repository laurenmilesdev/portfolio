import Image from 'next/image';
import { Button } from '@mui/material';
import WindowModel from '../../../../models/component-helpers/window';

import img from '../../../../../public/img/windows/ie.png';
import styles from './StartBarButton.module.css';

type Props = {
  window: WindowModel;
  index: number;
};

export default function StartBarButton({ window, index }: Props): JSX.Element {
  if (index === 0) return <></>;

  return (
    <Button className={`${styles.btn} windows-box-shadow`} id={window.startBarButtonId}>
      <div className={styles['btn-label']}>
        <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
        {window.title}
      </div>
    </Button>
  );
}
