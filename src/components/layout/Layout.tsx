import Image from 'next/image';
import Fade from '@mui/material/Fade';

import Email from '../contact/Email';
import ImageType from '@/types/component-helpers/image';

import styles from './Layout.module.css';

type Props = {
  title: string;
  content: JSX.Element;
  animatedTitle: boolean;
  image?: ImageType;
  email?: boolean;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <Fade in={true}>
      <div className={`${styles.container} col-md-12`}>
        <div className={styles.left}>
          <div className={`${props.animatedTitle ? styles['title-animated'] : ''} col-md-12`}>
            <h1>{props.title}</h1>
          </div>
          <div className={`${styles['description-container']} col-md-12`}>{props.content}</div>
        </div>
        <div className={styles.right}>
          {props.image ? (
            <Image src={props.image.src} alt={props.image.altText} className={styles.photo} />
          ) : props.email ? (
            <Email />
          ) : (
            <></>
          )}
        </div>
      </div>
    </Fade>
  );
}
