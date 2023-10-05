/* eslint-disable no-param-reassign */
import ThemeConstants from '../constants/theme';

export function openCloseMenu(id: string, showMenu: boolean) {
  const startMenu = document.getElementById(id);

  if (startMenu) {
    if (!showMenu) startMenu.style.display = 'block';
    else startMenu.style.display = 'none';
  }
}

export function updateWindowThemeBgColor(theme: string) {
  if (theme === ThemeConstants.WINDOWS) document.body.style.background = '#008080';
  else document.body.style.background = '';
}

export function openCloseWindow(windowId: string, startBarButtonId: string) {
  const window = document.getElementById(windowId);
  const startBarButton = document.getElementById(startBarButtonId);

  if (window && startBarButton) {
    const buttonVisible = checkVisibility(startBarButton);
    const windowVisible = checkVisibility(window);

    if (buttonVisible && !windowVisible) {
      showHideElement(window);
      removeWindowsBoxShadowClass(startBarButton);
    } else {
      showHideElement(startBarButton);
      showHideElement(window);
    }
  }
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

function checkVisibility(element: HTMLElement) {
  const { display } = element.style;

  return display === 'block';
}

function showHideElement(element: HTMLElement) {
  const visible = checkVisibility(element);

  if (visible) element.style.display = 'none';
  else element.style.display = 'block';

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
