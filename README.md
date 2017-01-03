# service-mocker-polyfills

All the polyfills you may need to run service-mocker.

## Install

```
npm i service-mocker-polyfills --save-dev
```

## Usage

```js
// make sure polyfill is imported first
import 'service-mocker-polyfills';

// other stuff
import { createClient } from 'service-mocker/client';
```

## Contents

- [`whatwg-fetch`](https://github.com/github/fetch)
- [`promise-polyfill`](https://github.com/taylorhakes/promise-polyfill)
