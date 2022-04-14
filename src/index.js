import * as React from 'react';

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = React.useState(initialState);

  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      callback(state);
    } else {
      didMount.current = true;
    }
  }, [state, callback]);

  return [state, setState];
};

const useStateWithCallbackInstant = (initialState, callback) => {
  const [state, setState] = React.useState(initialState);

  const didMount = React.useRef(false);

  React.useLayoutEffect(() => {
    if (didMount.current) {
      callback(state);
    } else {
      didMount.current = true;
    }
  }, [state, callback]);

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
