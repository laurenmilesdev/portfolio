import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import Data from '../../data.json';
import Layout from '../components/layout/Layout';
import Navigation from '../components/navigation/Navigation';
import Introduction from '../components/introduction/Introduction';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Projects from '../components/projects/Projects';
import Contacts from '../components/contact/Contacts';
import TabType from '../types/component-helpers/tab';

export default function App({ Component, pageProps }: AppProps) {
  const [pageValue, setPageValue] = useState<number>(0);
  const [projectValue, setProjectValue] = useState<number>(0);

  const introductionComponent = () => <Introduction subtitle={Data.home.subtitle} />;
  const aboutComponent = () => <About description={Data.about.description} />;
  const portfolioComponent = () => (
    <Projects
      projects={Data.portfolio.projects}
      handleChange={handleProjectChange}
      value={projectValue}
    />
  );
  const contactComponent = () => <Contact description={Data.contact.description} />;

  const introPage = <Layout component={introductionComponent()} />;
  const aboutPage = <Layout component={aboutComponent()} title={Data.about.title} />;
  const portfolioPage = <Layout component={portfolioComponent()} title={Data.portfolio.title} />;
  const contactPage = <Layout component={contactComponent()} title={Data.contact.title} />;
  const pages: TabType[] = [
    new TabType(Data.home.title as string, introPage),
    new TabType(Data.about.title, aboutPage),
    new TabType(Data.portfolio.title as string, portfolioPage),
    new TabType(Data.contact.title, contactPage),
  ];

  function handlePageChange(event: React.SyntheticEvent, newValue: number) {
    setPageValue(newValue);
  }

  function handleProjectChange(event: React.SyntheticEvent, newValue: number) {
    setProjectValue(newValue);
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
        value={pageValue}
        // useDarkTheme={useDarkTheme} handleThemeChange={handleThemeChange}
      />

      <Container>
        <Component {...pageProps} pageValue={pageValue} pages={pages} />
      </Container>

      <Contacts contacts={Data.contact.contacts} />
    </>
  );
}
