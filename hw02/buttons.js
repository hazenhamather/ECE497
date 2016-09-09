#!/usr/bin/env node
var b = require('bonescript');
console.log("hello");
var state1 = 0;
var state2 = 0;
var state3 = 0;
var state4 = 0;

var button1 = 'P9_11';
var button2 = 'P9_13';
var button3 = 'P9_15';
var button4 = 'P9_17';

var led1 = 'P9_21';
var led2 = 'P9_23';
var led3 = 'P9_25';
var led4 = 'P9_27';

b.pinMode(led1, b.OUTPUT);
b.pinMode(led2, b.OUTPUT);
b.pinMode(led3, b.OUTPUT);
b.pinMode(led4, b.OUTPUT);

b.pinMode(button1, b.INPUT ,7, 'pulldown');
b.pinMode(button2, b.INPUT, 7, 'pulldown');
b.pinMode(button3, b.INPUT, 7, 'pulldown');
b.pinMode(button4, b.INPUT, 7, 'pulldown');

b.attachInterrupt(button1, true, b.CHANGE, lightUp1);
b.attachInterrupt(button2, true, b.CHANGE, lightUp2);
b.attachInterrupt(button3, true, b.CHANGE, lightUp3);
b.attachInterrupt(button4, true, b.CHANGE, lightUp4);

function lightUp1(x) {
	console.log("Button 1 has been pressed");
	if (state1 === 0) {
		state1 = 1;
	}else{
		state1 = 0;
	}
	b.digitalWrite(led1,state1);
}

function lightUp2(x) {
	if (state2 === 0) {
		state2 = 1;
	}else{
		state2 = 0;
	}
	b.digitalWrite(led2,state2);
}

function lightUp3(x) {
	if (state3 === 0) {
		state3 = 1;
	}else {
		state3 = 0;
	}
	b.digitalWrite(led3, state3);
}

function lightUp4(x) {
	if (state4 === 0) {
		state4 = 1;
	}else{
		state4 = 0;
	}
	b.digitalWrite(led4, state4);
}
