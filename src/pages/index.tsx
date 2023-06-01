import Data from '../../data.json';
import Navigation from '@/components/navigation/Navigation';
import Introduction from '@/components/introduction/Introduction';
import About from '@/components/about/About';

import Tab from '@/types/tab';

const introductionComponent = (): JSX.Element => (
  <Introduction
    title={Data.introduction.title}
    description={Data.introduction.subtitle}
  ></Introduction>
);

const aboutComponent = (): JSX.Element => (
  <About title={Data.about.title} description={Data.about.description}></About>
);

export default function Home(): JSX.Element {
  const pages: Tab[] = [
    new Tab('Home', introductionComponent()),
    new Tab('About', aboutComponent()),
  ];

  return <Navigation pages={pages}></Navigation>;
}

export function getStaticProps() {
  return {
    props: {
      title: 'Lauren Miles',
    },
  };
}
