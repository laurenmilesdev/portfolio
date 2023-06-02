import { render, screen } from '@testing-library/react';
import LeftContainer from '../../../src/components/layout/LeftContainer';

describe('LeftContainer component', () => {
  const title = 'Title';
  const content = <div>This is content</div>;

  it('contains correct classes when animated is false', () => {
    const { container } = render(<LeftContainer title={title} content={content} />);
    const { firstChild } = container;
    const secondChild = firstChild?.firstChild;

    expect(firstChild).toHaveClass('container');
    expect(secondChild).toHaveClass('col-md-12');
  });

  it('contains correct classes when animated is true', () => {
    const { container } = render(<LeftContainer title={title} content={content} animated={true} />);
    const { firstChild } = container;
    const secondChild = firstChild?.firstChild;

    expect(firstChild).toHaveClass('container');
    expect(secondChild).toHaveClass('title-animated');
    expect(secondChild).toHaveClass('col-md-12');
  });

  it('renders title', () => {
    render(<LeftContainer title={title} content={content} />);

    expect(screen.getByTestId('title')).toHaveTextContent(title);
  });

  it('renders content', () => {
    render(<LeftContainer title={title} content={content} />);

    expect(screen.getByTestId('content')).toHaveTextContent('This is content');
  });
});
