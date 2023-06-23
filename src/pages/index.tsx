import { useEffect, useState } from 'react';
import Data from '../../data.json';
// import { getTheme } from '@/helpers/helpers';
import Navigation from '@/components/navigation/Navigation';
import Layout from '@/components/layout/Layout';
import Introduction from '@/components/introduction/Introduction';
import About from '@/components/about/About';
import Contacts from '@/components/contact/Contacts';
import Projects from '@/components/projects/Projects';
import TabType from '@/types/component-helpers/tab';

export default function Home(): JSX.Element {
  const [projectValue, setProjectValue] = useState<number>(0);
  // const [useDarkTheme, setUseDarkTheme] = useState<boolean>(true);
  const introductionComponent = () => <Introduction subtitle={Data.introduction.subtitle} />;
  const aboutComponent = () => <About description={Data.about.description} />;
  const projectsComponent = () => (
    <Projects projects={Data.project.projects} handleChange={handleChange} value={projectValue} />
  );
  const contactComponent = () => (
    <Contacts description={Data.contact.description} contacts={Data.contact.contacts} />
  );

  const introPage = pageContent(introductionComponent());
  const aboutPage = pageContent(aboutComponent(), Data.about.title);
  const projectsPage = pageContent(projectsComponent(), Data.project.title);
  const contactPage = pageContent(contactComponent(), Data.contact.title);
  const pages: TabType[] = [
    new TabType('Home', introPage),
    new TabType('About', aboutPage),
    new TabType('Projects', projectsPage),
    new TabType('Contact', contactPage),
  ];

  function handleChange(event: React.SyntheticEvent, newValue: number) {
    setProjectValue(newValue);
  }

  // function handleThemeChange(event: React.SyntheticEvent, newUseDarkTheme: boolean) {
  //   const theme: string = getTheme(newUseDarkTheme);

  //   document.documentElement.setAttribute('data-theme', theme);
  //   setUseDarkTheme(newUseDarkTheme);
  //   localStorage.setItem('theme', theme);
  // }

  useEffect(() => {
    localStorage.setItem('theme', 'dark');
  });

  return (
    <Navigation
      pages={pages}
      // useDarkTheme={useDarkTheme} handleThemeChange={handleThemeChange}
    />
  );
}

function pageContent(component: JSX.Element, title?: string) {
  return <Layout component={component} title={title} />;
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
