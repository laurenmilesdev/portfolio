import Image from 'next/image';
import PageModel from '../../../../models/component-helpers/page';

import img from '../../../../../public/img/windows/ie.png';
import styles from './StartMenuItem.module.css';

export const shutdownLabelText = 'Shutdown';

type Props = {
  pages: PageModel[];
  page?: PageModel;
  index?: number;
};

export default function StartMenuItem({
  pages,
  page = undefined,
  index = undefined,
}: Props): JSX.Element {
  if (index && index === 0) return <></>;

  if (page) {
    const className = index === pages.length - 1 ? styles.line : '';

    return (
      <li key={index} className={className}>
        <label className={styles['menu-item']} id={page.menuItemButtonId}>
          <Image src={img} alt="Internet Explorer icon" className={styles['ie-icon']} />
          {page.label}
        </label>
      </li>
    );
  }

  return (
    <li>
      <label className={styles['menu-item-shutdown']} id="shutdown-menu-item">
        <Image
          width={30}
          height={30}
          className={styles['shutdown-icon']}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEUAAACGhobAwMB3d3eysrLMzMz4+PjX19eZmZnq6urn59ZNTU2WlpZCQkIzAGYAAIAAAAAzAMwAAP8A/////wBVVVX///99stlUAAAAAXRSTlMAQObYZgAAAAFiS0dEFnzRqBkAAAAHdElNRQfiBhoANBn4/QlFAAAAzUlEQVQ4y83S0Q6DIAwFUGmhYudEdP7/r+6CZEEnvm438emetBDpun+KQW5rQpibtXWOHJHlPedeRHqHQHhm+zXKyKCqMmRhfV53IEb0YUh1EBCIMRH7PIAphEREipgJX71iijER16tAGJ79EShAJrZ3gu4KLMuaCDtqgHVZkwnXAGdYVskzqD3hhRE3IKYV7QkhxHyKBvCDUiKxnsAV2NhrIR9Q9cgGgv8QkAKOfU0KOPeFpGe1g8uHVUgb7MTjAk2QyTjO7T6T2/oHeQPSrw8Qg6bkoQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo1MjoyNS0wNDowMOXPqxAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NTI6MjUtMDQ6MDCUkhOsAAAAAElFTkSuQmCC"
          alt=""
        />
        {shutdownLabelText}
      </label>
    </li>
  );
}
