#!/usr/bin/env node

//Hazen Hamather
//Initializing requirements
// var i2c = require('i2c');
console.log("1");
var b = require('bonescript');
console.log("2");
// var port = '/dev/i2c-2';
console.log("3");

var alert1 = 'P9_23';
console.log("4");
var alert2 = 'P9_24';
console.log("5");

b.pinMode(alert1, b.INPUT);
console.log("6");
b.pinMode(alert2, b.INPUT);
console.log("7");

b.attachInterrupt(alert1, true, b.CHANGE, alert1Problem)
console.log("8");
b.attachInterrupt(alert2, true, b.CHANGE, alert2Problem)
console.log("9");

console.log("pinModes set");

function alert1Problem(x) {
    if (x.attached === true) {
        console.log("Temp sensor 1 out of range");
    }
};

function alert2Problem(x) {
    if (x.attaached === true) {
        console.log("Temp sensor 2 out of range");
    }
};