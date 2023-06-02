type Props = {
  description: string[];
};

export default function About(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      {props.description && props.description.map((item: string) => <p>{item}</p>)}
    </div>
  );
}
