import { Dispatch, SetStateAction } from 'react';
import HelpWindowTabs from './help-window-tabs/HelpWindowTabs';
import HelpWindowTabsContent from './help-window-tabs-content/HelpWindowTabsContent';
import PageModel from '../../../../models/component-helpers/page';

import styles from './HelpWindowContent.module.css';

type Props = {
  helpTabs: PageModel[];
  helpTabValue: number;
  setHelpTabValue: Dispatch<SetStateAction<number>>;
};

export default function HelpWindowContent({ helpTabs, helpTabValue, setHelpTabValue }: Props) {
  return (
    <div className={`${styles.container} col-md-12`}>
      <div className={`${styles['help-tabs-container']} col-md-5`}>
        <HelpWindowTabs
          helpTabTitles={helpTabs.map((tab) => tab.title)}
          tabValue={helpTabValue}
          setHelpTabValue={setHelpTabValue}
        />
      </div>

      <div className="col-md-1"></div>

      <div className={`${styles['help-tabs-content-container']} help-tabs col-md-5`}>
        <HelpWindowTabsContent helpTabs={helpTabs} tabValue={helpTabValue} />
      </div>
    </div>
  );
}
