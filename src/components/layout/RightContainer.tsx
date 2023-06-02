import Image from 'next/image';
import Email from '../contact/Email';
import ImageType from '@/types/component-helpers/image';

import styles from './RightContainer.module.css';

type Props = {
  includeEmail: boolean;
  emailSubtitle: string;
  emailDescription: string;
  image?: ImageType;
};

export default function RightContainer(props: Props) {
  return (
    <div className={styles.container}>
      {props.includeEmail ? (
        <Email subtitle={props.emailSubtitle ?? ''} description={props.emailDescription ?? ''} />
      ) : props.image ? (
        <Image src={props.image.src} alt={props.image.altText} className={styles.photo} />
      ) : (
        <></>
      )}
    </div>
  );
}
