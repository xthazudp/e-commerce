const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const userRoutes = require('./routes/userRoute');

// app
const app = express();

// db
mongoose.connect(process.env.DATABASE,{
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
}).then(function(){
	console.log('DB connected');
})

// routes middleware
// app.get('/', function (req, res) {
// 	res.send('Hello from node.')
// });

app.use('/api',userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, function(req,res){
	console.log(`Server is running at port ${port}`);
	console.log('Press CTRL+C to exit');
});