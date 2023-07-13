import { render } from '@testing-library/react';
import StartMenuItem, {
  shutdownLabelText,
} from '../../../../../src/components/windows-theme/start-bar/start-menu-item/StartMenuItem';
import PageModel from '../../../../../src/models/component-helpers/page';

describe('StartMenuItem component', () => {
  const pages = [
    new PageModel('Page', <>Page</>),
    new PageModel('Page 2', <>Page</>, 'window-id', 'start-bar-button-id', 'menu-item-button-id'),
  ];

  it('renders null if index is 0', () => {
    const index = 0;
    const page = pages[index];
    render(<StartMenuItem pages={pages} page={page} index={index} />);

    const element = document.getElementById(page.menuItemButtonId ?? '') as HTMLLabelElement;

    expect(element).toEqual(null);
  });

  it('renders menu item if index is not 0', () => {
    const index = 1;
    const page = pages[index];
    render(<StartMenuItem pages={pages} page={page} index={index} />);

    const element = document.getElementById(page.menuItemButtonId ?? '') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(page.label);
  });

  it('renders shutdown menu item if page and index are undefined', () => {
    render(<StartMenuItem pages={pages} />);

    const element = document.getElementById('shutdown-menu-item') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(shutdownLabelText);
  });
});
