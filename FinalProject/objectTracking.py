import cv2
import numpy as np 
import freenect

cap = cv2.VideoCapture(0)

def get_video():
    array,_ = freenect.sync_get_video()
    array = cv2.cvtColor(array,cv2.COLOR_RGB2BGR)
    return array

while(1):
	#Take each frame
	# _, frame = cap.read()
	frame = get_video();

	#Convert BGR to HSV
	hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

	#define range of blue color in HSV
	lower_blue = np.array([110,50,50]);
	upper_blue = np.array([130,255,255])

	#Threshold the HSV image to get only the blue colors
	mask = cv2.inRange(hsv,lower_blue,upper_blue)

	#Bitwise-and mask and original image
	res = cv2.bitwise_and(frame,frame,mask=mask)

	cv2.imshow('frame', frame)
	cv2.imshow('mask', mask)
	cv2.imshow('res', res)
	k = cv2.waitKey(5) & 0xFF
	if k == 27:
		break
cv2.destroyAllWindows()