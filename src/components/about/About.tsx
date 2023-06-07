type Props = {
  paragraphs: string[];
};

export default function About(props: Props): JSX.Element {
  return (
    <div>
      {props.paragraphs &&
        props.paragraphs.map((paragraph: string, index: number) => (
          <p data-testid={`about-paragraph-${index}`} key={index}>
            {paragraph}
          </p>
        ))}
    </div>
  );
}
