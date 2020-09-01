import { useState, useEffect, useLayoutEffect, useRef } from 'react';

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

const useStateWithCallbackInstant = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

const useStateWithCallbackLazy = initialValue => {
  const callbackRef = useRef(null);

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(value);

      callbackRef.current = null;
    }
  }, [value]);

  const setValueWithCallback = (newValue, callback) => {
    callbackRef.current = callback;

    return setValue(newValue);
  };

  return [value, setValueWithCallback];
};

export { useStateWithCallbackInstant, useStateWithCallbackLazy };

export default useStateWithCallback;
