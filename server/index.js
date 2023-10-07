import express from 'express';
import cors from 'cors';

import fs from 'fs';

const app = express();
app.use(cors());
const pathToData = new URL('data/data.json', import.meta.url);

const data = JSON.parse(fs.readFileSync(pathToData));

app.get('/api/v1/tree', (_, res) => {
  setTimeout(() => {
    res.json(data);
  }, 300);
});

app.listen(3001, (_) => {
  console.log('API server running on localhost:3001');
});
