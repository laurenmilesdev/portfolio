import StartButton from './start-button/StartButton';
import StartBarButton from './start-bar-button/StartBarButton';
import StartMenu from './start-menu/StartMenu';
import PageModel from '../../../models/component-helpers/page';

import styles from './StartBar.module.css';

type Props = {
  pages: PageModel[];
};

export default function StartBar({ pages }: Props) {
  return (
    <div className={styles['start-bar']}>
      <StartButton />

      <div className={styles.items}>
        {pages.map((page: PageModel, index: number) => (
          <StartBarButton page={page} index={index} />
        ))}
      </div>

      <StartMenu pages={pages} />
    </div>
  );
}
