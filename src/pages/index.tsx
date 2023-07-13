import TabPanel from '../components/tabs/TabPanel';
import PageModel from '../models/component-helpers/page';

type Props = {
  pageValue: number;
  pages: PageModel[];
};

export default function Home({ pageValue, pages }: Props): JSX.Element {
  return (
    <>
      {pages.map(({ component }, index: number) => (
        <TabPanel value={pageValue} index={index} key={index}>
          {component}
        </TabPanel>
      ))}
    </>
  );
}

export function getStaticProps() {
  return { props: { title: 'Lauren Miles' } };
}
