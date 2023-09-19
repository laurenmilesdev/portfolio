import { render } from '@testing-library/react';
import Layout, { childrenContainerId } from '../../../../src/components/portfolio/layout/Layout';
import { navigationDivId } from '../../../../src/components/portfolio/navigation/Navigation';
import { footerDivId } from '../../../../src/components/portfolio/footer/Footer';
import { contacts } from '../../../mocks/data-mock';
import { setBoolStateMock, setStringStateMock } from '../../../mocks/use-state-mock';

describe('Layout component', () => {
  const pageValue = 0;
  const pageTitles = ['Title', 'Title2'];
  const handlePageChange = () => undefined;
  const useDarkTheme = true;
  const setUseDarkTheme = setBoolStateMock;
  const setTheme = setStringStateMock;
  const useWindowsTheme = false;
  const componentText = 'This is the component';
  const children = <div>{componentText}</div>;

  beforeEach(() => {
    render(
      <Layout
        pageValue={pageValue}
        pageTitles={pageTitles}
        handlePageChange={handlePageChange}
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
