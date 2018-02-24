// 01 - Exploring Async.js - async.parallel 

var async = require('async');
var stack1 = [];

var functionOne = function(callback) {
    callback(null, "Results from functionOne");
}
var functionTwo = function(callback) {
    callback(null, "Results from functionTwo");
}
var functionThree = function(callback) {
    // callback(null, "Results from functionThree");
    callback('ERROR', null);
}

stack1.push(functionOne);
stack1.push(functionTwo);
stack1.push(functionThree);

async.parallel(stack1, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("result", result);
});

/***************** D E M O   W I T H   O B J E C T *****************/

var async = require('async');
var stack2 = {};

stack2.getName = function(callback) {
    getName = 'Souvik';
    callback(null, getName);
}
stack2.getAge = function(callback) {
    getAge = 35;
    callback(null, getAge);
}
stack2.getGender = function(callback) {
    getGender = 'Male';
    callback(null, getGender);
    // callback('ERROR', null);
}

async.parallel(stack2, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("result", result);
});