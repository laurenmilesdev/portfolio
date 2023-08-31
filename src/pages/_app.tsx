import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import Data from '../../data.json';
import Layout from '../components/layout/Layout';
import TabPanel from '../components/tab-panel/TabPanel';
import Home from '../components/pages/home/Home';
import About from '../components/pages/about/About';
import Projects from '../components/pages/projects/Projects';
import Contact from '../components/pages/contact/Contact';
import Desktop from '../components/windows-theme/desktop/Desktop';
import Footer from '../components/footer/Footer';
import Window from '../components/windows-theme/window/Window';
import PageModel from '../models/component-helpers/page';
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

  const homeComponent = <Home subtitle={Data.home.subtitle} description={Data.home.description} />;
  const aboutComponent = <About description={Data.about.description} />;
  const projectsComponent = <Projects projects={Data.projects.projects} />;
  const contactComponent = <Contact description={Data.contact.description} />;

  const pages: PageModel[] = [
    new PageModel(Data.home.title, homeComponent),
    new PageModel(Data.about.title, aboutComponent),
    new PageModel(Data.projects.title, projectsComponent),
    new PageModel(Data.contact.title, contactComponent),
  ];
  const desktopItems = Data.contact.contacts.map(
    (contact) =>
      new DesktopItemModel(
        contact.name,
        <Image width={50} height={50} src={contact.imgSrc} alt={contact.imgDescription} />,
        contact.url
      )
  );
  const pageContent = (
    <Layout
      pageValue={pageValue}
      pageTitles={pages.map((page: PageModel) => page.title)}
      handlePageChange={handlePageChange}
    >
      {pages.map(({ component }, index: number) => (
        <TabPanel value={pageValue} index={index} key={index}>
          <Component {...pageProps} component={component} />
        </TabPanel>
      ))}
    </Layout>
  );
  const windowsThemePageContent = <Desktop desktopItems={desktopItems} />;
  const windows: WindowModel[] = [
    new WindowModel(
      'Lauren Miles Portfolio',
      pageContent,
      'portfolio-window',
      'portfolio-start-bar-btn',
      'portfolio-menu-item-btn'
    ),
    new WindowModel('test 2', <></>, '', '', ''),
  ];

  return (
    <>
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
        windows.map((window: WindowModel, index: number) => (
          <Window window={window} content={window.component} key={index} />
        ))}

      {useWindowsTheme ? windowsThemePageContent : pageContent}

      <Footer
        windows={windows}
        contacts={Data.contact.contacts}
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        useWindowsTheme={useWindowsTheme}
        setTheme={setTheme}
      />
    </>
  );
}
