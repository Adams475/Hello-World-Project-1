#!/usr/bin/python
from sense_hat import SenseHat
import time
import sys
import math
from firebase import firebase


firebase = firebase.FirebaseApplication('https://fan-website-29409.firebaseio.com/')
sense = SenseHat()
sense.clear()

b = 17.368
c = 238.88
comfortLevel =int(firebase.get('/Users/undefined','humidity'))
o = [0,255,0]
x = [255,0,0]

lights = [
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
o,o,o,o,o,o,o,o,
]

sense.set_pixels(lights)

sense.clear()

try:
	while True:
			comfortLevel = int(firebase.get('/Users/undefined','humidity'))

			temp = sense.get_temperature()
			temp =  round(temp,1)
			print("Temperature C" , temp)
			
			humidity = sense.get_humidity()
			humidity = round(humidity, 1)
			print("Humidity :", humidity)

			pressure = sense.get_pressure()
			pressure = round(pressure, 1)
			print ("Pressure:", pressure)
			
			lamb =(math.log(humidity/100)/math.log(2.71828182))+(b*temp/(c+temp))
			dewPoint = (c*lamb)/(b-lamb)
			print ("Dew Point:", dewPoint)			
			#green is fan
			if (dewPoint<comfortLevel):
				lights = [
				x,x,x,x,x,x,x,x,
				x,x,x,x,x,x,x,x,
				x,x,x,x,x,x,x,x,
				x,x,x,x,x,x,x,x,
				x,x,x,x,x,x,x,x,
				x,x,x,x,x,x,x,x,
				x,x,x,x,x,x,x,x,
				x,x,x,x,x,x,x,x,
				]				
				sense.set_pixels(lights)
			elif (dewPoint>comfortLevel):
				lights = [
				o,o,o,o,o,o,o,o,
				o,o,o,o,o,o,o,o,
				o,o,o,o,o,o,o,o,
				o,o,o,o,o,o,o,o,
				o,o,o,o,o,o,o,o,
				o,o,o,o,o,o,o,o,
				o,o,o,o,o,o,o,o,
				o,o,o,o,o,o,o,o,	
				]
				sense.set_pixels(lights)
			time.sleep(1)
			
							

except KeyboardInterrupt:
	pass
	sense.clear()
