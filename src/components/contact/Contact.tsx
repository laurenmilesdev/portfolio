type Props = {
  description: string;
};

export default function Contact({ description }: Props): JSX.Element {
  return (
    <div
      className="col-md-12"
      id="contact-description"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
