import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button, Tooltip } from '@mui/material';
import ThemeConstants from '../../../../constants/theme';
import { updateWindowThemeBgColor } from '../../../../utils/window';

import imgWhite from '../../../../../public/img/windows/windows-white.png';
import imgBlack from '../../../../../public/img/windows/windows-black.png';
import styles from './WindowsThemeButton.module.css';

type Props = { useDarkTheme: boolean; setTheme: Dispatch<SetStateAction<string>> };

export const buttonId = 'windows-theme-btn';
export const whiteWindowsImageId = 'windows-image-white';
export const blackWindowsImageId = 'windows-image-black';

export default function WindowsThemeButton({ useDarkTheme, setTheme }: Props): JSX.Element {
  return (
    <Tooltip title="take me back in time">
      <Button
        className=" btn-primary"
        onClick={() => {
          setTheme(ThemeConstants.WINDOWS);
          updateWindowThemeBgColor(ThemeConstants.WINDOWS);
        }}
        id={buttonId}
      >
        <Image
          src={useDarkTheme ? imgWhite : imgBlack}
          alt="Windows icon"
          className={styles.img}
          id={useDarkTheme ? whiteWindowsImageId : blackWindowsImageId}
        />
      </Button>
    </Tooltip>
  );
}
