import { Chip } from '@mui/material';
import styles from './Technologies.module.css';

type Props = {
  technologies: string[];
};

export default function Technologies({ technologies }: Props): JSX.Element {
  return (
    <div className={styles['chip-container']}>
      {technologies &&
        technologies.map((tech: string, index: number) => (
          <Chip
            label={tech.toUpperCase()}
            className={styles.chip}
            key={tech}
            id={`tech-${index}`}
          ></Chip>
        ))}
    </div>
  );
}
