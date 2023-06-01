import Data from '../../data.json';
import Navigation from '@/components/navigation/Navigation';
import Layout from '@/components/layout/Layout';
import Introduction from '@/components/introduction/Introduction';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';

import introImg from '../../public/img/introduction/IMG_8341.jpg';
import aboutImg from '../../public/img/about/IMG_1465.jpg';

import TabType from '@/types/tab';
import ImageType from '@/types/image';

const introductionComponent = (): JSX.Element => (
  <Introduction subtitle={Data.introduction.subtitle}></Introduction>
);

const aboutComponent = (): JSX.Element => <About description={Data.about.description}></About>;

const contactComponent = (): JSX.Element => (
  <Contact
    description={Data.contact.description}
    contacts={Data.contact.contacts}
    links={Data.contact.links}
  ></Contact>
);

export default function Home(): JSX.Element {
  const introductionImage = new ImageType(introImg, 'Image of Lauren');
  const aboutImage = new ImageType(aboutImg, 'Image of Lauren as a child');
  const intro = getContent(
    Data.introduction.title,
    introductionComponent(),
    false,
    introductionImage
  );
  const about = getContent(Data.about.title, aboutComponent(), true, aboutImage);
  const contact = getContent(Data.contact.title as string, contactComponent(), true);
  const pages: TabType[] = [
    new TabType('Home', intro),
    new TabType('About', about),
    new TabType('Contact', contact),
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

export function getContent(
  title: string,
  component: JSX.Element,
  animatedTitle: boolean,
  image?: ImageType
) {
  return <Layout title={title} content={component} animatedTitle={animatedTitle} image={image} />;
}
