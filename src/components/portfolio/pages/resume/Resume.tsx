import styles from './Resume.module.css';

type Props = {
  description: string;
};

export const descriptionDivId = 'resume-description';
export const resumeIFrameDivId = 'resume-iframe';

export default function Resume({ description }: Props) {
  return (
    <div className={styles['resume-container']}>
      <div
        className={`col-md-12`}
        id={descriptionDivId}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <iframe
        src="/files/Lauren_Miles_Resume.pdf"
        className={styles.resume}
        id={resumeIFrameDivId}
      />
    </div>
  );
}
