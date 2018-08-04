const express = require('express')
const port = 8088;
let app = express();
let router = express.Router();
router.get('/',(req,res,next)=>{
	req.url = 'index.html';
	next();
})
app.use(router);



//接口数据
//1.读取json数据
const goods = require('./data/goods.json')
const ratings = require('./data/ratings.json')
const seller = require('./data/seller.json')

let routes = express.Router();
routes.get('/goods',(req,res)=>{
	res.json(goods);
})
routes.get('/ratings',(req,res)=>{
	res.json(ratings);
})
routes.get('/seller',(req,res)=>{
	res.json(seller);
})

app.use('/api',routes);
app.use(express.static('./dist'));

module.express = app.listen(port,err=>{
	if(err){
		throw new Error(err);
		return;
	}
	console.log('http://localhost:'+port+'\n')
});
