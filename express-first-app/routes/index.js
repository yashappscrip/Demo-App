var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express JS Title' });
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/details', function(req, res, next) {
  res.send('respond with a detail');
});
router.get('/demo/:id',function(req,res,next){
  res.render('demo',{output:req.params.id});
});
module.exports = router;