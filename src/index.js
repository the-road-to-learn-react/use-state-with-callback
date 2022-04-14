import * as React from 'react';

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

const useStateWithCallbackInstant = (initialState, callback) => {
  const [state, setState] = React.useState(initialState);

  React.useLayoutEffect(() => callback(state), [state, callback]);

  return [state, setState];
};

const useStateWithCallbackLazy = initialValue => {
  const callbackRef = React.useRef(null);

  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(value);

      callbackRef.current = null;
    }
  }, [value]);

  const setValueWithCallback = React.useCallback(
    (newValue, callback) => {
      callbackRef.current = callback;

      return setValue(newValue);
    },
    [],
  );

  return [value, setValueWithCallback];
};

export { useStateWithCallbackInstant, useStateWithCallbackLazy };

export default useStateWithCallback;
