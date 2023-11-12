import { render } from '@testing-library/react';
import TickerTape, {
  tickerTapeDivId,
} from '../../../../src/components/portfolio/ticker-tape/TickerTape';
import TickerTapeConstants from '../../../../src/constants/ticker-tape';

describe('TickerTape component', () => {
  beforeEach(() => {
    render(<TickerTape text={TickerTapeConstants.OPEN_TO_WORK} />);
  });

  it('renders component', () => {
    const element = document.getElementById(tickerTapeDivId) as HTMLDivElement;
    const expectedResponse = TickerTapeConstants.OPEN_TO_WORK.join(' ').toString();

    expect(element).toHaveTextContent(expectedResponse);
  });
});
