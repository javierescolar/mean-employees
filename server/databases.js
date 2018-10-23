const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-employees'
mongoose.connect(URI,{useNewUrlParser:true})
    .then(db=>console.log('DB is connect'))
    .catch(err=> console.log(err));
module.exports = mongoose;