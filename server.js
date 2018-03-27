const express = require('express');
const next = require('next');
const { useStaticRendering } = require('mobx-react');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

const logger = console.log;

useStaticRendering(true);

app.prepare()
.then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    logger(`> the server is running http://localhost:${port}`)
  });
})
