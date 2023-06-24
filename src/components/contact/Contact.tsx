import ContactType from '@/types/contact/contact';

type Props = {
  description: string;
  contacts: ContactType[];
};

export default function Contact(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <div
        className="col-md-12 mb-3"
        data-testid="description"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </div>
  );
}
