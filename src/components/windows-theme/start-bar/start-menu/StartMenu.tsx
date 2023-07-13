import PageModel from '../../../../models/component-helpers/page';

import styles from './StartMenu.module.css';
import StartMenuItem from '../start-menu-item/StartMenuItem';

type Props = {
  pages: PageModel[];
};

export default function StartMenu({ pages }: Props) {
  return (
    <div className={`${styles['start-menu']} windows-box-shadow`} id="start-menu">
      <div className={styles['start-menu-blue']}>
        Windows<span>98</span>
      </div>

      <ul>
        {pages.map((page: PageModel, index: number) => (
          <StartMenuItem pages={pages} page={page} index={index} />
        ))}

        <StartMenuItem pages={pages} />
      </ul>
    </div>
  );
}
