import { render } from '@testing-library/react';
import WindowAddressBar, {
  label,
  divId,
  inputId,
} from '../../../../../src/components/windows-theme/window/window-address-bar/WindowAddressBar';

describe('WindowAddressBar component', () => {
  const addressBarUrl = 'http://url.com';

  beforeEach(() => {
    render(<WindowAddressBar addressBarUrl={addressBarUrl} />);
  });

  it('renders "Address" label', () => {
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
