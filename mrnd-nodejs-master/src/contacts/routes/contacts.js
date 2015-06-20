var express = require('express');
var router = express.Router();
var con = new Array(),i = 0;
var msgs =new Array();
/* GET contacts */
router.get('/:id', function(req, res, next){
	//var id = req.params.id;
	console.log(con[req.params.id]);
	res.send(con[req.params.id]);
});

router.post('/', function(req, res, next) {
	con.push(req.body);
	//console.log(req.body);
	i+=1;
	var tmpId = (i-1)+"";
	res.send(tmpId);
});

router.put('/:id', function(req, res, next) {
	//console.log(req.body);
	if(req.body.firstName!=undefined)
		con[i-1].firstName = req.body.firstName;
	if(req.body.lastName!=undefined)
		con[i-1].lastName = req.body.lastName;
	if(req.body.phone!=undefined)
		con[i-1].phone = req.body.phone;
	res.send(con[i-1]);
});

router.post('/:id/messages', function(req, res, next) {
	//console.log(req.params.id);
	if(msgs[req.params.id] == undefined)
	{
		msgs[req.params.id] = [];
	}
	msgs[req.params.id].push(req.body);
	res.send(""+msgs.length);
});

router.get('/:id/messages',function(req,res,next){
	if(msgs[req.params.id]!=undefined)
	{
		res.send(msgs[req.params.id]);
	}
});
module.exports = router;
