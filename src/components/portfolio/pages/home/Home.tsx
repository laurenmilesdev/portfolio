type Props = {
  description: string;
};

export const descriptionDivId = 'home-description';

export default function Home({ description }: Props): JSX.Element {
  return <div id={descriptionDivId} dangerouslySetInnerHTML={{ __html: description }}></div>;
}
