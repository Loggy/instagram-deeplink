[![Codecov Coverage](https://img.shields.io/codecov/c/github/Loggy/instagram-deeplink/master.svg?style=flat-square)](https://codecov.io/gh/Loggy/instagram-deeplink/)
# Instagram Deeplink

## Install
```
npm i instagram-deeplink
```

## Usage

This package is a simple express middleware:
```js
import * as express from 'express';
import { instagramDeeplink } from 'instagram-deeplink';

const app = express();
app.use('/insta', instagramDeeplink);
app.listen(3000, function () {
  console.log('Try to visit http://<your_ip>:3000/insta/username from your iOS device to open @username instagram profile directly in the app');
});
```
Simple example is presented in `/service` folder.
