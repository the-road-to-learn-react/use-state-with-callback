# useCombinedReducers React Hook

[![Build Status](https://travis-ci.org/the-road-to-learn-react/use-combined-reducers.svg?branch=master)](https://travis-ci.org/the-road-to-learn-react/use-combined-reducers) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-learn-react/use-combined-reducers.svg)](https://greenkeeper.io/) [![Coverage Status](https://coveralls.io/repos/github/the-road-to-learn-react/use-combined-reducers/badge.svg?branch=master)](https://coveralls.io/github/the-road-to-learn-react/use-combined-reducers?branch=master) ![NPM](https://img.shields.io/npm/l/use-combined-reducers.svg)

Custom hook to combine all useReducer hooks for one global state container with one dispatch function. Use at top-level and pass dispatch function (and state) down via React's Context API with Provider and Consumer/useContext.

* [Example Application](https://github.com/the-road-to-learn-react/react-with-redux-philosophy)
* ["How to implement it"-tutorial](https://www.robinwieruch.de/redux-with-react-hooks/).
* Requirements: [reducer](https://www.robinwieruch.de/javascript-reducer/) and [useReducer](https://www.robinwieruch.de/react-usereducer-hook/) explained.

## Installation

`npm install use-combined-reducers`

## Usage

Create a global dispatch function and state object by initializing multiple `useReducer` hooks in `useCombinedReducers`:

```
import React from 'react';
import useCombinedReducers from 'use-combined-reducers';

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    myTodos: React.useReducer(todoReducer, initialTodos),
    myOtherStuff: React.useReducer(stuffReducer, initialStuff),
  });

  const { myTodos, myOtherStuff } = state;

  ...
}

export default App;
```

You can pass state and dispatch function down via [props](https://www.robinwieruch.de/react-pass-props-to-component/) or [React's Context API](https://www.robinwieruch.de/react-context-api/). Since passing it down with props is straight forward, the approach with context is demonstrated here. In some file:

```
import React from 'react';

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();
```

In your top-level React component (or any other component above a component tree which needs managed state):

```
import React from 'react';
import useCombinedReducers from 'use-combined-reducers';

import { StateContext, DispatchContext } from './somefile.js'; 

const App = () => {
  const [state, dispatch] = useCombinedReducers({
    myTodos: React.useReducer(todoReducer, initialTodos),
    myOtherStuff: React.useReducer(stuffReducer, initialStuff),
  });

  return (
    <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <SomeComponent />
        </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
```

In some other component which sits below the state/dispatch providing component:

```
import React from 'react';

import { StateContext, DispatchContext } from './somefile.js'; 

export default () => {
  const state = React.useContext(StateContext);
  const dispatch = React.useContext(DispatchContext);
  
  const { myTodos, myOtherStuff } = state; 

  return (
    <div>
      ...
    </div>
  );
};
```

## Contribute

* `git clone git@github.com:the-road-to-learn-react/use-combined-reducers.git`
* `cd use-combined-reducers`
* `npm install`
* `npm run test`

### More

* [Publishing a Node Package to NPM](https://www.robinwieruch.de/publish-npm-package-node/)
* [Node.js Testing Setup](https://www.robinwieruch.de/node-js-testing-mocha-chai/)
