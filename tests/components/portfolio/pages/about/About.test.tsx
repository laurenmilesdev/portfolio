import { render } from '@testing-library/react';
import About, {
  altText,
  descriptionDivId,
  imageId,
} from '../../../../../src/components/portfolio/pages/about/About';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('About component', () => {
  const description = 'This is a description';

  beforeEach(() => {
    render(<About description={description} />);
  });

  it('renders description', () => {
    const element = document.getElementById(descriptionDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(description);
  });

  it('renders photo with alt text', () => {
    const element = document.getElementById(imageId) as HTMLImageElement;

    expect(element.alt).toEqual(altText);
  });
});
