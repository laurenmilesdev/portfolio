import TabPanel from '@/components/tabs/TabPanel';
import TabType from '@/types/component-helpers/tab';

type Props = {
  pageValue: number;
  pages: TabType[];
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
