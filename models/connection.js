require("dotenv").config();
const{MONGODB_URL} = process.env;//process.env is an object
//{PORT:$)))< MONGO_URL: 'mongodb://localhost:27017/animals'}
const mongoose = require("mongoose");

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL)

mongoose.connection
.on('open',() =>console.log('you are connected'))
.on('close',() =>console.log('you are disconnected'))
.on('error',() =>console.log(error))
module.exports =mongoose;
//something.methodname(0)
//methd is a function attached to an...