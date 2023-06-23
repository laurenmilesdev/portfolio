import Image from 'next/image';
import img from '../../../public/img/about/IMG_1465.jpg';

import styles from './About.module.css';

type Props = {
  description: string;
};

export default function About(props: Props): JSX.Element {
  const imageAltText = 'Image of Lauren as a child washing a truck with dad';

  return (
    <div className="col-md-12">
      <div className={`${styles.text} col-md-12`}>
        {props.description && (
          <div
            className="col-md-12 mb-3"
            data-testid="description"
            dangerouslySetInnerHTML={{ __html: props.description }}
          />
        )}
      </div>

      <div className="col-md-12">
        <Image src={img} alt={imageAltText} aria-label={imageAltText} className={styles.image} />
      </div>
    </div>
  );
}
