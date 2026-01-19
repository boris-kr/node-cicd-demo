const express = require('express');
const app = express();

const VERSION = process.env.APP_VERSION || 'dev';

app.get('/', (req, res) => {
  res.send(`Hello from Node CI/CD demo – version ${VERSION}`);
});

app.get('/healthz', (req, res) => res.send('ok'));
app.get('/readyz', (req, res) => res.send('ready'));

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
