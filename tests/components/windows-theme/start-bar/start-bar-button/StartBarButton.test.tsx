import { render } from '@testing-library/react';
import StartBarButton from '../../../../../src/components/windows-theme/start-bar/start-bar-button/StartBarButton';
import { pages } from '../../../../mocks/data-mock';

describe('StartBarButton component', () => {
  it('renders null if index is 0', () => {
    const page = pages[0];

    render(<StartBarButton page={page} index={0} />);

    const element = document.getElementById(page.startBarButtonId ?? '') as HTMLButtonElement;

    expect(element).toEqual(null);
  });

  it('renders button if index is not 0', () => {
    const page = pages[1];

    render(<StartBarButton page={page} index={1} />);

    const element = document.getElementById(page.startBarButtonId ?? '') as HTMLButtonElement;

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(page.label);
  });
});
