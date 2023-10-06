import HelpWindowHeader from './header/HelpWindowHeader';
import HelpWindowContent from './content/HelpWindowContent';
import PageModel from '../../../models/component-helpers/page';

import styles from './HelpWindow.module.css';

export default function HelpWindow() {
  const helpTabs: PageModel[] = [
    new PageModel(
      'Why is my copy of Windows feature limited?',
      (
        <>
          <h2>Why is my copy of Windows feature limited?</h2>
          <p>
            Since this version of Windows was built entirely with CSS, you may notice some features
            are missing. This is because of the limitations of CSS.
            <a href="https://fjolt.com/category/css" target="_blank">
              To learn more about CSS, you can click here
            </a>
          </p>
        </>
      )
    ),
    new PageModel(
      "Why can't I move windows?",
      (
        <>
          <h2>Why can't I move windows?</h2>
          <p>
            Although CSS lets you do quite a lot of things, unfortunately drag and drop is not one
            of them. To enable drag and drop on this version of windows,{' '}
            <a href="https://fjolt.com/series/learn-javascript" target="_blank">
              please learn Javascript first
            </a>
            , and then write the necessary scripts to add drag and drop.
          </p>
        </>
      )
    ),
  ];

  return (
    <div className={styles['help-window']}>
      <HelpWindowHeader />

      <HelpWindowContent helpTabs={helpTabs} />
    </div>
  );
}
