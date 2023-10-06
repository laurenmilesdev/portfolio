import { useState } from 'react';
import HelpWindowTabs from './tabs/HelpWindowTabs';
import HelpWindowTabsContent from './tabs-content/HelpWindowTabsContent';
import PageModel from '../../../../models/component-helpers/page';

import styles from './HelpWindowContent.module.css';

type Props = {
  helpTabs: PageModel[];
};

export default function HelpWindowContent({ helpTabs }: Props) {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);

  return (
    <div className="col-md-12 d-flex justify-content-center">
      <div className={`${styles['help-tabs-container']} col-md-5`}>
        <HelpWindowTabs
          helpTabTitles={helpTabs.map((tab) => tab.title)}
          tabValue={tabValue}
          handleChange={handleChange}
        />
      </div>

      <div className="col-md-1"></div>

      <div className={`${styles['help-tabs-content-container']} help-tabs col-md-5`}>
        <HelpWindowTabsContent helpTabs={helpTabs} tabValue={tabValue} />
      </div>
    </div>
  );
}
