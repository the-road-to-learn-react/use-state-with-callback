# useStateWithCallback React Hook

[![Build Status](https://travis-ci.org/the-road-to-learn-react/use-state-with-callback.svg?branch=master)](https://travis-ci.org/the-road-to-learn-react/use-state-with-callback) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-learn-react/use-state-with-callback.svg)](https://greenkeeper.io/) ![NPM](https://img.shields.io/npm/l/use-state-with-callback.svg)

Custom hook to include a callback function for useState which was previously available for setState in class components. [Read more about it here.](https://www.robinwieruch.de/react-usestate-callback/)

## Installation

`npm install use-state-with-callback`

## Usage

**useStateWithCallback:**

```jsx
import * as React from 'react';

import useStateWithCallback from 'use-state-with-callback';

// Note: cannot be used on the server-side (e.g. Next.js)
// import { useStateWithCallbackInstant } from 'use-state-with-callback';

const App = () => {
  const [count, setCount] = useStateWithCallback(0, currentCount => {
    console.log('render, then callback.');
    console.log('otherwise use useStateWithCallbackInstant()');

    if (currentCount > 1) {
      console.log('Threshold of over 1 reached.');
    } else {
      console.log('No threshold reached.');
    }
  });

  // const [count, setCount] = useStateWithCallbackInstant(0, currentCount => {
  //   console.log('render with instant callback.');

  //   if (currentCount > 1) {
  //     console.log('Threshold of over 1 reached.');
  //   } else {
  //     console.log('No threshold reached.');
  //   }
  // });

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {count}

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default App;
```

**useStateWithCallbackLazy:**

```jsx
import * as React from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';

const App = () => {
  const [count, setCount] = useStateWithCallbackLazy(0);

  const handleClick = () => {
    setCount(count + 1, (currentCount) => {
      if (currentCount > 1) {
        console.log('Threshold of over 1 reached.');
      } else {
        console.log('No threshold reached.');
      }
    });
  };

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default App;
```

## Pitfalls

* When a state update is called with the current value and optimized away, the callback is never called.
* `useStateWithCallbackLazy` calls the callback with the scope that existed before update, while this.setState callback can access the updated this.state and `get something()` computed values. This can't be fixed, but it's a problem for people who expect a drop-in replacement.
* When `useStateWithCallbackLazy` state is updated several times with batching (e.g. in an event handler), only the last update calls the callback.

## Contribute

- `git clone git@github.com:the-road-to-learn-react/use-state-with-callback.git`
- `cd use-state-with-callback`
- `npm install`
- `npm run test`

### More

- [Publishing a Node Package to NPM](https://www.robinwieruch.de/publish-npm-package-node/)
- [Node.js Testing Setup](https://www.robinwieruch.de/node-js-testing-mocha-chai/)
- [React Testing Setup](https://www.robinwieruch.de/react-testing-tutorial/)
