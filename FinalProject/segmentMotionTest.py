import freenect
import cv2
import numpy as np
 
#function to get RGB image from kinect
def get_video():
    array,_ = freenect.sync_get_video()
    array = cv2.cvtColor(array,cv2.COLOR_RGB2BGR)
    # print len(array)
    # print array.shape()
    return array

def get_depth():
    array,_ = freenect.sync_get_depth()
    array = array.astype(np.uint8)
    return array
 
if __name__ == "__main__":
    while 1:
        #get a frame from RGB camera
        # frame = get_video()
        # frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
        #display RGB image
        frame = get_depth();

        cv2.imshow('Depth image',frame)
        # rects = cv2.segmentMotion(frame,100,5[, seg])
 
        # quit program when 'esc' key is pressed
        k = cv2.waitKey(5) & 0xFF
        if k == 27:
            break
    cv2.destroyAllWindows()