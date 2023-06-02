import Data from '../../data.json';
import Navigation from '@/components/navigation/Navigation';
import Layout from '@/components/layout/Layout';
import Introduction from '@/components/introduction/Introduction';
import About from '@/components/about/About';
import Contacts from '@/components/contact/Contacts';

import introImg from '../../public/img/introduction/IMG_8341.jpg';
import aboutImg from '../../public/img/about/IMG_1465.jpg';

import TabType from '@/types/component-helpers/tab';
import ImageType from '@/types/component-helpers/image';

const introductionComponent = (): JSX.Element => (
  <Introduction subtitle={Data.introduction.subtitle} />
);

const aboutComponent = (): JSX.Element => <About description={Data.about.description} />;

const contactComponent = (): JSX.Element => (
  <Contacts description={Data.contact.description} contacts={Data.contact.contacts} />
);

export default function Home(): JSX.Element {
  const introductionImage = new ImageType(introImg, 'Image of Lauren');
  const aboutImage = new ImageType(aboutImg, 'Image of Lauren as a child');
  const intro = getContent(
    Data.introduction.title,
    introductionComponent(),
    false,
    false,
    introductionImage
  );
  const about = getContent(Data.about.title, aboutComponent(), true, false, aboutImage);
  const contact = getContent(Data.contact.title, contactComponent(), true, true);
  const pages: TabType[] = [
    new TabType('Home', intro),
    new TabType('About', about),
    new TabType('Contact', contact),
  ];

  return <Navigation pages={pages} />;
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
  includeEmail: boolean,
  image?: ImageType
) {
  return (
    <Layout
      title={title}
      content={component}
      animatedTitle={animatedTitle}
      includeEmail={includeEmail}
      emailSubtitle={Data.email.subtitle}
      emailDescription={Data.email.description}
      image={image}
    />
  );
}
