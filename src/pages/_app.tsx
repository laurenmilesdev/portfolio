import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import Data from '../../data.json';
import Layout from '../components/portfolio/layout/Layout';
import TabPanel from '../components/portfolio/tab-panel/TabPanel';
import Home from '../components/portfolio/pages/home/Home';
import About from '../components/portfolio/pages/about/About';
import Projects from '../components/portfolio/pages/projects/Projects';
import Contact from '../components/portfolio/pages/contact/Contact';
import Desktop from '../components/windows-theme/desktop/Desktop';
import Footer from '../components/portfolio/footer/Footer';
import Window from '../components/windows-theme/window/Window';
import PageModel from '../models/component-helpers/page';
import MenuItemModel from '../models/component-helpers/menu-item';
import WindowModel from '../models/component-helpers/window';
import DesktopItemModel from '../models/component-helpers/desktop-item';
import ThemeConstants from '../constants/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [pageValue, setPageValue] = useState<number>(0);
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>(
    useDarkTheme ? ThemeConstants.DARK : ThemeConstants.LIGHT
  );
  const useWindowsTheme = theme === ThemeConstants.WINDOWS;

  const handlePageChange = (event: React.SyntheticEvent, newValue: number) =>
    setPageValue(newValue);

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
  const portfolioPageContent = (
    <Layout
      pageValue={pageValue}
      pageTitles={pages.map((page: PageModel) => page.title)}
      handlePageChange={handlePageChange}
      useWindowsTheme={useWindowsTheme}
    >
      {pages.map(({ component }, index: number) => (
        <TabPanel value={pageValue} index={index} key={index}>
          <Component {...pageProps} component={component} />
        </TabPanel>
      ))}
    </Layout>
  );

  // TODO: Create dictionary to hold these values
  const getWindowContent = (windowId: string): JSX.Element => {
    if (windowId === 'portfolio-window') return portfolioPageContent;
    if (windowId === 'help-window') return <>This will be help window component</>;

    return <></>;
  };

  const desktopItems = Data.contact.contacts.map(
    (contact) =>
      new DesktopItemModel(
        contact.name,
        <Image width={50} height={50} src={contact.imgSrc} alt={contact.imgDescription} />,
        contact.url
      )
  );
  const menuItems: MenuItemModel[] = Data.menuItems.map((menuItem: any) => {
    let window;

    if (menuItem.window)
      window = new WindowModel(
        menuItem.title as string,
        getWindowContent(menuItem.window.windowId as string),
        menuItem.window.windowId as string,
        menuItem.window.startBarButtonId as string,
        menuItem.window.isInternetExplorerWindow as boolean,
        menuItem.window.widthPercentage as number,
        menuItem.window.heightPercentage as number,
        (menuItem.window.addressBarUrl as string) ?? ''
      );

    return new MenuItemModel(
      menuItem.title as string,
      menuItem.menuItemButtonId as string,
      (menuItem.externalUrl as string) ?? '',
      window
    );
  });

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

      {useWindowsTheme &&
        menuItems.map((menuItem: MenuItemModel, index: number) => {
          if (menuItem.window)
            return (
              <Window
                window={menuItem.window}
                heightPercentage={menuItem.window.heightPercentage}
                widthPercentage={menuItem.window.widthPercentage}
                key={index}
              >
                {menuItem.window.component}
              </Window>
            );
        })}

      {useWindowsTheme ? <Desktop desktopItems={desktopItems} /> : portfolioPageContent}

      <Footer
        menuItems={menuItems}
        contacts={Data.contact.contacts}
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        useWindowsTheme={useWindowsTheme}
        setTheme={setTheme}
      />
    </StyledEngineProvider>
  );
}
