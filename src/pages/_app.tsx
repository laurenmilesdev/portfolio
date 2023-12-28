import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import Data from '../../data.json';
import Home from '../components/portfolio/pages/home/Home';
import About from '../components/portfolio/pages/about/About';
import Projects from '../components/portfolio/pages/projects/Projects';
import Resume from '../components/portfolio/pages/resume/Resume';
import Layout from '../components/portfolio/layout/Layout';
import WindowsThemeLayout from '../components/windows-theme/layout/Layout';
import Window from '../components/windows-theme/window/Window';
import HelpWindow from '../components/windows-theme/help-window/HelpWindow';
import PageModel from '../models/component-helpers/page';
import ContactModel from '../models/contact/contact';
import DesktopItemModel from '../models/component-helpers/desktop-item';
import ThemeConstants from '../constants/theme';
import WindowConstants from '../constants/window';
import { updateWindowThemeBgColor } from '../utils/window';

export default function App({ Component, pageProps }: AppProps) {
  const [pageTabValue, setPageTabValue] = useState<number>(0);
  const [helpTabValue, setHelpTabValue] = useState<number>(0);
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>(
    useDarkTheme ? ThemeConstants.DARK : ThemeConstants.LIGHT
  );
  const useWindowsTheme = theme === ThemeConstants.WINDOWS;

  const pages: PageModel[] = [
    new PageModel(
      Data.home.title,
      <Home description={Data.home.description} />,
      Data.home.subtitle
    ),
    new PageModel(
      Data.about.title,
      <About description={Data.about.description} />,
      Data.about.subtitle
    ),
    new PageModel(
      Data.projects.title,
      <Projects description={Data.projects.description} projects={Data.projects.projects} />,
      Data.projects.subtitle
    ),
    new PageModel(
      Data.resume.title,
      <Resume description={Data.resume.description} />,
      Data.resume.subtitle
    ),
  ];
  const desktopItems = Data.contacts.map(
    (contact) =>
      new DesktopItemModel(
        contact.name,
        <Image width={50} height={50} src={contact.imgSrc} alt={contact.imgDescription} />,
        contact.url
      )
  );

  const portfolioLayout = (
    <Layout
      pageTitles={pages.map((page: PageModel) => page.title)}
      pageTabValue={pageTabValue}
      setPageTabValue={setPageTabValue}
      contacts={Data.contacts as ContactModel[]}
      useDarkTheme={useDarkTheme}
      setUseDarkTheme={setUseDarkTheme}
      setTheme={setTheme}
      useWindowsTheme={useWindowsTheme}
      openToWork={Data.openToWork}
    >
      <Component {...pageProps} pages={pages} pageTabValue={pageTabValue} />
    </Layout>
  );
  const windowsThemeLayout = (
    <WindowsThemeLayout
      desktopItems={desktopItems}
      menuItems={Data.menuItems}
      useDarkTheme={useDarkTheme}
      setTheme={setTheme}
      setPageTabValue={setPageTabValue}
    />
  );

  const windowContent: any = {
    [WindowConstants.PORTFOLIO_WINDOW_WINDOW_ID]: portfolioLayout,
    [WindowConstants.HELP_WINDOW_WINDOW_ID]: (
      <HelpWindow helpTabValue={helpTabValue} setHelpTabValue={setHelpTabValue} />
    ),
  };
  const windows = Data.menuItems.map((menuItem: any, index: number) => {
    if (menuItem.window) {
      const setTabValue =
        menuItem.window.windowId === WindowConstants.PORTFOLIO_WINDOW_WINDOW_ID
          ? setPageTabValue
          : menuItem.window.windowId === WindowConstants.HELP_WINDOW_WINDOW_ID
          ? setHelpTabValue
          : undefined;

      return (
        <Window
          window={menuItem.window}
          heightPercentage={menuItem.window.heightPercentage}
          widthPercentage={menuItem.window.widthPercentage}
          key={index}
          scroll={menuItem.window.scroll}
          setTabValue={setTabValue}
        >
          {windowContent[menuItem.window.windowId]}
        </Window>
      );
    }
  });

  useEffect(() => {
    if (theme !== ThemeConstants.WINDOWS)
      document.documentElement.setAttribute('data-theme', theme);

    updateWindowThemeBgColor(theme);
  }, [theme]);

  return (
    <StyledEngineProvider injectFirst>
      <Head>
        <title>{pageProps.title ?? ''}</title>
        <meta
          name="description"
          content="Software Developer Lauren Miles' portfolio containing work experience, resume, and contact information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="img/favicon.ico" />
      </Head>

      {useWindowsTheme && windows}

      {useWindowsTheme ? windowsThemeLayout : portfolioLayout}
    </StyledEngineProvider>
  );
}
