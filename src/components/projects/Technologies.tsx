import { Chip } from '@mui/material';
import styles from './Technologies.module.css';

type Props = {
  technologies: string[];
};

export default function Technologies(props: Props): JSX.Element {
  return (
    <div className={styles['chip-container']}>
      {props.technologies &&
        props.technologies.map((tech: string) => (
          <Chip label={tech} className={styles.chip}></Chip>
        ))}
    </div>
  );
}
