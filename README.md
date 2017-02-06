# service-mocker-polyfills

All the polyfills you may need to run service-mocker.

## Install

```
npm i service-mocker-polyfills --save-dev
```

## Usage

### Import all polyfills

```js
// make sure polyfill is imported first
import 'service-mocker-polyfills';

// other stuff
import { createClient } from 'service-mocker/client';
```

### Import specific polyfill

```js
import 'service-mocker-polyfills/promise';
import 'service-mocker-polyfills/fetch';
import 'service-mocker-polyfills/url';
```

## Contents

- [whatwg-fetch](https://github.com/github/fetch)
- [promise-polyfill](https://github.com/taylorhakes/promise-polyfill)
- [url-polyfill](https://github.com/webcomponents/URL)
