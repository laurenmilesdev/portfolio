import Image from 'next/image';
import styles from './Layout.module.css';
import ImageType from '@/types/image';

type Props = {
  title: string;
  content: JSX.Element;
  image?: ImageType;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div className={styles.left}>
        <div className={`${styles.title} col-md-12`}>{props.title}</div>
        <div className={`${styles['description-container']} col-md-12`}>{props.content}</div>
      </div>
      <div className={styles.right}>
        {props.image && (
          <Image src={props.image.src} alt={props.image.altText} className={styles.photo} />
        )}
      </div>
    </div>
  );
}
