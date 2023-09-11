import { render } from '@testing-library/react';
import StartButton, {
  buttonId,
} from '../../../../../src/components/windows-theme/start-bar/start-button/StartButton';
import { startMenuDivId } from '../../../../../src/components/windows-theme/start-bar/StartBar';

describe('StartButton component', () => {
  beforeEach(() => {
    render(<StartButton startMenuDivId={startMenuDivId} />);
  });

  it('renders button', () => {
    const element = document.getElementById(buttonId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });
});
