import Image from 'next/image';

import img from '../../../../public/img/home/headshot.png';
import styles from './Home.module.css';

export const altText = 'Image of Lauren within text that says Lauren Miles';

type Props = {
  subtitle: string;
  description: string;
};

export default function Home({ subtitle, description }: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div className={`${styles.subtitle} col-md-12`} id="home-subtitle">
        {subtitle}
      </div>

      <div className={`${styles.description} col-md-12`} id="home-description">
        {description}
      </div>

      <div className="col-md-12">
        <Image src={img} alt={altText} className={styles.logo} id="logo" priority />
      </div>
    </div>
  );
}