import Image from 'next/image';

import img from '../../../../public/img/about/IMG_1465.jpg';
import styles from './About.module.css';

type Props = {
  description: string;
};

export const descriptionDivId = 'about-description';
export const imageId = 'about-img';
export const altText = 'Image of Lauren as a child washing a truck with dad';

export default function About({ description }: Props): JSX.Element {
  return (
    <div className="col-md-12">
      {description && (
        <div
          className={`${styles.text} col-md-12`}
          id={descriptionDivId}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      <div className="col-md-12">
        <Image src={img} alt={altText} className={styles.image} id={imageId} />
      </div>
    </div>
  );
}
