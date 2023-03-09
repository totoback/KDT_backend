//@ts-check
const express = require('express');

const app = express();
const PORT = 4000;

const USER = {
  1: {
    id: 'tetz',
    name: '이효석',
  },
};

const userRouter = express.Router();

//http:localhost:4000/users
//http:122.0.0.1:4000/users
app.use('/users', userRouter);

userRouter.get('/', (req, res) => {
  res.send(USER);
});

//파라미터
userRouter.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});

userRouter.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name) {
    return res.send('쿼리! 입력이 잘못 되었습니다!');
  }
  // if (req.query.id && req.query.name) {
  //   newUser = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };
  //   USER[Object.keys(USER).length + 1] = newUser;
  //   res.send('회원 등록 완료!');
  // } else {
  //   res.send('쿼리 입력이 잘못 되었습니다.');
  // }
});

app.get('/', (req, res) => {
  res.send(`Hello, Express world`);
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중!`);
});
