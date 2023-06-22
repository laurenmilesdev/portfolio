import Image from 'next/image';
import img from '../../../public/img/about/IMG_1465.jpg';

import styles from './About.module.css';

type Props = {
  paragraphs: string[];
};

export default function About(props: Props): JSX.Element {
  const imageAltText = 'Image of Lauren as a child washing a truck with dad';

  return (
    <div className="col-md-12">
      <div className={`${styles.text} col-md-12`}>
        {props.paragraphs &&
          props.paragraphs.map((paragraph: string, index: number) => (
            <p data-testid={`about-paragraph-${index}`} key={index}>
              {paragraph}
            </p>
          ))}
      </div>

      <div className="col-md-12">
        <Image src={img} alt={imageAltText} aria-laebl={imageAltText} className={styles.image} />
      </div>
    </div>
  );
}
