import React from 'react';

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

export { useStateWithCallbackInstant };

export default useStateWithCallback;
