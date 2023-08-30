import styles from './WindowAddressBar.module.css';

export const label = 'Address';
export const inputValue = 'https://portfolio.laurenmilesdev.com/';
export const divId = 'window-address-bar-label';
export const inputId = 'window-address-bar-input';

export default function WindowAddressBar(): JSX.Element {
  return (
    <div className={`${styles.options} ${styles.padding}`}>
      <div className={styles.item} id={divId}>
        {label}
      </div>
      <input
        type="text"
        className={styles['inverse-windows-box-shadow']}
        value={inputValue}
        id={inputId}
        readOnly
      />
    </div>
  );
}
