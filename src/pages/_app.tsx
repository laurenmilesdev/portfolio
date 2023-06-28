import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

import Data from '../../data.json';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Layout from '../components/layout/Layout';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import TabType from '../types/component-helpers/tab';

export default function App({ Component, pageProps }: AppProps) {
  const [pageValue, setPageValue] = useState<number>(0);

  const homeComponent = () => (
    <Home subtitle={Data.home.subtitle} description={Data.home.description} />
  );
  const aboutComponent = () => <About description={Data.about.description} />;
  const projectsComponent = () => <Projects projects={Data.projects.projects} />;
  const contactComponent = () => <Contact description={Data.contact.description} />;

  const pages: TabType[] = [
    new TabType(Data.home.title, <Layout component={homeComponent()} />),
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

      <Navigation
        pageLabels={pages.map((page) => page.label)}
        handleChange={handlePageChange}
        pageValue={pageValue}
      />

      <Container>
        <Component {...pageProps} pageValue={pageValue} pages={pages} />
      </Container>

      <Footer contacts={Data.contact.contacts} />
    </>
  );
}
