/* eslint-disable jest/no-conditional-expect */
import { render } from '@testing-library/react';
import StartBarButton from '../../../../../src/components/windows-theme/start-bar/start-bar-button/StartBarButton';
import { menuItems } from '../../../../mocks/data-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('StartBarButton component', () => {
  beforeEach(() => {
    menuItems.map((menuItem) => {
      if (menuItem.window)
        render(<StartBarButton menuItemTitle={menuItem.title} menuItemWindow={menuItem.window} />);
    });
  });

  it('renders buttons', () => {
    menuItems.forEach((menuItem) => {
      if (menuItem.window) {
        const element = document.getElementById(
          menuItem.window?.startBarButtonId ?? ''
        ) as HTMLButtonElement;

        expect(element).toBeInTheDocument();
        expect(element).toHaveTextContent(menuItem.title);
      }
    });
  });
});
