//@ts-check
const express = require('express');
const router = express.Router();

const Posts = [
  {
    title: '타이틀1',
    content: '컨텐츠1',
  },
  {
    title: '타이틀2',
    content: '컨텐츠2',
  },
];

router.get('/', (req, res) => {
  res.render('posts.ejs', { Posts, postsCounts: Posts.length });
  //render 그려준다
});

router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPosts = {
        title: req.body.title,
        content: req.body.content,
      };
      Posts.push(newPosts);
      res.redirect('/posts');
    } else {
      const err = new Error('홈 데이터 입력을 확인 하세요');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('홈 데이터 입력을 확인 하세요');
    err.statusCode = 400;
    throw err;
  }
  // if (req.body) {
  //   const newPosts = {
  //     title: req.body.title,
  //     content: req.body.content,
  //   };
  //   Posts[Posts.length] = newPosts;
  //   // 객체 맨 뒤에 새로운 변수를 추가하겠다.
  //   res.redirect('/posts');
  // } else {
  //   const err = new Error('에러입니다');
  //   err.statusCode = 400;
  //   throw err;
  // }
});

module.exports = router;
//라우터를 밖으로 빼준다
