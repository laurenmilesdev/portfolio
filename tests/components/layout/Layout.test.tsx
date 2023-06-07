import { render } from '@testing-library/react';
import Layout from '../../../src/components/layout/Layout';

describe('Layout component', () => {
  const title = 'Title';
  const leftComponentText = 'This is the left component';
  const rightComponentText = 'This is the right component';
  const leftComponent = <div>{leftComponentText}</div>;
  const rightComponent = <div>{rightComponentText}</div>;

  it('contains correct classes', () => {
    const { container } = render(
      <Layout
        title={title}
        animatedTitle={false}
        leftComponent={leftComponent}
        rightComponent={rightComponent}
      />
    );
    const { firstChild } = container;

    expect(firstChild).toHaveClass('container');
  });

  it('contains correct content when rightComponent is undefined', () => {
    const { getByTestId } = render(
      <Layout title={title} animatedTitle={false} leftComponent={leftComponent} />
    );

    expect(getByTestId('title')).toHaveTextContent(title);
    expect(getByTestId('content')).toHaveTextContent(leftComponentText);
  });
});
