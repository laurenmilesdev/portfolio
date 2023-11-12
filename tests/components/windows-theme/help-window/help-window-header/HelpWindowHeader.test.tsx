import { render, screen } from '@testing-library/react';
import HelpWindowHeader, {
  inputText,
  locationDivId,
  locationText,
} from '../../../../../src/components/windows-theme/help-window/help-window-header/HelpWindowHeader';

describe('HelpWindowHeader component', () => {
  beforeEach(() => {
    render(<HelpWindowHeader />);
  });

  it('renders location div', () => {
    const element = document.getElementById(locationDivId) as HTMLDivElement;

    expect(element).toHaveTextContent(locationText);
  });

  it('renders input', () => {
    const element = screen.getByDisplayValue(inputText);

    expect(element).toBeInTheDocument();
  });
});
