import { render } from '@testing-library/react';
import WindowOptions, {
  imageAltText,
} from '../../../../../src/components/windows-theme/window/window-options/WindowOptions';

describe('WindowAddressBar component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  beforeEach(() => {
    render(<WindowOptions options={options} />);
  });

  it('renders options', () => {
    options.map((option: string, index: number) => {
      const element = document.getElementById(`option-${index}`) as HTMLDivElement;

      expect(element).toHaveTextContent(option);
    });
  });

  it('renders photo with alt text', () => {
    const element = document.getElementById('window-options-windows-logo') as HTMLImageElement;

    expect(element.alt).toEqual(imageAltText);
  });
});
