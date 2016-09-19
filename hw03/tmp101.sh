#!/bin/bash
#This is the shell file for the two TMP101 temperature sensors
#I collaborated with Sabeeh Khan for this portion of the homework.

#Setting up alerts (thermostat mode)[Polarity and thermostat high]
i2cset -y 2 0x48 0x00
i2cset -y 2 0x49 0x00

#i2cset -y 2 0x48 0x01 0x02
#i2cset -y 2 0x49 0x01 0x02

#i2cset -y 2 0x48 0x04 0x01
#i2cset -y 2 0x49 0x04 0x01

# #Setting high and low temps for both pieces
i2cset -y 2 0x48 0x02 0x15 #Setting Low 
i2cset -y 2 0x48 0x03 0x1a #Setting High

i2cset -y 2 0x49 0x02 0x15 #Setting Low
i2cset -y 2 0x49 0x03 0x1a #Setting High

#Pointing registers back to thermostat
i2cset -y 2 0x48 0x00
i2cset -y 2 0x49 0x00

#i2cget -y 2 0x48
#i2cget -y 2 0x49

node temp.js
