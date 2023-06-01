import Data from '../../data.json';
import Navigation from '@/components/navigation/Navigation';
import Layout from '@/components/layout/Layout';
import Introduction from '@/components/introduction/Introduction';
import About from '@/components/about/About';

import TabType from '@/types/tab';
import ImageType from '@/types/image';

import img from '../../public/img/IMG_8341.jpg';

const introductionComponent = (): JSX.Element => (
  <Introduction subtitle={Data.introduction.subtitle}></Introduction>
);

const aboutComponent = (): JSX.Element => <About description={Data.about.description}></About>;

export default function Home(): JSX.Element {
  const intro = getContent(
    Data.introduction.title,
    introductionComponent(),
    new ImageType(img, 'Image of Lauren')
  );
  const about = getContent(Data.about.title, aboutComponent());
  const pages: TabType[] = [new TabType('Home', intro), new TabType('About', about)];

  return <Navigation pages={pages}></Navigation>;
}

export function getStaticProps() {
  return {
    props: {
      title: 'Lauren Miles',
    },
  };
}

export function getContent(title: string, component: JSX.Element, image?: ImageType) {
  return <Layout title={title} content={component} image={image} />;
}
