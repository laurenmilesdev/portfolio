import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import Data from '../../data.json';
import Introduction from '../components/introduction/Introduction';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Layout from '../components/layout/Layout';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import TabType from '../types/component-helpers/tab';
import ThemeConstants from '../constants/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [pageValue, setPageValue] = useState<number>(0);
  const [useDarkTheme, setUseDarkTheme] = useState<boolean>(true);

  const introductionComponent = () => <Introduction subtitle={Data.home.subtitle} />;
  const aboutComponent = () => <About description={Data.about.description} />;
  const projectsComponent = () => <Projects projects={Data.projects.projects} />;
  const contactComponent = () => (
    <Contact description={Data.contact.description} contacts={Data.contact.contacts} />
  );

  const pages: TabType[] = [
    new TabType(Data.home.title, <Layout component={introductionComponent()} />),
    new TabType(Data.about.title, <Layout component={aboutComponent()} title={Data.about.title} />),
    new TabType(
      Data.projects.title,
      <Layout component={projectsComponent()} title={Data.projects.title} />
    ),
    new TabType(
      Data.contact.title,
      <Layout component={contactComponent()} title={Data.contact.title} />
    ),
  ];

  function handlePageChange(event: React.SyntheticEvent, newValue: number) {
    setPageValue(newValue);
  }

  function handleThemeChange(event: React.SyntheticEvent, newUseDarkTheme: boolean) {
    const theme: string = newUseDarkTheme ? ThemeConstants.DARK : ThemeConstants.LIGHT;

    document.documentElement.setAttribute('data-theme', theme);
    setUseDarkTheme(newUseDarkTheme);
    localStorage.setItem('theme', theme);
  }

  return (
    <>
      <Head>
        <title>{pageProps.title ?? ''}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation
        pageLabels={pages.map((page) => page.label)}
        handleChange={handlePageChange}
        pageValue={pageValue}
      />

      <Container>
        <Component {...pageProps} pageValue={pageValue} pages={pages} />
      </Container>

      <Footer
        contacts={Data.contact.contacts}
        useDarkTheme={useDarkTheme}
        handleChange={handleThemeChange}
      />
    </>
  );
}
