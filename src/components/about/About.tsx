import styles from './About.module.css';

type Props = {
  title: string;
  description: string[];
};

export default function About(props: Props): JSX.Element {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div className={styles.left}>
        <div className={`${styles.title} col-md-12`}>{props.title}</div>
        <div className={`${styles['description-container']} col-md-12`}>
          <div className={styles.description}>
            {props.description && props.description.map((item: string) => <p>{item}</p>)}
          </div>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
