import TabPanel from '../components/portfolio/tab-panel/TabPanel';
import Page from '../components/portfolio/pages/Page';
import PageModel from '../models/component-helpers/page';

type Props = {
  pages: PageModel[];
  pageTabValue: number;
};

export default function Home({ pages, pageTabValue }: Props): JSX.Element {
  return (
    <>
      {pages.map((page: PageModel, index: number) => (
        <TabPanel value={pageTabValue} index={index} key={index}>
          <Page pageTabValue={pageTabValue} page={page} />
        </TabPanel>
      ))}
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
