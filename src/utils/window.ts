import ThemeConstants from '../constants/theme';

export function openCloseMenu() {
  const startMenu = document.getElementById('start-menu');

  if (startMenu) {
    const visible = startMenu.checkVisibility();

    if (visible) startMenu.style.display = 'none';
    else startMenu.style.display = 'block';
  }
}

export function updateWindowThemeBgColor(theme: string) {
  if (theme === ThemeConstants.WINDOWS) document.body.style.background = '#008080';
  else document.body.style.background = '';
}
