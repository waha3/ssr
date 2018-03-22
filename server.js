const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

const logger = console.log;

app.prepare()
.then(() => {
  const server = express();

  server.get('/a', (req, res) => {
    return app.render(req, res, '/a', req.query);
  })

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
