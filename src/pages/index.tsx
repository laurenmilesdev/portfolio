import Introduction from '@/components/introduction/Introduction';

export default function Home() {
  const introProps = {
    title: "Hello, I'm Lauren.",
    description: 'Software developer with a passion for creating modern web pages',
  };

  return (
    <Introduction title={introProps.title} description={introProps.description}></Introduction>
  );
}

export function getStaticProps() {
  return {
    props: {
      title: 'Lauren Miles',
    },
  };
}
