This is the folder containing assignments for homework 3.

The EtchaSketch game on the LED Matrix is simple to play. Simply hit run
and the code takes care of the rest. The game is an 8x8 grid and it defaults
to the color green. One of the cool features of this game is both the manual
reset as well as the self reset capability. A fifth button was wired to act
as the manual reset button and the program was also designed to self reset
after all of the tiles had been filled up, allowing the user to play as long
as desired. If I had more time to work on this, I might consider
changing the current position color if the user passes over a tile that has
already been crossed. 

The two TMP101 temperature sensors are working and are configured for 
interrupt mode. There is a main shell file that calls a javascript file
in order to process the alerts of the temperature sensors. These alerts
are seen as interrupts and the callback function prints which sensor
had the interrupt.

As far as the TMP006 goes, I was only able to read a temperature with
it. Most of my time on this assignment was spent debugging the TMP101
situation.
