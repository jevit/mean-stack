//app.model.todo
var mongoose = require('mongoose');
module.exports = mongoose.model('poi', {
	nom : String,
	lat : Number,
	lng : Number
});