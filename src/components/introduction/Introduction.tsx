import Image from 'next/image';
import styles from './Introduction.module.css';
import img from '../../../public/img/IMG_8341.jpg';

type Props = {
  title: string;
  description: string;
};

export default function Introduction(props: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div className={styles.left}>
        <div className={`${styles.title} col-md-12`}>{props.title}</div>
        <div className={`${styles['description-container']} col-md-12`}>
          <div className={styles.description}>{props.description}</div>
        </div>
      </div>
      <div className={styles.right}>
        <Image src={img} alt={'Image of Lauren'} className={styles.photo} />
      </div>
    </div>
  );
}
