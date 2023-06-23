import Contact from './Contact';
import ContactType from '@/types/contact/contact';

type Props = {
  description: string;
  contacts: ContactType[];
};

export default function Contacts(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <div
        className="col-md-12 mb-3"
        data-testid="description"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />

      <div className="col-md-12">
        <ul>
          {props.description &&
            props.contacts.map((contact: ContactType) => (
              <div key={contact.name}>
                <Contact contact={contact} />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
