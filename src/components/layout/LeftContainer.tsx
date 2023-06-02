import styles from './LeftContainer.module.css';

type Props = {
  title: string;
  content: JSX.Element;
  animated?: boolean;
};

export default function LeftContainer(props: Props) {
  return (
    <div className={styles.container}>
      <div className={`${props.animated ? styles['title-animated'] : ''} col-md-12`}>
        <h1>{props.title}</h1>
      </div>
      <div className={`${styles['description-container']} col-md-12`}>{props.content}</div>
    </div>
  );
}
