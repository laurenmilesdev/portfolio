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

export function openCloseWindow(windowId: string, startBarButtonId: string, startMenuId?: string) {
  const window = document.getElementById(windowId);
  const startBarButton = document.getElementById(startBarButtonId);

  if (window && startBarButton) {
    showHideElement(window);
    showHideElement(startBarButton);
  }

  if (startMenuId) openCloseMenu(startMenuId);
}

export function minimizeMaximizeWindow(windowId: string, startBarButtonId: string) {
  const window = document.getElementById(windowId);
  const startBarButton = document.getElementById(startBarButtonId);

  if (window && startBarButton) {
    const windowVisible = showHideElement(window);

    if (windowVisible) removeInverseWindowsBoxShadowClass(startBarButton);
    else removeWindowsBoxShadowClass(startBarButton);
  }
}

function showHideElement(element: HTMLElement) {
  const visible = element.checkVisibility();

  if (!visible) element.style.display = 'block';
  else element.style.display = 'none';

  return visible;
}

function removeWindowsBoxShadowClass(button: HTMLElement) {
  button.classList.remove('windows-box-shadow');
  button.classList.add('inverse-windows-box-shadow');
}

function removeInverseWindowsBoxShadowClass(button: HTMLElement) {
  button.classList.remove('inverse-windows-box-shadow');
  button.classList.add('windows-box-shadow');
}
