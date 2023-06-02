import { render } from '@testing-library/react';
import RightContainer from '../../../src/components/layout/RightContainer';
import ImageType from '../../../src/types/component-helpers/image';
import img from '../../../../public/img/about/IMG_1465.jpg';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('RightContainer component', () => {
  const emailSubtitle = 'Subtitle';
  const emailDescription = 'This is email description.';
  const imageAltText = 'Alt text';
  const testImage = new ImageType(img, imageAltText);
  const rightContainerClass = 'right-container';

  it('contains correct classes when includeEmail is false and imgage is undefined', () => {
    const { container } = render(
      <RightContainer
        includeEmail={false}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
      />
    );
    const { firstChild } = container;

    expect(firstChild).toHaveClass(rightContainerClass);
  });

  it('contains correct classes when includeEmail is true and image is undefined', () => {
    const { container } = render(
      <RightContainer
        includeEmail={true}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
      />
    );
    const { firstChild } = container;
    const thirdChild = firstChild?.firstChild?.firstChild;

    expect(firstChild).toHaveClass(rightContainerClass);
    expect(thirdChild).toHaveClass('email-container');
  });

  it('contains correct classes when includeEmail is false and image is not undefined', () => {
    const { container } = render(
      <RightContainer
        includeEmail={false}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
        image={testImage}
      />
    );
    const { firstChild } = container;
    const secondChild = firstChild?.firstChild;

    expect(firstChild).toHaveClass(rightContainerClass);
    expect(secondChild).toHaveClass('photo');
  });

  it('contains correct content when includeEmail is false and imgage is undefined', () => {
    const { getByTestId } = render(
      <RightContainer
        includeEmail={false}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
      />
    );

    const rightContainer = getByTestId(rightContainerClass);

    expect(rightContainer).toHaveTextContent('');
  });

  it('contains correct content when includeEmail is true and image is undefined', () => {
    const { getByTestId } = render(
      <RightContainer
        includeEmail={true}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
      />
    );

    const rightContainer = getByTestId(rightContainerClass);

    expect(rightContainer).toHaveTextContent(emailSubtitle);
    expect(rightContainer).toHaveTextContent(emailDescription);
  });

  it('contains correct content when includeEmail is false and image is not undefined', () => {
    const { getByAltText, container } = render(
      <RightContainer
        includeEmail={false}
        emailSubtitle={emailSubtitle}
        emailDescription={emailDescription}
        image={testImage}
      />
    );
    const { firstChild } = container;
    const image = getByAltText(imageAltText);

    expect(firstChild?.firstChild).toBe(image);
  });
});
