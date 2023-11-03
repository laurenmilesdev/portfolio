type Props = {
  description: string;
};

export const subtitleDivId = 'home-subtitle';
export const descriptionDivId = 'home-description';
export const imageId = 'logo';
export const altText = 'Image of Lauren within text that says Lauren Miles';

export default function Home({ description }: Props): JSX.Element {
  return (
    <div
      className={`col-md-12`}
      id={descriptionDivId}
      dangerouslySetInnerHTML={{ __html: description }}
    ></div>
  );
}
