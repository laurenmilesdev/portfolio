type Props = {
  description: string;
};

export const descriptionDivId = 'home-description';

export default function Home({ description }: Props): JSX.Element {
  return (
    <div
      className={`col-md-12`}
      id={descriptionDivId}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
}
