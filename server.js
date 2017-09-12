var express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public/dist')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js')(app);

app.all("*", (req, res, next) => {
		res.sendfile(path.resolve("./public/dist/index.html"))
	})

app.listen(1337, () => {
	console.log("listening on port 1337");
});
