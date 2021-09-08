var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/noticias', function(req, res, next){
  
    fetch('https://api.eluniverso.arcpublishing.com/feeds/rss/?website=el-universo&query=taxonomy.sections._id:%22/entretenimiento/motores%22&sort=first_publish_date:desc')
    .then(res =>res.text())
    .then(str =>{
      res.send(str);
    })
})
module.exports = router;
