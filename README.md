# useStateWithCallback React Hook

[![Build Status](https://travis-ci.org/the-road-to-learn-react/use-state-with-callback.svg?branch=master)](https://travis-ci.org/the-road-to-learn-react/use-state-with-callback) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-learn-react/use-state-with-callback.svg)](https://greenkeeper.io/) [![Coverage Status](https://coveralls.io/repos/github/the-road-to-learn-react/use-state-with-callback/badge.svg?branch=master)](https://coveralls.io/github/the-road-to-learn-react/use-state-with-callback?branch=master) ![NPM](https://img.shields.io/npm/l/use-state-with-callback.svg)

Custom hook to include a callback function for useState which was previously available for setState in class components. [Read more about it here.](https://www.robinwieruch.de/react-usestate-callback/)

## Installation

`npm install use-state-with-callback`

## Usage

```
import React from 'react';

import useStateWithCallback from 'use-state-with-callback';

// import { useStateWithCallbackInstant } from 'use-state-with-callback';

const App = () => {
  const [count, setCount] = useStateWithCallback(0, count => {
    if (count > 1) {
      console.log('render, then callback.');
      console.log('otherwise use useStateWithCallbackInstant()');
    }
  });

  // const [count, setCount] = useStateWithCallbackInstant(0, count => {
  //   if (count > 1) {
  //     console.log('render with instant callback.');
  //   }
  // });

  return (
    <div>
      {count}

      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};
```

## Contribute

* `git clone git@github.com:the-road-to-learn-react/use-state-with-callback.git`
* `cd use-state-with-callback`
* `npm install`
* `npm run test`

### More

* [Publishing a Node Package to NPM](https://www.robinwieruch.de/publish-npm-package-node/)
* [Node.js Testing Setup](https://www.robinwieruch.de/node-js-testing-mocha-chai/)
* [React Testing Setup](https://www.robinwieruch.de/react-testing-tutorial/)
