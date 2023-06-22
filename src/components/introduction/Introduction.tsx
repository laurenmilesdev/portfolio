import Image from 'next/image';
import img from '../../../public/img/introduction/logo.png';

import styles from './Introduction.module.css';

type Props = {
  subtitle: string;
};

export default function Introduction(props: Props): JSX.Element {
  const imageAltText = 'Image of Lauren within text that says Lauren Miles';

  return (
    <div className={styles.container}>
      <div className="col-md-12" data-testid="logo">
        <Image src={img} alt={imageAltText} aria-label={imageAltText} className={styles.logo} />
      </div>

      <div className="col-md-12" data-testid="intro">
        <h3>{props.subtitle}</h3>
      </div>
    </div>
  );
}
