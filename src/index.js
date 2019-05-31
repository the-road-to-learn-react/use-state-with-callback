import { useState, useEffect, useLayoutEffect } from 'react';

const useStateWithCallbackBlueprint = effect => (
  initialState,
  callback,
) => {
  const [state, setState] = useState(initialState);

  effect(() => callback(state), [state, callback]);

  return [state, setState];
};

const useStateWithCallback = useStateWithCallbackBlueprint(useEffect);
const useStateWithCallbackInstant = useStateWithCallbackBlueprint(
  useLayoutEffect,
);

export { useStateWithCallbackInstant };

export default useStateWithCallback;
