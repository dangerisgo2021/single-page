import lodash from 'lodash';
import http from 'http';

import { createServer } from './config/server';

console.log('starting server');

//make lodash util globally available
global._ = lodash;

const port = process.env.PORT || 3000;
const server = http.Server(createServer());

server.listen(port, (err) => {

  if (err) {
    return console.error(err);
  }

  console.info(`Server running on http://localhost:${port}`);

});

