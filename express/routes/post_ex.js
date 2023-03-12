const express = require('express');
const router = express.Router();

const post = [
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
  res.render('post_ex.ejs', { post });
});

router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPosts = {
        title: req.body.title,
        content: req.body.content,
      };
      post[post.length] = newPosts;
      res.redirect('/post');
    } else {
      const err = new Error('입력이 잘못 되었습니다');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('입력이 잘못 되었습니다');
    err.statusCode = 400;
    throw err;
  }
});

router.delete('/delete/:title', (req, res) => {
  const postIndex = post.findIndex(
    (postdata) => postdata.title === req.params.title
  );
  //findIndex의 메소드로 postdata를 인자 값으로 넘겨 req.params.title과 일치하는 title을 찾아본다.
  //findINdex의 메소드는 일치하는 것이 있다면 해당 인덱스를 리턴해주고
  //일치하는 것이 없다면 -1를 리턴한다. 밑의 -1과 postIndex를 비교해주는 이유에 해당한다.
  if (postIndex !== -1) {
    post.slice(postIndex, 1);
    //해당 title을 가진 post의 요소를 삭제
    res.send('삭제 완료');
  } else {
    const err = new Error('post에 일치하는 title 없음, 삭제 실패');
    err.statusCode = 400;
    throw err;
  }
  res.redirect('/post');
});

module.exports = router;
//router을 모듈화 하여 exports
//app.js pageRouter로 import
