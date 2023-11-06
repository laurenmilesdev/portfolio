import { render } from '@testing-library/react';
import Home, { descriptionDivId } from '../../../../../src/components/portfolio/pages/home/Home';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('Home component', () => {
  const description = 'This is the description';

  beforeEach(() => {
    render(<Home description={description} />);
  });

  it('renders description', () => {
    const element = document.getElementById(descriptionDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(description);
  });
});
