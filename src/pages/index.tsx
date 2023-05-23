import Navigation from '@/components/navigation/Navigation';
import Introduction from '@/components/introduction/Introduction';

import Tab from '@/types/tab';

export default function Home() {
  const introProps = {
    title: "Hello, I'm Lauren.",
    description: 'Software developer with a passion for creating modern web pages',
  };
  const pages: Tab[] = [
    new Tab(
      'Home',
      <Introduction title={introProps.title} description={introProps.description}></Introduction>
    ),
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
