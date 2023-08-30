import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import { useStateMock, setStateMock } from '../../mocks/use-state-mock';
import ThemeSwitch, { switchId } from '../../../src/components/theme-switch/ThemeSwitch';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('ThemeSwitch component', () => {
  const useDarkTheme = true;
  const setUseDarkTheme = setStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(<ThemeSwitch useDarkTheme={useDarkTheme} setUseDarkTheme={setUseDarkTheme} />);
  });

  it('renders switch', () => {
    const element = document.getElementById(switchId) as HTMLSpanElement;

    expect(element).toBeInTheDocument();
  });
});
