import Image from 'next/image';
import img from '../../../public/img/introduction/logo.png';

import styles from './Introduction.module.css';

export const altText = 'Image of Lauren within text that says Lauren Miles';

type Props = {
  subtitle: string;
};

export default function Introduction({ subtitle }: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div className="col-md-12">
        <Image src={img} alt={altText} className={styles.logo} id="logo" priority />
      </div>

      <div className="col-md-12" id="intro-subtitle">
        <h4>{subtitle}</h4>
      </div>
    </div>
  );
}
