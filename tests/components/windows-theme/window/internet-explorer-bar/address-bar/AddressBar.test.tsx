import { render } from '@testing-library/react';
import AddressBar, {
  label,
  divId,
  inputId,
} from '../../../../../../src/components/windows-theme/window/internet-explorer-bar/address-bar/AddressBar';

describe('AddressBar component', () => {
  const addressBarUrl = 'http://url.com';

  beforeEach(() => {
    render(<AddressBar addressBarUrl={addressBarUrl} />);
  });

  it('renders address label', () => {
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
