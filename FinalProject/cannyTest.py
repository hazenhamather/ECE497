import cv2
import numpy as np 
from matplotlib import pyplot as plt 
import freenect

def get_video():
    array,_ = freenect.sync_get_video()
    array = cv2.cvtColor(array,cv2.COLOR_RGB2BGR)
    return array

# while(1):
frame = get_video()
frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
edges = cv2.Canny(frame,100,200)

plt.subplot(121),plt.imshow(frame,cmap = 'gray')
plt.title('Original Image'),plt.xticks([]),plt.yticks([])
plt.subplot(122),plt.imshow(edges,cmap = 'gray')
plt.title('Edge Image'),plt.xticks([]),plt.yticks([])

plt.show()
k = cv2.waitKey(5) & 0xFF
	# if k == 27:
		# break
# cv2.destroyAllWindows()