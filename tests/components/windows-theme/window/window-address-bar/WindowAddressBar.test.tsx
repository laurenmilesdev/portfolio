import { render } from '@testing-library/react';
import WindowAddressBar, {
  label,
  inputValue,
  divId,
  inputId,
} from '../../../../../src/components/windows-theme/window/window-address-bar/WindowAddressBar';

describe('WindowAddressBar component', () => {
  beforeEach(() => {
    render(<WindowAddressBar />);
  });

  it('renders "Address" label', () => {
    const element = document.getElementById(divId) as HTMLDivElement;

    expect(element).toHaveTextContent(label);
  });

  it('renders text input box', () => {
    const element = document.getElementById(inputId) as HTMLInputElement;

    expect(element.type).toEqual('text');
    expect(element.value).toEqual(inputValue);
    expect(element.readOnly).toEqual(true);
  });
});
