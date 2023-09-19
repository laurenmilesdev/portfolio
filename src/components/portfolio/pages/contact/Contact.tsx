type Props = {
  description: string;
};

export const descriptionDivId = 'contact-description';

export default function Contact({ description }: Props): JSX.Element {
  return (
    <div
      className="col-md-12"
      id={descriptionDivId}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
}
