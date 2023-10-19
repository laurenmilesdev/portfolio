import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import StartButton, {
  startButtonId,
} from '../../../../../src/components/windows-theme/start-bar/start-button/StartButton';
import { useStateMock, setBoolStateMock } from '../../../../mocks/use-state-mock';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('StartButton component', () => {
  const showStartMenu = true;
  const setShowStartMenu = setBoolStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(<StartButton showStartMenu={showStartMenu} setShowStartMenu={setShowStartMenu} />);
  });

  it('renders button', () => {
    const element = document.getElementById(startButtonId) as HTMLButtonElement;

    expect(element).toBeInTheDocument();
  });
});
