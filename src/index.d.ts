import { SetStateAction, Dispatch } from 'react';

type DispatchWithCallback<A, S> = (
  value: A,
  callback: Callback<S>,
) => void;

type Callback<S> = (state: S) => void | (() => void | undefined);

declare function useStateWithCallback<S>(
  initialState: S,
  callback: Callback<S>,
): [S, Dispatch<SetStateAction<S>>];

export declare function useStateWithCallbackInstant<S>(
  initialState: S,
  callback: Callback<S>,
): [S, Dispatch<SetStateAction<S>>];

export declare function useStateWithCallbackLazy<S>(
  initialState: S,
): [S, DispatchWithCallback<SetStateAction<S>, S>];

export default useStateWithCallback;
