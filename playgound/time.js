var moment = require('moment');

// var date = moment();

// console.log(date.format('MMM'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createAt = 1234;
var date = moment(createAt)
console.log(date.format('h :mm a'))

// var date = moment();
// console.log(date.format('h:mm A'));