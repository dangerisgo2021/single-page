import path from 'path';
import fs from 'fs';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { Client, reduxConfig, renderHtml } from '../../client';

import {
  universalReduxRenderer,
  logError,
  error404,
} from '../middleware';

export function createServer() {

  const app = express();

  app.use(cors());

  // set morgan logger
  app.use(logger('dev'));

  //helmet security
  app.use(helmet());

  // set parsers
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.get('/api', (req, res) => res.send('api called'));
  console.log('__dirname', __dirname)
  console.log('path.join(', path.join(__dirname, 'public'))
  app.use('/static', express.static('/home/clark/production/redux-server/public'), error404);

  app.get('/*', universalReduxRenderer(Client, renderHtml, { ...reduxConfig }));

  //Set Error handling last
  app.use(logError);
  app.use(error404);

  return app;

}
