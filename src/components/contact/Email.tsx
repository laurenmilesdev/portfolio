import EmailForm from './EmailForm';

type Props = {
  subtitle: string;
  description: string;
};

export default function Email(props: Props): JSX.Element {
  return (
    <div className="col-md-12 email-container">
      <div className="col-md-12 p-3">
        <h2>{props.subtitle.toUpperCase()}</h2>
      </div>

      <div className="col-md-12 p-3">
        {/* <p>{props.description}</p> */}
        <p>Feature coming soon...</p>
      </div>

      {/* <EmailForm /> */}
    </div>
  );
}
