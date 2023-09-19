import { render } from '@testing-library/react';
import Contact, {
  descriptionDivId,
} from '../../../../../src/components/portfolio/pages/contact/Contact';

describe('Contact component', () => {
  const description = 'This is a description';

  beforeEach(() => {
    render(<Contact description={description} />);
  });

  it('renders description', () => {
    const element = document.getElementById(descriptionDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(description);
  });
});
