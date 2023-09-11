import DesktopItem from './desktop-item/DesktopItem';
import DesktopItemModel from '../../../models/component-helpers/desktop-item';

import styles from './Desktop.module.css';

type Props = {
  desktopItems: DesktopItemModel[];
};

export default function Desktop({ desktopItems }: Props) {
  return (
    <div className={`${styles.desktop} col-md-12`}>
      {desktopItems.map((item: DesktopItemModel, index: number) => (
        <DesktopItem label={item.label} image={item.image} url={item.url} key={index} />
      ))}
    </div>
  );
}
