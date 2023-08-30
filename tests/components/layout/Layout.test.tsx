import { render } from '@testing-library/react';
import Layout, { titleDivId, contentDivId } from '../../../src/components/layout/Layout';

describe('Layout component', () => {
  const title = 'Title';
  const componentText = 'This is the component';
  const component = <div>{componentText}</div>;

  beforeEach(() => {
    render(<Layout component={component} title={title} />);
  });

  it('renders title if not undefined', () => {
    const element = document.getElementById(titleDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(title);
  });

  it('renders content', () => {
    const element = document.getElementById(contentDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(componentText);
  });
});
