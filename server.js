const express = require('express');

const app = express();

app.use(express.static('./dist/slack-cleaner'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/slack-cleaner/index.html'}),
);

app.listen(process.env.PORT || 8080);
