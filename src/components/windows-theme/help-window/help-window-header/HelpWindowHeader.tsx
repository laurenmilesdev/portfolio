import styles from './HelpWindowHeader.module.css';

export const inputText = 'General Help';

export default function HelpWindowHeader() {
  return (
    <div className={`${styles['header-div']} col-md-12`}>
      <div className={`${styles['header-text']} col-md-2`}>Location</div>
      <div className={`col-md-10`}>
        <input
          className={`${styles['header-input']} inverse-windows-box-shadow`}
          type="text"
          value={inputText}
        />
      </div>
    </div>
  );
}
