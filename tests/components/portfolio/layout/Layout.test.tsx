import { render } from '@testing-library/react';
import Layout, {
  childrenContainerId,
  footerDivId,
  navigationDivId,
} from '../../../../src/components/portfolio/layout/Layout';
import { contacts } from '../../../mocks/data-mock';
import { setBoolStateMock, setStringStateMock } from '../../../mocks/use-state-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Layout component', () => {
  const pageValue = 0;
  const pageTitles = ['Title', 'Title2'];
  const setPageTabValue = () => undefined;
  const useDarkTheme = true;
  const setUseDarkTheme = setBoolStateMock;
  const setTheme = setStringStateMock;
  const useWindowsTheme = false;
  const componentText = 'This is the component';
  const children = <div>{componentText}</div>;

  beforeEach(() => {
    render(
      <Layout
        pageTabValue={pageValue}
        pageTitles={pageTitles}
        setPageTabValue={setPageTabValue}
        contacts={contacts}
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        setTheme={setTheme}
        useWindowsTheme={useWindowsTheme}
      >
        {children}
      </Layout>
    );
  });

  it('renders Navigation', () => {
    const element = document.getElementById(navigationDivId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });

  it('renders children', () => {
    const element = document.getElementById(childrenContainerId) as HTMLDivElement;

    expect(element).toHaveTextContent(componentText);
  });

  it('renders Footer', () => {
    const element = document.getElementById(footerDivId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });
});
