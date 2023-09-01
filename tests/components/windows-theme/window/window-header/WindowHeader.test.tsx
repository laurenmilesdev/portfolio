import { render } from '@testing-library/react';
import WindowHeader, {
  headerLabelId,
  minimizeButtonId,
  closeButtonId,
} from '../../../../../src/components/windows-theme/window/window-header/WindowHeader';
import { windows } from '../../../../mocks/data-mock';

describe('WindowHeader component', () => {
  const window = windows[0];

  beforeEach(() => {
    render(<WindowHeader window={window} />);
  });

  it('renders "Address" label', () => {
    const element = document.getElementById(headerLabelId) as HTMLLabelElement;

    expect(element).toHaveTextContent(window.title);
  });

  it('renders minimize button', () => {
    const element = document.getElementById(minimizeButtonId) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
  });

  it('renders close button', () => {
    const element = document.getElementById(closeButtonId) as HTMLLabelElement;

    expect(element).toBeInTheDocument();
  });
});
