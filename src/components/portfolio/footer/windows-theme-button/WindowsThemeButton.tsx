import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { Button, Tooltip } from '@mui/material';
import ThemeConstants from '../../../../constants/theme';
import { updateWindowThemeBgColor } from '../../../../utils/window';

import imgWhite from '../../../../../public/img/windows/windows-white.png';
import imgBlack from '../../../../../public/img/windows/windows-black.png';
import styles from './WindowsThemeButton.module.css';

type Props = {
  useDarkTheme: boolean;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const windowsThemeButtonId = 'windows-theme-btn';
export const windowsThemeWhiteImageId = 'windows-image-white';
export const windowsThemeBlackImageId = 'windows-image-black';

export default function WindowsThemeButton({ useDarkTheme, setTheme }: Props): JSX.Element {
  return (
    <Tooltip title="take me back in time">
      <Button
        className=" btn-primary"
        onClick={() => {
          setTheme(ThemeConstants.WINDOWS);
          updateWindowThemeBgColor(ThemeConstants.WINDOWS);
        }}
        id={windowsThemeButtonId}
      >
        <Image
          src={useDarkTheme ? imgWhite : imgBlack}
          alt="Windows icon"
          className={styles.img}
          id={useDarkTheme ? windowsThemeWhiteImageId : windowsThemeBlackImageId}
        />
      </Button>
    </Tooltip>
  );
}
