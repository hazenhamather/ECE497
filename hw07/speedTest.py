import Adafruit_BBIO.GPIO as GPIO

inputPin = "P9_28"
outputPin = "P9_27"
GPIO.setup(inputPin, GPIO.IN)
GPIO.setup(outputPin, GPIO.OUT)
GPIO.add_event_detect(inputPin, GPIO.BOTH)

while 1:
    
    if GPIO.event_detected(inputPin):
        if GPIO.input(inputPin):
            GPIO.output(outputPin, GPIO.LOW)
            print "Low!"
        else:
            GPIO.output(outputPin, GPIO.HIGH)
            print "High!"