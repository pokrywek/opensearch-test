import chalk from 'chalk';
import { RequestHandler, Response, Request } from 'express';

const logRequest = (req: Request) => {
  const headers = JSON.stringify(req.headers, null, 2)
  console.log(`>>> ${req.method} ${req.url}\nheaders: ${headers}`);
}

const logResponse = (req: Request, res: Response) => {
  res.on('finish', () => {
    if (res.statusCode < 300) {
      console.log(`<<< ${chalk.green(req.method)} ${req.originalUrl} - ${res.statusCode} ${res.statusMessage}`);
    } else if (res.statusCode < 400) {
      console.log(`<<< ${chalk.blue(req.method)} ${req.originalUrl} - ${res.statusCode} ${res.statusMessage}`);
    } else {
      console.log(`<<< ${chalk.red(req.method)} ${req.originalUrl} - ${res.statusCode} ${res.statusMessage}`);
    }
  });
}

export const logger = (): RequestHandler => {
  return (req, res, next) => {
    logRequest(req);
    logResponse(req, res);
    next();
  };
};
