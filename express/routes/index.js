const express = require('express');
//express 호출

const router = express.Router();
//router로 연결

router.get('/', (req, res) => {
  res.render('index'); //불러주세요
});

module.exports = router;
//라우터 통으로 빼기
