import ThemeConstants from '@/constants/theme';

export function a11yProps(index: number): object {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export function getTheme(useDarkTheme: boolean) {
  return useDarkTheme ? ThemeConstants.Dark : ThemeConstants.Light;
}
