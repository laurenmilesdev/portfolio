import { Button } from '@mui/material';

import styles from './StartButton.module.css';

export default function StartButton() {
  return (
    <Button className={`${styles['start-btn']} windows-box-shadow`} id="windows-start-btn"></Button>
  );
}
