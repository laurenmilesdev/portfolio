import { render } from '@testing-library/react';
import InternetExplorerBar from '../../../../../src/components/windows-theme/window/internet-explorer-bar/InternetExplorerBar';
import { optionsDivId } from '../../../../../src/components/windows-theme/window/internet-explorer-bar/options/Options';
import { addressBarDivId } from '../../../../../src/components/windows-theme/window/internet-explorer-bar/address-bar/AddressBar';

describe('InternetExplorerBar component', () => {
  const addressBarUrl = 'http://url.com';

  beforeEach(() => {
    render(<InternetExplorerBar addressBarUrl={addressBarUrl} />);
  });

  describe('Options', () => {
    it('renders options', () => {
      const element = document.getElementById(optionsDivId) as HTMLDivElement;

      expect(element).toBeInTheDocument();
    });
  });

  describe('AddressBar', () => {
    it('renders AddressBar', () => {
      const element = document.getElementById(addressBarDivId) as HTMLDivElement;

      expect(element).toBeInTheDocument();
    });
  });
});
