import { render } from '@testing-library/react';
import Layout from '../../../src/components/layout/Layout';

describe('Layout component', () => {
  const title = 'Title';
  const componentText = 'This is the component';
  const component = <div>{componentText}</div>;

  it('contains correct classes', () => {
    const { container } = render(<Layout title={title} component={component} />);
    const { firstChild } = container;

    expect(firstChild).toHaveClass('container');
  });

  it('renders content', () => {
    const { getByTestId } = render(<Layout title={title} component={component} />);

    expect(getByTestId('title')).toHaveTextContent(title);
    expect(getByTestId('content')).toHaveTextContent(componentText);
  });
});
