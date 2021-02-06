import express from 'express';
import chalk from 'chalk';
import starRoute from './star-handler';
import serialize from 'serialize-javascript';
import configureStore from '../store/configure-store';
import {renderToString} from 'react-dom/server';
import React from 'react';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import App from '../client/app';
import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';


var debug = require('debug')('server');
var app = express();
var initialData = {
  app: {
    name: 'test-lab-client',
    creator: 'Christian Wilkerson'
  },
  persons: []
};

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/public', express.static('./dist/client'));

app.get('/', (req, res) => {
  debug('root route hit');
  const store = configureStore(initialData);
  const context = {};
  const markup = renderToString(
              <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                  <App/>
                </StaticRouter>
              </Provider>
            );

  fs.readFile('./dist/server/index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.send(`server error - ${err}`);
    } else {
      res.send(data.toString('utf8').
        replace('{{markup}}', markup).
        replace('{{initialData}}', serialize(initialData)));
    }
  });
});

app.get('/getTime', (req, res) => {
  const time = new Date();

  process.stdout.write(`${chalk.bold.green('getTime Called')} - ` +
                       `${chalk.reset(time)} ${chalk.white(' - sent')}\n`);
  res.send({time});
});

app.post('/postPerson', (req, res) => {
  const person = Object.assign({}, req.body, {stamp: new Date()});

  process.stdout.write(`${chalk.green('postPerson called')} -` +
                       ` ${chalk.whiteBright(serialize(req.body))} \n`);

  /* eslint-disable no-undefined */
  process.stdout.write(`${chalk.bold.green('postPerson Called')} - ` +
                       `${chalk.reset(JSON.stringify(person, undefined, 2))}` +
                       ` ${chalk.white(' - sent')}\n`);
  /* eslint-enable no-undefined */
  res.statusCode = 201;
  res.setHeader('Content-Type', 'application/json');
  res.send(person);
});

app.use('/public', express.static('./dist'));
app.use('/public/css', express.static('./dist/client/css/client'));

app.get('*', (req, res) => {
  debug('1 star route hit - path', {path: req.path});

  res.send(starRoute(`${req.path} not found`));
});

const server = app.listen(3000, () => {
  process.stdout.write(chalk.blueBright(`process path ${process.cwd()}\n`));
  process.stdout.write(chalk.yellow('public directory is '));
  process.stdout.write(chalk.yellow.bold(`${path.join(__dirname,
                                         'client')}\n`));
  process.stdout.write(chalk.green('listening on port: '));
  process.stdout.write(chalk.green.bold('3000\n'));
});

export {app};
export default server;