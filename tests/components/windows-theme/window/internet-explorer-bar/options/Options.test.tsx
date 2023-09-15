import { render } from '@testing-library/react';
import Options, {
  imageAltText,
  imageId,
} from '../../../../../../src/components/windows-theme/window/internet-explorer-bar/options/Options';
import { options } from '../../../../../../src/components/windows-theme/window/internet-explorer-bar/InternetExplorerBar';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Options component', () => {
  beforeEach(() => {
    render(<Options options={options} />);
  });

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
