#!/bin/bash

temp=$(i2cget -y 2 0x40 1 w)
echo $temp
temp=$((temp>>2))
temp=$((temp/32))
temp=$((temp*9/5))
temp=$((temp+32))
echo $temp
