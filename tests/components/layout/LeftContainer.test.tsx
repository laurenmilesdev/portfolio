import { render } from '@testing-library/react';
import LeftContainer from '../../../src/components/layout/LeftContainer';

describe('LeftContainer component', () => {
  const title = 'Title';
  const contentText = 'This is content';
  const content = <div>{contentText}</div>;
  const leftContainerClass = 'left-container';

  it('contains correct classes when animated is false', () => {
    const { container } = render(<LeftContainer title={title} content={content} />);
    const { firstChild } = container;
    const secondChild = firstChild?.firstChild;

    expect(firstChild).toHaveClass(leftContainerClass);
    expect(secondChild).toHaveClass('col-md-12');
  });

  it('contains correct classes when animated is true', () => {
    const { container } = render(<LeftContainer title={title} content={content} animated={true} />);
    const { firstChild } = container;
    const secondChild = firstChild?.firstChild;

    expect(firstChild).toHaveClass(leftContainerClass);
    expect(secondChild).toHaveClass('title-animated');
    expect(secondChild).toHaveClass('col-md-12');
  });

  it('renders title', () => {
    const { getByTestId } = render(<LeftContainer title={title} content={content} />);

    expect(getByTestId('title')).toHaveTextContent(title);
  });

  it('renders content', () => {
    const { getByTestId } = render(<LeftContainer title={title} content={content} />);

    expect(getByTestId('content')).toHaveTextContent(contentText);
  });
});
