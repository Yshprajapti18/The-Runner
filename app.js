import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public'), { extensions: ["html", "htm", "gif", "png"] },));

app.get('/', (req, res) => {
  const data = fs.readFileSync("./index.html");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html')
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

