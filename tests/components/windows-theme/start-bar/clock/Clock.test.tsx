import { render } from '@testing-library/react';
import Clock, {
  clockId,
  getCurrentTimeString,
} from '../../../../../src/components/windows-theme/start-bar/clock/Clock';

const currentTime = new Date(2023, 7, 30, 16, 4);
const expectedTimeString = '4:04 PM';

describe('getCurrentTimeString', () => {
  it('formats time into string', () => {
    const response = getCurrentTimeString(currentTime);

    expect(response).toEqual(expectedTimeString);
  });
});

describe('Clock component', () => {
  it('renders current time', () => {
    render(<Clock currentTime={currentTime} />);

    const element = document.getElementById(clockId) as HTMLDivElement;

    expect(element).toHaveTextContent(expectedTimeString);
  });
});
