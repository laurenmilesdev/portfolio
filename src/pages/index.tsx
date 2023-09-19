import PageModel from '@/models/component-helpers/page';
import TabPanel from '@/components/portfolio/tab-panel/TabPanel';
import Page from '@/components/portfolio/pages/Page';

type Props = {
  pages: PageModel[];
  pageValue: number;
};

export default function Home({ pages, pageValue }: Props): JSX.Element {
  return (
    <>
      {pages.map((page: PageModel, index: number) => (
        <TabPanel value={pageValue} index={index} key={index}>
          <Page pageValue={pageValue} pageTitle={page.title} pageComponent={page.component} />
        </TabPanel>
      ))}
      ;
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
