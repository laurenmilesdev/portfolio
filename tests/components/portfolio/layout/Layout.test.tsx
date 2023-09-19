import { render } from '@testing-library/react';
import Layout from '../../../../src/components/portfolio/layout/Layout';
import { contacts } from '../../../mocks/data-mock';
import { setBoolStateMock, setStringStateMock } from '../../../mocks/use-state-mock';

describe('Layout component', () => {
  let getByTestId: any;
  const pageValue = 0;
  const pageTitles = ['Title', 'Title2'];
  const handlePageChange = () => undefined;
  const useDarkTheme = true;
  const setUseDarkTheme = setBoolStateMock;
  const setTheme = setStringStateMock;
  const useWindowsTheme = false;
  const componentText = 'This is the component';
  const children = <div id="children">{componentText}</div>;

  beforeEach(() => {
    ({ getByTestId } = render(
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
    ));
  });

  describe('Navigation', () => {
    it('renders tabs', () => {
      pageTitles.forEach((title: string, index: number) => {
        const element = document.getElementById(`tab-${index}`) as HTMLButtonElement;

        expect(element).toHaveTextContent(title);
      });
    });
  });

  describe('children', () => {
    it('renders children', () => {
      const element = document.getElementById('children') as HTMLDivElement;

      expect(element).toHaveTextContent(componentText);
    });
  });

  describe('Footer', () => {
    it('renders Windows Theme button', () => {
      const element = document.getElementById('windows-theme-btn') as HTMLButtonElement;

      expect(element).toBeInTheDocument();
    });

    it('renders Contacts', () => {
      expect(getByTestId('GitHubIcon')).toBeVisible();
      expect(getByTestId('LinkedInIcon')).toBeVisible();
      expect(getByTestId('PictureAsPdfIcon')).toBeVisible();
    });

    it('renders ThemeSwitch', () => {
      const element = document.getElementById('theme-switch') as HTMLSpanElement;

      expect(element).toBeInTheDocument();
    });
  });
});
