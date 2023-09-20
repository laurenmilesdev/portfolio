import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import StartBar, {
  startMenuDivId,
} from '../../../../src/components/windows-theme/start-bar/StartBar';
import { startButtonId } from '../../../../src/components/windows-theme/start-bar/start-button/StartButton';
import { clockId } from '../../../../src/components/windows-theme/start-bar/clock/Clock';
import { useStateMock, setStringStateMock } from '../../../mocks/use-state-mock';
import { menuItems } from '../../../mocks/data-mock';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('StartButton component', () => {
  const useDarkTheme = true;
  const setTheme = setStringStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(<StartBar menuItems={menuItems} useDarkTheme={useDarkTheme} setTheme={setTheme} />);
  });

  it('renders StartButton', () => {
    const element = document.getElementById(startButtonId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });

  it('renders StartMenu', () => {
    const element = document.getElementById(startMenuDivId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });

  it('renders Clock', () => {
    const element = document.getElementById(clockId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });
});
