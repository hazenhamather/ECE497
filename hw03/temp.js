#!/usr/bin/env node

//Hazen Hamather
//Initializing requirements
var b = require('bonescript');
var isCalled = false;
var alert1 = 'P9_23';
var alert2 = 'P9_24';


b.pinMode(alert1, b.INPUT);
b.pinMode(alert2, b.INPUT);

b.attachInterrupt(alert1, true, b.CHANGE, alertProblem)
b.attachInterrupt(alert2, true, b.CHANGE, alertProblem)

isCalled = true;
console.log("Awaiting an interrupt");

function alertProblem(x) {
    if (isCalled) {
        console.log(x.pin.key + "has detected an interrupt");
        process.exit(0);
    }
};
