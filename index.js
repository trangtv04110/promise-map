var promise = require('bluebird');
var arr = [1, 2, 'ok', 3, 4];
var arrResult = [];

promise.map(arr, function(item) {
	if(!isNaN(item)) return item*item;
	return item;
}).then(function(result) {
	console.log(result);
}).catch(function(err) {
	console.error(err);
});
