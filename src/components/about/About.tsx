type Props = {
  paragraphs: string[];
};

export default function About(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      {props.paragraphs &&
        props.paragraphs.map((paragraph: string, index: number) => (
          <p data-testid={`paragraph-${index}`} key={index}>
            {paragraph}
          </p>
        ))}
    </div>
  );
}
