import { render } from '@testing-library/react';
import Layout from '../../../src/components/layout/Layout';

describe('Layout component', () => {
  const title = 'Title';
  const contentText = 'This is content';
  const content = <div>{contentText}</div>;
  const emailSubtitle = 'Subtitle';
  const emailDescription = 'This is email description.';

  it('contains correct classes', () => {
    const { container } = render(
      <Layout
        title={title}
        content={content}
        animatedTitle={false}
        includeEmail={false}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
      />
    );
    const { firstChild } = container;

    expect(firstChild).toHaveClass('container');
  });

  it('contains correct content when includeEmail is false and image is undefined', () => {
    const { getByTestId } = render(
      <Layout
        title={title}
        content={content}
        animatedTitle={false}
        includeEmail={false}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
      />
    );

    expect(getByTestId('title')).toHaveTextContent(title);
    expect(getByTestId('content')).toHaveTextContent(contentText);
  });
});
