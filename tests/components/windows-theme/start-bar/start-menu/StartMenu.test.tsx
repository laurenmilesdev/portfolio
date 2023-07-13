import { render } from '@testing-library/react';
import StartMenu from '../../../../../src/components/windows-theme/start-bar/start-menu/StartMenu';
import { shutdownLabelText } from '../../../../../src/components/windows-theme/start-bar/start-menu-item/StartMenuItem';
import { pages } from '../../../../mocks/data-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('StartMenu component', () => {
  beforeEach(() => {
    render(<StartMenu pages={pages} />);
  });

  it('renders "Windows98" sidebar', () => {
    const element = document.getElementById('start-menu') as HTMLDivElement;

    expect(element).toHaveTextContent('Windows98');
  });

  it('renders correct menu items', () => {
    const page = pages[1];
    const element = document.getElementById(page.menuItemButtonId ?? '') as HTMLLabelElement;
    const shutdownElement = document.getElementById('shutdown-menu-item') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(page.label);

    expect(shutdownElement).toBeInTheDocument();
    expect(shutdownElement).toHaveTextContent(shutdownLabelText);
  });
});
