import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

import styles from './StartButton.module.css';

type Props = {
  showStartMenu: boolean;
  setShowStartMenu: Dispatch<SetStateAction<boolean>>;
};

export const startButtonId = 'windows-start-btn';

export default function StartButton({ showStartMenu, setShowStartMenu }: Props): JSX.Element {
  return (
    <Button
      className={`${styles['start-btn']} windows-box-shadow`}
      id={startButtonId}
      onClick={() => setShowStartMenu(!showStartMenu)}
    ></Button>
  );
}
