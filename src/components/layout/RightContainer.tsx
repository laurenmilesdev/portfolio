import styles from './RightContainer.module.css';

type Props = {
  content?: JSX.Element;
};

export default function RightContainer(props: Props): JSX.Element {
  return (
    <div className={styles['right-container']} data-testid="right-container">
      {props.content ?? <></>}
    </div>
  );
}
