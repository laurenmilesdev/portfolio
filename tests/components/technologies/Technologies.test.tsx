import { render } from '@testing-library/react';
import Technologies from '../../../src/components/portfolio/technologies/Technologies';

describe('Technologies component', () => {
  const technologies = ['tech 1', 'tech 2'];

  beforeEach(() => {
    render(<Technologies technologies={technologies} />);
  });

  it('renders technologies chips', () => {
    technologies.forEach((tech: string, index: number) => {
      const element = document.getElementById(`tech-${index}`) as HTMLDivElement;

      expect(element).toHaveTextContent(tech);
    });
  });
});
