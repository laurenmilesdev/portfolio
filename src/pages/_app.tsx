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
import Contact from '../components/portfolio/pages/contact/Contact';
import Layout from '../components/portfolio/layout/Layout';
import WindowsThemeLayout from '../components/windows-theme/layout/Layout';
import Window from '../components/windows-theme/window/Window';
import HelpWindow from '../components/windows-theme/help-window/HelpWindow';
import PageModel from '../models/component-helpers/page';
import DesktopItemModel from '../models/component-helpers/desktop-item';
import ThemeConstants from '../constants/theme';
import { updateWindowThemeBgColor } from '../utils/window';

export default function App({ Component, pageProps }: AppProps) {
  const [pageValue, setPageValue] = useState<number>(0);
  const [helpTabValue, setHelpTabValue] = useState<number>(0);
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>(
    useDarkTheme ? ThemeConstants.DARK : ThemeConstants.LIGHT
  );
  const useWindowsTheme = theme === ThemeConstants.WINDOWS;

  const pages: PageModel[] = [
    new PageModel(
      Data.home.title,
      (
        <Home
          subtitle={Data.home.subtitle}
          description={Data.home.description}
          useWindowsTheme={useWindowsTheme}
        />
      )
    ),
    new PageModel(Data.about.title, <About description={Data.about.description} />),
    new PageModel(Data.projects.title, <Projects projects={Data.projects.projects} />),
    new PageModel(Data.contact.title, <Contact description={Data.contact.description} />),
  ];
  const desktopItems = Data.contact.contacts.map(
    (contact) =>
      new DesktopItemModel(
        contact.name,
        <Image width={50} height={50} src={contact.imgSrc} alt={contact.imgDescription} />,
        contact.url
      )
  );

  const portfolioLayout = (
    <Layout
      pageValue={pageValue}
      pageTitles={pages.map((page: PageModel) => page.title)}
      setPageValue={setPageValue}
      contacts={Data.contact.contacts}
      useDarkTheme={useDarkTheme}
      setUseDarkTheme={setUseDarkTheme}
      setTheme={setTheme}
      useWindowsTheme={useWindowsTheme}
    >
      <Component {...pageProps} pages={pages} pageValue={pageValue} />
    </Layout>
  );
  const windowsThemeLayout = (
    <WindowsThemeLayout
      desktopItems={desktopItems}
      menuItems={Data.menuItems}
      useDarkTheme={useDarkTheme}
      setTheme={setTheme}
    />
  );

  const windowContent: any = {
    'portfolio-window': portfolioLayout,
    'help-window': <HelpWindow helpTabValue={helpTabValue} setHelpTabValue={setHelpTabValue} />,
  };
  const windows = Data.menuItems.map((menuItem: any, index: number) => {
    if (menuItem.window)
      return (
        <Window
          window={menuItem.window}
          heightPercentage={menuItem.window.heightPercentage}
          widthPercentage={menuItem.window.widthPercentage}
          key={index}
        >
          {windowContent[menuItem.window.windowId]}
        </Window>
      );
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {useWindowsTheme && windows}

      {useWindowsTheme ? windowsThemeLayout : portfolioLayout}
    </StyledEngineProvider>
  );
}
