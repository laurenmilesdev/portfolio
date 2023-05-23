import Navigation from '@/components/navigation/Navigation';
import Introduction from '@/components/introduction/Introduction';

import Tab from '@/types/tab';

export default function Home(): JSX.Element {
  const pages: Tab[] = [new Tab('Home', introductionComponent())];

  return <Navigation pages={pages}></Navigation>;
}

export function getStaticProps() {
  return {
    props: {
      title: 'Lauren Miles',
    },
  };
}

function introductionComponent(): JSX.Element {
  const props = {
    title: "Hello, I'm Lauren.",
    description: 'Software developer with a passion for creating modern web pages.',
  };

  return <Introduction title={props.title} description={props.description}></Introduction>;
}
