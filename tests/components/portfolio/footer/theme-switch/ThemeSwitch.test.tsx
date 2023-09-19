import React, { Dispatch } from 'react';
import { render } from '@testing-library/react';
import {
  useStateMock,
  setBoolStateMock,
  setStringStateMock,
} from '../../../../mocks/use-state-mock';
import ThemeSwitch, {
  switchId,
} from '../../../../../src/components/portfolio/footer/theme-switch/ThemeSwitch';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('ThemeSwitch component', () => {
  const useDarkTheme = true;
  const setUseDarkTheme = setBoolStateMock;
  const setTheme = setStringStateMock;

  beforeEach(() => {
    jest
      .spyOn(React, 'useState')
      .mockImplementation(useStateMock as () => [unknown, Dispatch<unknown>]);

    render(
      <ThemeSwitch
        useDarkTheme={useDarkTheme}
        setUseDarkTheme={setUseDarkTheme}
        setTheme={setTheme}
      />
    );
  });

  it('renders switch', () => {
    const element = document.getElementById(switchId) as HTMLSpanElement;

    expect(element).toBeInTheDocument();
  });
});
