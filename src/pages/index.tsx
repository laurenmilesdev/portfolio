import { useState } from 'react';
import Image from 'next/image';
import Data from '../../data.json';
import Navigation from '@/components/navigation/Navigation';
import Layout from '@/components/layout/Layout';
import Introduction from '@/components/introduction/Introduction';
import About from '@/components/about/About';
import Contacts from '@/components/contact/Contacts';
import Project from '@/components/projects/Project';
import Projects from '@/components/projects/Projects';
import Email from '@/components/contact/Email';

import introImg from '../../public/img/introduction/IMG_8341.jpg';
import aboutImg from '../../public/img/about/IMG_1465.jpg';

import TabType from '@/types/component-helpers/tab';

export default function Home(): JSX.Element {
  const [projectValue, setProjectValue] = useState<number>(-1);
  const introductionComponent = () => <Introduction subtitle={Data.introduction.subtitle} />;
  const introductionImage = () => (
    <Image src={introImg} alt="Image of Lauren" className="intro-photo" />
  );
  const aboutComponent = () => <About paragraphs={Data.about.paragraphs} />;
  const aboutImage = () => (
    <Image
      src={aboutImg}
      alt="Image of Lauren as a child washing a truck with dad"
      className="intro-photo"
    />
  );
  const projectsComponent = () => (
    <Projects
      description={Data.project.description}
      projects={Data.project.projects}
      handleChange={handleChange}
      value={projectValue}
    />
  );
  const projectComponent = () => (
    <Project
      pageDescription={Data.project.description}
      projects={Data.project.projects}
      value={projectValue}
    />
  );
  const contactComponent = () => (
    <Contacts description={Data.contact.description} contacts={Data.contact.contacts} />
  );
  const contactEmailComponent = () => (
    <Email subtitle={Data.email.subtitle} description={Data.email.description} />
  );

  const introPage = pageContent(
    Data.introduction.title,
    false,
    introductionComponent(),
    introductionImage()
  );
  const aboutPage = pageContent(Data.about.title, true, aboutComponent(), aboutImage());
  const projectsPage = pageContent(
    Data.project.title as string,
    true,
    projectComponent(),
    projectsComponent()
  );
  const contactPage = pageContent(
    Data.contact.title,
    true,
    contactComponent(),
    contactEmailComponent()
  );
  const pages: TabType[] = [
    new TabType('Home', introPage),
    new TabType('About', aboutPage),
    new TabType('Projects', projectsPage),
    new TabType('Contact', contactPage),
  ];

  function handleChange(event: React.SyntheticEvent, newValue: number) {
    setProjectValue(newValue);
  }

  return <Navigation pages={pages} />;
}

function pageContent(
  title: string,
  animatedTitle: boolean,
  leftComponent: JSX.Element,
  rightComponent?: JSX.Element
) {
  return (
    <Layout
      title={title}
      animatedTitle={animatedTitle}
      leftComponent={leftComponent}
      rightComponent={rightComponent}
    />
  );
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
