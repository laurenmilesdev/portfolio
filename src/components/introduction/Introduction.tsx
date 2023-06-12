import styles from './Introduction.module.css';

type Props = {
  subtitle: string;
};

export default function Introduction(props: Props): JSX.Element {
  return (
    <div className={styles['content-animated']} data-testid="intro">
      {props.subtitle}
    </div>
  );
}
