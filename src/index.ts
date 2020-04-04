import { Request, Response, NextFunction } from 'express';
import { isIOS, deeplinkConverter } from './utils';

const instagramDeeplink = (req: Request, res: Response, next: NextFunction): void => {
  const userAgent = req.header('user-agent');
  if (userAgent && isIOS(userAgent)) {
    res.redirect(deeplinkConverter(req.path));
  } else {
    res.redirect(`https://instagram.com${req.path}`);
  }
};

export { instagramDeeplink };
