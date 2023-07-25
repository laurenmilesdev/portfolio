import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button, Tooltip } from '@mui/material';

import imgWhite from '../../../../public/img/windows/windows-white.png';
import imgBlack from '../../../../public/img/windows/windows-black.png';
import styles from './WindowsThemeButton.module.css';

type Props = {
  useWindowsTheme: boolean;
  setUseWindowsTheme: Dispatch<SetStateAction<boolean>>;
  useDarkTheme: boolean;
};

export default function WindowsThemeButton({
  useWindowsTheme,
  setUseWindowsTheme,
  useDarkTheme,
}: Props): JSX.Element {
  return (
    <Tooltip title="take me back in time">
      <Button className=" btn-primary" onClick={() => setUseWindowsTheme(!useWindowsTheme)}>
        <Image src={useDarkTheme ? imgWhite : imgBlack} alt="Windows icon" className={styles.img} />
      </Button>
    </Tooltip>
  );
}
