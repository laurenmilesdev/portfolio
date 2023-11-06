import { render } from '@testing-library/react';
import Resume, {
  descriptionDivId,
  resumeIFrameDivId,
} from '../../../../../src/components/portfolio/pages/resume/Resume';

describe('Resume component', () => {
  const description = 'Page description.';

  beforeEach(() => {
    render(<Resume description={description} />);
  });

  it('renders description', () => {
    const element = document.getElementById(descriptionDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(description);
  });

  it('renders resume IFrame', () => {
    const element = document.getElementById(resumeIFrameDivId) as HTMLDivElement;

    expect(element).toBeInTheDocument();
  });
});
