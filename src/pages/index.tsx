type Props = {
  component: JSX.Element;
};

export default function Home({ component }: Props): JSX.Element {
  return component;
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
