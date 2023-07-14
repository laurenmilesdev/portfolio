import { SetStateAction } from 'react';

const setState = jest.fn();
export const useStateMock: any = (useState: boolean) => [useState, setState];

export function setStateMock(value: SetStateAction<boolean>): void {
  throw new Error('Function not implemented.');
}
