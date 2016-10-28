import Adafruit_BBIO.GPIO as GPIO
import Adafruit_BBIO.ADC as ADC
import time

rightPT = "P9_39" #right PT
leftPT = "P9_40" #left PT
A1 = "P9_11" # stepper port
A2 = "P9_13" # stepper port
A3 = "P9_15" # stepper port
A4 = "P9_16" # stepper port
startButton = "P9_12" #start button pin to begin searching

GPIO.setup(A1, GPIO.OUT) #Setting GPIOs
GPIO.setup(A2, GPIO.OUT)
GPIO.setup(A3, GPIO.OUT)
GPIO.setup(A4, GPIO.OUT)
GPIO.setup(startButton, GPIO.IN)
state = 1; #Initial state to begin

ADC.setup() #Setting up the ADC, following the rules of Adafruit
    
def setup(): #Finds the lowest reading to initially track to
    step = 0
    stepValue = 10000
    clockwise = 1;
    for i in range(20):
        oneStep(clockwise)
        rightptval = ADC.read(rightPT)
        leftptval = ADC.read(leftPT)
        ptavg = (rightptval + leftptval) / 2
        if ptavg < stepValue:
            step = i
            stepValue = ptavg
    clockwise = -1;
    for i in range(20): #resets the position of the stepper
        oneStep(clockwise)
    return step
        
def oneStep(clockwise): #controls the movement of the stepper motor
    global state
    state = state + clockwise
    if state != 1:
        if state < 1:
            state = 4
        elif state > 4:
            state = 1
    # print state
    if clockwise == 1:
        if abs(state) == 1:
            GPIO.output(A1, GPIO.HIGH)
            GPIO.output(A2, GPIO.HIGH)
            GPIO.output(A3, GPIO.LOW)
            GPIO.output(A4, GPIO.LOW)
        elif abs(state) == 2:
            GPIO.output(A1, GPIO.HIGH)
            GPIO.output(A2, GPIO.LOW)
            GPIO.output(A3, GPIO.LOW)
            GPIO.output(A4, GPIO.HIGH)
        elif abs(state) == 3:
            GPIO.output(A1, GPIO.LOW)
            GPIO.output(A2, GPIO.LOW)
            GPIO.output(A3, GPIO.HIGH)
            GPIO.output(A4, GPIO.HIGH)
        elif abs(state) == 4:
            GPIO.output(A1, GPIO.LOW)
            GPIO.output(A2, GPIO.HIGH)
            GPIO.output(A3, GPIO.HIGH)
            GPIO.output(A4, GPIO.LOW)
    if clockwise == -1:
        if abs(state) == 1:
            GPIO.output(A1, GPIO.LOW)
            GPIO.output(A2, GPIO.LOW)
            GPIO.output(A3, GPIO.HIGH)
            GPIO.output(A4, GPIO.HIGH)
        elif abs(state) == 2:
            GPIO.output(A1, GPIO.LOW)
            GPIO.output(A2, GPIO.HIGH)
            GPIO.output(A3, GPIO.HIGH)
            GPIO.output(A4, GPIO.LOW)
        elif abs(state) == 3:
            GPIO.output(A1, GPIO.HIGH)
            GPIO.output(A2, GPIO.HIGH)
            GPIO.output(A3, GPIO.LOW)
            GPIO.output(A4, GPIO.LOW)
        elif abs(state) == 4:
            GPIO.output(A1, GPIO.HIGH)
            GPIO.output(A2, GPIO.LOW)
            GPIO.output(A3, GPIO.LOW)
            GPIO.output(A4, GPIO.HIGH)
        
    time.sleep(0.05)
    
def thatDogWillHunt(): #function to continually track the IR emitter
    while True:
        rightptval = ADC.read(rightPT)
        leftptval = ADC.read(leftPT)
        if rightptval > leftptval:
            oneStep(1)
        else:
            oneStep(-1)
        
def main(): #called after the start button to begin setup and tracking
    print "Start button has been pressed!"
    strongestRead = setup()
    for i in range(strongestRead):
        oneStep(1)
    thatDogWillHunt()

while True: #initial loop to run waiting for a start button input
    GPIO.wait_for_edge(startButton, GPIO.RISING)
    main()