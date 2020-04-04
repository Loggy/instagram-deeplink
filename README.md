[![Codecov Coverage](https://img.shields.io/codecov/c/github/Loggy/instagram-deeplink/master.svg?style=flat-square)](https://codecov.io/gh/Loggy/instagram-deeplink/)
# Instagram Deeplink

## Installation
```
npm i instagram-deeplink
```

## Usage
1. Add this middleware:
```js
app.use('/insta', instagramDeeplink);
```
2. Chill 😎.

*You can skip first argument to make middleware work from root path*

### How it works
| Content type   | User visits   |      iOS      |  Others |
|:------------|:--------|:-------------|:------|
| **Profile**| https://your_host.com/insta/username |  instagram://user?username=username | https://instagram.com/username |
| **Post**| https://your_host.com/insta/p/B6f78z7jr42/ |    instagram://media?id=B6f78z7jr42   |  https://instagram.com/p/B6f78z7jr42/  |
| **Hashtag**| https://your_host.com/insta/explore/tags/js/ |    instagram://tag?name=js   |  https://instagram.com/explore/tags/js/  |
| **Location**| https://your_host.com/insta/explore/locations/213174824/ |    instagram://location?id=213174824   |  https://instagram.com/explore/locations/213174824/  |

## Example
Simple example is provided in `/service` folder.

```js
import * as express from 'express';
import { instagramDeeplink } from 'instagram-deeplink';

const app = express();
app.use('/insta', instagramDeeplink);
app.listen(3000, function () {
  console.log('Try to visit http://<your_ip>:3000/insta/username from your iOS device to open @username instagram profile directly in the app');
});
```
