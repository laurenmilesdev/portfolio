import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import Layout, {
  titleDivId,
  contentDivId,
} from '../../../../src/components/portfolio/layout/Layout';
import { contacts } from '../../../mocks/data-mock';
import { useStateMock, setBoolStateMock, setStringStateMock } from '../../../mocks/use-state-mock';

describe('Layout component', () => {
  const pageTitles = ['Title', 'Title2'];
  const handlePageChange = () => undefined;
  const useDarkTheme = true;
  const setUseDarkTheme = setBoolStateMock;
  const setTheme = setStringStateMock;
  const useWindowsTheme = false;
  const componentText = 'This is the component';
  const children = <div>{componentText}</div>;

  describe('title is undefined', () => {
    const pageValue = 0;

    beforeEach(() => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

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

    it('does not render title', () => {
      const element = document.getElementById(titleDivId) as HTMLDivElement;

      expect(element).toBeNull();
    });

    it('renders content', () => {
      const element = document.getElementById(contentDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(componentText);
    });
  });

  describe('title is not undefined', () => {
    const pageValue = 1;

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

    it('renders title', () => {
      const element = document.getElementById(titleDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(pageTitles[pageValue]);
    });

    it('renders content', () => {
      const element = document.getElementById(contentDivId) as HTMLDivElement;

      expect(element).toHaveTextContent(componentText);
    });
  });
});
