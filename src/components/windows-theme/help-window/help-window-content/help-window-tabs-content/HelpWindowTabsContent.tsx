import TabPanel from '../../../../portfolio/tab-panel/TabPanel';
import PageModel from '../../../../../models/component-helpers/page';

type Props = {
  helpTabs: PageModel[];
  tabValue: number;
};

export default function HelpWindowTabsContent({ helpTabs, tabValue }: Props) {
  return (
    <>
      {helpTabs.map((page: PageModel, index: number) => (
        <TabPanel value={tabValue} index={index} key={index}>
          {page.component}
        </TabPanel>
      ))}
    </>
  );
}
