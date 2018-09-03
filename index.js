var express = require('express');
var app = express();
app.set("view engine","ejs");
app.set("vỉews","./views");
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 80;


app.get('/',(req,res) =>{
	res.render("trangchu.ejs");
})



app.listen(PORT, err => {
	if (err) throw err;
	console.log(`Server listening on ${PORT}`);
});