import styles from './HelpWindowHeader.module.css';

export const locationDivId = 'location';
export const locationText = 'Location';
export const inputId = 'header-input';
export const inputText = 'General Help';

export default function HelpWindowHeader() {
  return (
    <div className={`${styles['header-div']} col-md-12`}>
      <div className={`${styles['header-text']} col-md-2`} id={locationDivId}>
        {locationText}
      </div>
      <div className={`col-md-10`}>
        <input
          className={`${styles['header-input']} inverse-windows-box-shadow`}
          type="text"
          value={inputText}
          id={inputId}
        />
      </div>
    </div>
  );
}
