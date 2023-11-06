import styles from './Resume.module.css';

export default function Resume() {
  return (
    <div className={styles['resume-container']}>
      <iframe src="/files/Lauren_Miles_Resume.pdf" className={styles.resume} />
    </div>
  );
}
