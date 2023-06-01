import LinkType from '@/types/link';

type Props = {
  description: string;

  contacts: any[];

  links: LinkType[];
};

export default function Contact(props: Props): JSX.Element {
  return (
    <div className="col-md-12">
      <div>{props.description}</div>
      <div>
        {props.description &&
          props.contacts.map((contact: any) => (
            <p>
              {contact.name}: {contact.value}
            </p>
          ))}
      </div>
      <div>
        {props.description &&
          props.links.map((link: LinkType) => (
            <p>
              {link.name}: {link.url}
            </p>
          ))}
      </div>
    </div>
  );
}
