import * as express from 'express';
import { instagramDeeplink } from '../lib/index';

const app: express.Application = express();
app.use('/insta', instagramDeeplink);
app.listen(3000, function () {
  console.log('Try to visit http://<your_ip>:3000/insta/username from your iOS device to open @username instagram profile directly in the app');
});
