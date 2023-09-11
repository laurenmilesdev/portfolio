import { render } from '@testing-library/react';
import StartBarButton from '../../../../../src/components/windows-theme/start-bar/start-bar-button/StartBarButton';
import { windows } from '../../../../mocks/data-mock';

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img {...props} />,
}));

describe('StartBarButton component', () => {
  const window = windows[0];

  beforeEach(() => {
    render(<StartBarButton window={window} />);
  });

  it('renders button', () => {
    const element = document.getElementById(window.startBarButtonId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(window.title);
  });
});
