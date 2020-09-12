import React, {SetStateAction, Dispatch} from 'react';

type DispatchWithCallback<A> = (value: A, callback: Callback) => void;

type Callback<S> = (state:s) => (void | (() => void | undefined));


declare function useStateWithCallback<S>(initialState:S,callback:Callback) : [S,Dispatch<SetStateAction<S>>];

export declare function useStateWithCallbackInstant<S>(initialState:S,callback:Callback) : [S,Dispatch<SetStateAction<S>>];


export declare function useStateWithCallbackLazy<S>(initialState:S) : [S,DispatchWithCallback<SetStateAction<S>>];


export default useStateWithCallback;