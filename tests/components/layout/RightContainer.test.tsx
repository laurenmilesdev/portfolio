import { render } from '@testing-library/react';
import RightContainer from '../../../src/components/layout/RightContainer';

describe('RightContainer component', () => {
  const rightContainerClass = 'right-container';
  const contentText = 'This is content';
  const testClassName = 'test';
  const content = <div data-testid={testClassName}>{contentText}</div>;

  it('contains correct content when content is defined', () => {
    const { getByTestId } = render(<RightContainer content={content} />);
    const rightContainer = getByTestId(rightContainerClass);

    expect(rightContainer).toHaveTextContent(contentText);
  });

  it('contains correct content when content is undefined', () => {
    const { getByTestId } = render(<RightContainer content={undefined} />);
    const rightContainer = getByTestId(rightContainerClass);

    expect(rightContainer).toHaveTextContent('');
  });
});
