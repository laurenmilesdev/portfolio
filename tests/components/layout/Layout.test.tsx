import { render } from '@testing-library/react';
import Layout from '../../../src/components/layout/Layout';

describe('Layout component', () => {
  const title = 'Title';
  const componentText = 'This is the component';
  const component = <div>{componentText}</div>;

  beforeEach(() => {
    render(<Layout title={title} component={component} />);
  });

  it('renders title if not undefined', () => {
    const element = document.getElementById('title') as HTMLDivElement;

    expect(element).toHaveTextContent(title);
  });

  it('renders content', () => {
    const element = document.getElementById('content') as HTMLDivElement;

    expect(element).toHaveTextContent(componentText);
  });
});
