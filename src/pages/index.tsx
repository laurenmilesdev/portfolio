import TabPanel from '../components/portfolio/tab-panel/TabPanel';
import Page from '../components/portfolio/pages/Page';
import PageModel from '../models/component-helpers/page';

type Props = {
  pages: PageModel[];
  pageValue: number;
};

export default function Home({ pages, pageValue }: Props): JSX.Element {
  return (
    <>
      {pages.map((page: PageModel, index: number) => (
        <TabPanel value={pageValue} index={index} key={index}>
          <Page pageValue={pageValue} page={page} />
        </TabPanel>
      ))}
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
