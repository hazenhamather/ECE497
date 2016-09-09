#!/usr/bin/env node
var b = require('bonescript');
var LED = 'P9_21';
var state = b.HIGH;
b.pinMode(LED, b.OUTPUT);

setInterval(flash, 250);

function flash() {
	b.digitalWrite(LED, state);
	if (state === b.HIGH) {
		state = b.LOW;
	}else {
		state = b.HIGH;
	}
}
