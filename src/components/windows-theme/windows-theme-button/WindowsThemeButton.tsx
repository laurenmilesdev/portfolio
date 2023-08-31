import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button, Tooltip } from '@mui/material';
import ThemeConstants from '../../../constants/theme';

import imgWhite from '../../../../public/img/windows/windows-white.png';
import imgBlack from '../../../../public/img/windows/windows-black.png';
import styles from './WindowsThemeButton.module.css';

type Props = {
  setTheme: Dispatch<SetStateAction<string>>;
  useDarkTheme: boolean;
};

export default function WindowsThemeButton({ setTheme, useDarkTheme }: Props): JSX.Element {
  return (
    <Tooltip title="take me back in time">
      <Button
        className=" btn-primary"
        onClick={() => setTheme(ThemeConstants.WINDOWS)}
        id="windows-theme-btn"
      >
        <Image src={useDarkTheme ? imgWhite : imgBlack} alt="Windows icon" className={styles.img} />
      </Button>
    </Tooltip>
  );
}
