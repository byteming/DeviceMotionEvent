# DeviceMotionEvent
DeviceMotionEvent.acceleration which compensates for the influence of gravity, its value is the sum of the acceleration of the device as induced by the user and the acceleration caused by gravity.
<br>
<br>
The **DeviceMotionEvent** make web changes with the information of the devices's **positions** and **orientation**, as well as the **speed** of changes.<br>

```javascript
var acceleration = instanceOfDeviceMotionEvent.accelerationIncludingGravity;
```
[**BouncingBall.html**](https://github.com/Mira-Qiu/DeviceMotionEvent/blob/master/BouncingBall.html) code is using **DeviceMotionEvent** function:<br>
<br>
**Drop**: The white ball will drop and buncing via gravity sensitive whatever your **mobile device** change the direction.<br>
**Bouncing**: The white ball will bouncing back once it touch the botton of webpage of the device, and bouncing back half of the height as before.<br>
**Drop agin**: The white ball drop again.<br><br>
[The example web is here.](http://webpage.pace.edu/mq33982p/HW1024_1.html)<br>
<h3>Note</h3>
