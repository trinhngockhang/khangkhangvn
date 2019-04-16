var express = require('express');
var app = express();
var path = require("path");
app.set("view engine","ejs");
app.set("vỉews","./views");
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 1200;


app.get('/',(req,res) =>{
	res.render("trangchu.ejs");
})

app.get('/cv',(req,res) =>{
	//res.sendFile(path.join(__dirname, '../public', 'CV_TrinhKhang.pdf'));
	res.sendFile(`${__dirname}/public/CV_TrinhKhang.pdf`);
})

app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Server listening on ${PORT}`);
});
