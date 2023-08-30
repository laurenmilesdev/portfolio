import { Button } from '@mui/material';
import { openCloseMenu } from '../../../../utils/window';

import styles from './StartButton.module.css';

export const buttonId = 'windows-start-btn';

export default function StartButton(): JSX.Element {
  return (
    <Button
      className={`${styles['start-btn']} windows-box-shadow`}
      id={buttonId}
      onClick={() => openCloseMenu()}
    ></Button>
  );
}
