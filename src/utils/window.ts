/* eslint-disable no-param-reassign */
import ThemeConstants from '../constants/theme';

export function openCloseMenu(id: string) {
  const startMenu = document.getElementById(id);

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

export function openCloseWindow(windowId: string) {
  const window = document.getElementById(windowId);

  if (window) showHideElement(window);
}

function showHideElement(element: HTMLElement) {
  const visible = element.checkVisibility();

  if (!visible) element.style.display = 'block';
  else element.style.display = 'none';
}
