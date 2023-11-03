type Props = {
  subtitle: string;
  description: string;
  useWindowsTheme: boolean;
};

export const subtitleDivId = 'home-subtitle';
export const descriptionDivId = 'home-description';
export const imageId = 'logo';
export const altText = 'Image of Lauren within text that says Lauren Miles';

export default function Home({ subtitle, description }: Props): JSX.Element {
  return (
    <div className={`col-md-12`}>
      <div className={`col-md-12`} id={subtitleDivId}>
        <h1>{subtitle}</h1>
      </div>

      <div className={`col-md-12`} id={descriptionDivId}>
        {description}
      </div>
    </div>
  );
}
