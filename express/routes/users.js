//@ts-check
const express = require('express');
const router = express.Router();

const USER = {
  1: {
    id: 'tetz',
    name: '이효석',
  },
};
const USER_ARR = [
  {
    id: 'tetz',
    name: '이효석',
    email: '123@naver.com',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: '123@naver.com',
  },
];

//http://localhost:4000/users
router.get('/', (req, res) => {
  res.render('users', { USER_ARR, userCounts: USER_ARR.length });
});

//파라미터
router.get('/id/:id', (req, res) => {
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID를 못찾겠어요');
  }
});

router.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name) {
    return res.send('쿼리! 입력이 잘못 되었습니다!');
  }
});

//ejs실습
router.get('/show', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello, Dynamic Web Page</h1>');

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
  }
  res.end('');
});

//localhost:4000/user/ejs
// router.get('/ejs', (req, res) => {
//   const userCounts = USER_ARR.length;
//   res.render('index', { USER_ARR, userCounts });
// });

module.exports = router;
