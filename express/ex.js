//@ts-check
const express = require('express');
const app = express();
const PORT = 5500;

app.get(
  '/email/:email/password/:password/name/:name/gender/:gender',
  (req, res) => {
    console.log(req.params);
    res.send(req.params);
  }
);

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중입니다..`);
});
