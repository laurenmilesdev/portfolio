import { render } from '@testing-library/react';
import WindowHeader from '../../../../../src/components/windows-theme/window/window-header/WindowHeader';
import PageModel from '../../../../../src/models/component-helpers/page';

describe('WindowHeader component', () => {
  const page = new PageModel('Page', <>Page</>);

  beforeEach(() => {
    render(<WindowHeader page={page} />);
  });

  it('renders "Address" label', () => {
    const element = document.getElementById('window-header-label') as HTMLLabelElement;

    expect(element).toHaveTextContent(page.label);
  });

  it('renders minimize button', () => {
    const element = document.getElementById('window-header-minimize-btn') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
  });

  it('renders close button', () => {
    const element = document.getElementById('window-header-close-btn') as HTMLLabelElement;

    expect(element).toBeInTheDocument();
  });
});
