import Image from 'next/image';
import { Button } from '@mui/material';
import PageModel from '../../../../models/component-helpers/page';

import img from '../../../../public/img/windows/ie.png';
import styles from './StartBarButton.module.css';

type Props = {
  page: PageModel;
  index: number;
};

export default function StartBarButton({ page, index }: Props) {
  if (index === 0) return null;

  return (
    <Button className={`${styles.btn} windows-box-shadow`} id={page.startBarButtonId} key={index}>
      <div className={styles['btn-label']}>
        <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
        {page.label}
      </div>
    </Button>
  );
}
