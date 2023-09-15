import styles from './AddressBar.module.css';

export const label = 'Address';
export const divId = 'window-address-bar-label';
export const inputId = 'window-address-bar-input';

type Props = {
  addressBarUrl?: string;
};

export default function AddressBar({ addressBarUrl }: Props): JSX.Element {
  return (
    <div className={`${styles.options} ${styles.padding}`}>
      <div className={styles.item} id={divId}>
        {label}
      </div>
      <input
        type="text"
        className={styles['inverse-windows-box-shadow']}
        value={addressBarUrl ?? ''}
        id={inputId}
        readOnly
      />
    </div>
  );
}
