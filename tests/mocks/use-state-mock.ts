import { SetStateAction } from 'react';

const setState = jest.fn();
export const useStateMock: any = (useState: any) => [useState, setState];

export function setBoolStateMock(value: SetStateAction<boolean>): void {
  throw new Error('Function not implemented.');
}

export function setStringStateMock(value: SetStateAction<string>): void {
  throw new Error('Function not implemented.');
}
