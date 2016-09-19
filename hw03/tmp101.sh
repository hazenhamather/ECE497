#!/bin/bash

#Initializing temperature register)
i2cset -y 2 0x48 0x00 
i2cset -y 2 0x49 0x00 

#Getting initial temperature of the ambient environment
temp1=$(i2cget -y 2 0x48)
temp2=$(i2cget -y 2 0x49)

temp1high=$((temp1 + 2))
temp2high=$((temp2 + 2))

temp1low=$((temp1 - 1))
temp2low=$((temp2 - 1))

echo 'Top sensor'
echo $temp1
echo 'Bottom sensor'
echo $temp2

#Setting Configuration Register (TM = 1, POL = 1 for active high alert pins)
i2cset -y 2 0x48 0x01 0x06
i2cset -y 2 0x49 0x01 0x06

#Temperature settings
i2cset -y 2 0x48 0x02 $temp1low #Top sensor low temperature
i2cset -y 2 0x48 0x03 $temp1high #Bottom sensor low temperature

i2cset -y 2 0x49 0x02 $temp2low #Top sensor high temperature
i2cset -y 2 0x49 0x03 $temp2high #Bottom sensor high temperature

#Point registers back
i2cset -y 2 0x48 0x00 
i2cset -y 2 0x49 0x00 

./temp.js

echo 'Top Sensor'
i2cget -y 2 0x48
echo 'Bottom sensor'
i2cget -y 2 0x49