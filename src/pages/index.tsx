import { useEffect } from 'react';
// import { getTheme } from '@/helpers/helpers';
import TabPanel from '@/components/tabs/TabPanel';
import TabType from '@/types/component-helpers/tab';

type Props = {
  pageValue: number;
  pages: TabType[];
};

export default function Home({ pageValue, pages }: Props): JSX.Element {
  // function handleThemeChange(event: React.SyntheticEvent, newUseDarkTheme: boolean) {
  //   const theme: string = getTheme(newUseDarkTheme);

  //   document.documentElement.setAttribute('data-theme', theme);
  //   setUseDarkTheme(newUseDarkTheme);
  //   localStorage.setItem('theme', theme);
  // }

  useEffect(() => {
    localStorage.setItem('theme', 'dark');
  });

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
