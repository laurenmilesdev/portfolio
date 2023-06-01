import Contact from './Contact';

import ContactType from '@/types/contact';

type Props = {
  description: string;
  contacts: ContactType[];
};

export default function Contacts(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <div className="col-md-12 mb-3">{props.description}</div>
      <div className="col-md-12">
        <ul>
          {props.description &&
            props.contacts.map((contact: ContactType) => <Contact contact={contact} />)}
        </ul>
      </div>
    </div>
  );
}
