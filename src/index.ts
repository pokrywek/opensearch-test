import express from 'express';
import * as config from '../config.json';
import { logger } from './logger';
import { descriptionHandler, searchHandler } from './handlers';

const app = express();
// const port = config.port;
const port = process.env.PORT;

app.use(logger());
app.get("/description", descriptionHandler(config.baseUrl));
app.get("/search", searchHandler(config.baseUrl));
app.all('*', (_, res) => {
  res
    .status(404)
    .send("Not founds");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
console.log('hello');