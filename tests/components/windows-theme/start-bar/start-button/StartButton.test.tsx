import { render } from '@testing-library/react';
import StartButton, {
  buttonId,
} from '../../../../../src/components/windows-theme/start-bar/start-button/StartButton';

describe('StartButton component', () => {
  beforeEach(() => {
    render(<StartButton />);
  });

  it('renders button', () => {
    const element = document.getElementById(buttonId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });
});
