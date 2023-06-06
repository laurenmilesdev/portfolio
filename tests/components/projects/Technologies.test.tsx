import { render } from '@testing-library/react';
import Technologies from '../../../src/components/projects/Technologies';

describe('Technologies component', () => {
  const technologies = ['tech 1', 'tech 2'];

  it('renders technologies', () => {
    const { getByTestId } = render(<Technologies technologies={technologies} />);

    expect(getByTestId('tech-0')).toHaveTextContent(technologies[0].toUpperCase());
    expect(getByTestId('tech-1')).toHaveTextContent(technologies[1].toUpperCase());
  });
});
