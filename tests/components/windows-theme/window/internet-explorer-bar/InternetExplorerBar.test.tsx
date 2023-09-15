import { render } from '@testing-library/react';
import InternetExplorerBar, {
  options,
} from '../../../../../src/components/windows-theme/window/internet-explorer-bar/InternetExplorerBar';
import {
  imageAltText,
  imageId,
} from '../../../../../src/components/windows-theme/window/internet-explorer-bar/options/Options';
import {
  label,
  divId,
  inputId,
} from '../../../../../src/components/windows-theme/window/internet-explorer-bar/address-bar/AddressBar';

describe('InternetExplorerBar component', () => {
  const addressBarUrl = 'http://url.com';

  beforeEach(() => {
    render(<InternetExplorerBar addressBarUrl={addressBarUrl} />);
  });

  describe('Options component', () => {
    it('renders options', () => {
      options.map((option: string, index: number) => {
        const element = document.getElementById(`option-${index}`) as HTMLDivElement;

        expect(element).toHaveTextContent(option);
      });
    });

    it('renders photo with alt text', () => {
      const element = document.getElementById(imageId) as HTMLImageElement;

      expect(element.alt).toEqual(imageAltText);
    });
  });

  describe('AddressBar component', () => {
    it('renders AddressBar label', () => {
      const element = document.getElementById(divId) as HTMLDivElement;

      expect(element).toHaveTextContent(label);
    });

    it('renders text input box', () => {
      const element = document.getElementById(inputId) as HTMLInputElement;

      expect(element.type).toEqual('text');
      expect(element.value).toEqual(addressBarUrl);
      expect(element.readOnly).toEqual(true);
    });
  });
});
