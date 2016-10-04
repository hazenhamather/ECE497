#!/usr/bin/env node
// Reads the tmp101 temperature sensor.

var i2c     = require('i2c-bus');
var fs      = require('fs');
var request = require('request');
var util    = require('util');

var filename = "/root/ECE497/hw05/keys_tmp101.json";

var bus = 2;
var tmp101 = [0x48, 0x49];
var time = 1000;    // Time between readings

var sensor = i2c.openSync(bus);

var keys = JSON.parse(fs.readFileSync(filename));
// console.log("Using: " + filename);
console.log("Title: " + keys.title);
console.log(util.inspect(keys));

var urlBase = keys.inputUrl + "/?private_key=" + keys.privateKey 
                + "&temp1=%s&temp2=%s";
                
setInterval(readTemp,1000*10); 

// var temp = [];
function readTemp() {
    var temp = [];
// Read the temp sensors
for(var i=0; i<tmp101.length; i++) {
    temp[i] = sensor.readByteSync(tmp101[i], 0x0);
    // temp[i] = Math.random();
    console.log("temp: %dC, %dF (0x%s)", temp[i], temp[i]*9/5+32, tmp101[i].toString(16));
}

// Substitute in the temperatures
var url = util.format(urlBase, temp[0], temp[1]);
console.log("url: ", url);

// Send to phant
request(url, function (err, res, body) {
    console.log("request called");
    if (!err && res.statusCode == 200) {
        console.log(body); 
    } else {
        console.log("error=" + err + " response=" + JSON.stringify(res));
    }
});
}
