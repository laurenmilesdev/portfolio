import { Dispatch, SetStateAction } from 'react';
import HelpWindowHeader from './header/HelpWindowHeader';
import HelpWindowContent from './content/HelpWindowContent';
import PageModel from '../../../models/component-helpers/page';

import styles from './HelpWindow.module.css';

type Props = {
  helpTabValue: number;
  setHelpTabValue: Dispatch<SetStateAction<number>>;
};

export default function HelpWindow({ helpTabValue, setHelpTabValue }: Props) {
  const helpTabs: PageModel[] = [
    new PageModel(
      'Why is my copy of Windows feature limited?',
      tabContent(
        'Why is my copy of Windows feature limited?',
        'Since this version of Windows was built entirely with CSS, you may notice some features are missing. This is because of the limitations of CSS.'
      )
    ),
    new PageModel(
      "Why can't I move windows?",
      tabContent(
        "Why can't I move windows?",
        'Although CSS lets you do quite a lot of things, unfortunately drag and drop is not one of them.'
      )
    ),
  ];

  return (
    <div className={styles['help-window']}>
      <HelpWindowHeader />

      <HelpWindowContent
        helpTabs={helpTabs}
        helpTabValue={helpTabValue}
        setHelpTabValue={setHelpTabValue}
      />
    </div>
  );
}

export function tabContent(title: string, description: string): JSX.Element {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
