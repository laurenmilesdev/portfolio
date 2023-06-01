import ContactType from '@/types/contact';

type Props = {
  description: string;

  contacts: ContactType[];
};

export default function Contact(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <div>{props.description}</div>
      <div>
        {props.description &&
          props.contacts.map((contact: ContactType) => (
            <p>
              {contact.name}: {contact.value ?? contact.url}
            </p>
          ))}
      </div>
    </div>
  );
}
