import styles from './LeftContainer.module.css';

type Props = {
  title: string;
  content: JSX.Element;
  animated?: boolean;
};

export default function LeftContainer(props: Props): JSX.Element {
  return (
    <div className={styles['left-container']} data-testid="left-container">
      <div
        className={`${props.animated ? styles['title-animated'] : ''} col-md-12`}
        data-testid="title"
      >
        <h1>{props.title}</h1>
      </div>
      <div className="col-md-12" data-testid="content">
        {props.content}
      </div>
    </div>
  );
}