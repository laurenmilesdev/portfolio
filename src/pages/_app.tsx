import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import Data from '../../data.json';
import Home from '../components/pages/home/Home';
import About from '../components/pages/about/About';
import Projects from '../components/pages/projects/Projects';
import Contact from '../components/pages/contact/Contact';
import Layout from '../components/layout/Layout';
import Navigation from '../components/navigation/Navigation';
import Desktop from '../components/windows-theme/desktop/Desktop';
import Footer from '../components/footer/Footer';
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

  const homeComponent = <Home subtitle={Data.home.subtitle} description={Data.home.description} />;
  const aboutComponent = <About description={Data.about.description} />;
  const projectsComponent = <Projects projects={Data.projects.projects} />;
  const contactComponent = <Contact description={Data.contact.description} />;
  // const pages: PageModel[] = [
  //   new PageModel(Data.home.title, <Layout component={homeComponent} />),
  //   new PageModel(
  //     Data.about.title,
  //     <Layout component={aboutComponent} title={Data.about.title} />,
  //     `${Data.about.title.toLowerCase()}-window`,
  //     `${Data.about.title.toLowerCase()}-start-bar-btn`,
  //     `${Data.about.title.toLowerCase()}-menu-item-btn`
  //   ),
  //   new PageModel(
  //     Data.projects.title,
  //     <Layout component={projectsComponent} title={Data.projects.title} />,
  //     `${Data.projects.title.toLowerCase()}-window`,
  //     `${Data.projects.title.toLowerCase()}-menu-item-btn`
  //   ),
  //   new PageModel(
  //     Data.contact.title,
  //     <Layout component={contactComponent} title={Data.contact.title} />,
  //     `${Data.contact.title.toLowerCase()}-window`,
  //     `${Data.contact.title.toLowerCase()}-menu-item-btn`
  //   ),
  // ];
  const pages: PageModel[] = [
    new PageModel(Data.home.title, <Layout component={homeComponent} />),
    new PageModel(Data.about.title, <Layout component={aboutComponent} title={Data.about.title} />),
    new PageModel(
      Data.projects.title,
      <Layout component={projectsComponent} title={Data.projects.title} />
    ),
    new PageModel(
      Data.contact.title,
      <Layout component={contactComponent} title={Data.contact.title} />
    ),
  ];
  const windows: WindowModel[] = [];
  const desktopItems = Data.contact.contacts.map(
    (contact) =>
      new DesktopItemModel(
        contact.name,
        <Image width={50} height={50} src={contact.imgSrc} alt={contact.imgDescription} />,
        contact.url
      )
  );

  const handlePageChange = (event: React.SyntheticEvent, newValue: number) =>
    setPageValue(newValue);

  const pageContent = useWindowsTheme ? (
    <Desktop desktopItems={desktopItems} />
  ) : (
    <>
      <Navigation
        pageValue={pageValue}
        pageLabels={pages.map((page: PageModel) => page.title)}
        handleChange={handlePageChange}
      />
      <Container>
        <Component {...pageProps} pageValue={pageValue} pages={pages} />
      </Container>
    </>
  );

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

      {pageContent}

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
