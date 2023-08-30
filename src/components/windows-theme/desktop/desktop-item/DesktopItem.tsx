import styles from './DesktopItem.module.css';

type Props = {
  label: string;
  image: JSX.Element;
  url: string;
};

export default function DesktopItem({ label, image, url }: Props) {
  return (
    <a className={styles['desktop-item']} href={url} target="_blank">
      <div className={styles.icon}>{image}</div>
      <div className={styles.text}>{label}</div>
    </a>
  );
}
