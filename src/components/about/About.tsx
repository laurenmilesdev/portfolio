type Props = {
  description: string[];
};

export default function About(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      {props.description &&
        props.description.map((item: string, index: number) => (
          <p data-testid={`paragraph-${index}`} key={index}>
            {item}
          </p>
        ))}
    </div>
  );
}
